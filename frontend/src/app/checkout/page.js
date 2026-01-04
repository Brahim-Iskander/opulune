"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import axios from "axios";

import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Avatar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Custom theme with gold/amber colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#d4af37",
    },
    secondary: {
      main: "#1a1a2e",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Playfair Display', serif",
    },
    h2: {
      fontFamily: "'Playfair Display', serif",
    },
  },
});

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "TN",
  });

  useEffect(() => {
    const productsParam = searchParams.get("products");
    const totalParam = searchParams.get("total");

    if (productsParam) {
      try {
        setProducts(JSON.parse(productsParam));
      } catch (e) {
        console.error("Invalid products data");
      }
    }

    if (totalParam) {
      setTotal(parseFloat(totalParam));
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateTax = () => {
    return total * 0.1;
  };

  const calculateTotal = () => {
    return total + calculateTax();
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Validate required fields before sending
  if (!formData.email || !formData.firstName || !formData.lastName) {
    alert(
      "Please fill in all required fields: first name, last name, and email."
    );
    return;
  }

  const orderData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone || "",
    address: formData.address || "",
    city: formData.city || "",
    zipCode: formData.zipCode || "",
    country: formData.country || "",
    total: total || 0,
    products: products.map((p) => ({
      id: p.id || "",
      name: p.name || "",
      price: p.price || 0,
      quantity: p.quantity || 1,
      url: p.url || "",
    })),
  };

  console.log("Submitting order:", orderData); // Debug

  try {
    const response = await axios.post("http://localhost:8081/api/checkout",orderData);

    // ✅ Calculate subtotal and tax
    const subtotal = total / 1.1; // Total without 10% tax
    const tax = total - subtotal;

    // ✅ Create confirmation data with correct structure
    const confirmationData = {
      orderNumber: response.data.orderId || `ORD-${Date.now()}`,
      orderDate: new Date().toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      email: formData.email,
      items: products.map((p) => ({  
        id: p.id || "",
        name: p.name || "",
        price: p.price || 0,
        quantity: p.quantity || 1,
        url: p.url || "",
      })),
      subtotal: subtotal,
      tax: tax,
      total: total,
      shippingAddress: {  // ✅ Added shippingAddress object
        name: `${formData.firstName} ${formData.lastName}`,
        street: formData.address || "N/A",
        city: formData.city ? `${formData.city} ${formData.zipCode}` : "N/A",
        country: formData.country || "N/A"
      }
    };

    localStorage.setItem("orderConfirmation", JSON.stringify(confirmationData));
    localStorage.removeItem("cart");
    router.push("/order-confirmation");
  } catch (error) {
    console.error(
      "Error placing order:",
      error.response ? error.response.data : error.message
    );
    alert("Failed to place order. See console for details.");
  }
};

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #fafaf8 0%, #f5f3ed 100%)",
          py: { xs: 4, md: 8 },
        }}
      >
        <Container maxWidth="xl">
          {/* Header */}
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 300,
                color: "#1a1a2e",
                mb: 1,
                letterSpacing: "-1px",
              }}
            >
              Checkout
            </Typography>
            <Typography variant="h6" sx={{ color: "#666666", fontWeight: 400 }}>
              Complete your order and enjoy your purchase
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 3, md: 6 }}>
            {/* Left Side - Form Section */}
            <Grid item xs={12} lg={8}>
              {/* Contact Information */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  mb: 4,
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box display="flex" alignItems="center" gap={1.5} mb={4}>
                  <Avatar
                    sx={{
                      bgcolor: "#d4af37",
                      width: 32,
                      height: 32,
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                  >
                    1
                  </Avatar>
                  <Typography variant="h5" fontWeight={600} color="#2d2d2d">
                    Contact Information
                  </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        placeholder="John"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            backgroundColor: "white",
                            "&:hover": {
                              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                            },
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        placeholder="Doe"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            backgroundColor: "white",
                            "&:hover": {
                              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                            },
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john.doe@example.com"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            backgroundColor: "white",
                            "&:hover": {
                              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                            },
                          },
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+216 xx xxx xxx"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            backgroundColor: "white",
                            "&:hover": {
                              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                            },
                            "&.Mui-focused": {
                              boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </form>
              </Paper>

              {/* Shipping Address */}
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box display="flex" alignItems="center" gap={1.5} mb={4}>
                  <Avatar
                    sx={{
                      bgcolor: "#d4af37",
                      width: 32,
                      height: 32,
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                  >
                    2
                  </Avatar>
                  <Typography variant="h5" fontWeight={600} color="#2d2d2d">
                    Shipping Address
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Street Address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="123 Main Street"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "white",
                          "&:hover": {
                            boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                          },
                          "&.Mui-focused": {
                            boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                          },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Tunis"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "white",
                          "&:hover": {
                            boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                          },
                          "&.Mui-focused": {
                            boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                          },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="ZIP Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      placeholder="1000"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "white",
                          "&:hover": {
                            boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                          },
                          "&.Mui-focused": {
                            boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                          },
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      SelectProps={{
                        native: true,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 3,
                          backgroundColor: "white",
                          "&:hover": {
                            boxShadow: "0 4px 12px rgba(212, 175, 55, 0.1)",
                          },
                          "&.Mui-focused": {
                            boxShadow: "0 8px 20px rgba(212, 175, 55, 0.15)",
                          },
                        },
                      }}
                    >
                      <option value="TN">Tunisia</option>
                    </TextField>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Right Side - Order Summary */}
            <Grid
              container
              spacing={{ xs: 3, md: 6 }}
              sx={{ alignItems: "flex-start" }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  background: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                  position: { xs: "relative", lg: "sticky" }, // Only sticky on large screens
                  top: { lg: 20 },
                  height: "fit-content", // Important: allows it to stick properly
                }}
              >
                <Box display="flex" alignItems="center" gap={1} mb={3}>
                  <Typography variant="h4">🛒</Typography>
                  <Typography variant="h5" fontWeight={600} color="#2d2d2d">
                    Order Summary
                  </Typography>
                </Box>

                {/* Products List */}
                <Box sx={{ maxHeight: 320, overflow: "auto", mb: 3 }}>
                  {products.map((item, index) => (
                    <Paper
                      key={item.id || index}
                      elevation={0}
                      sx={{
                        p: 2,
                        mb: 2,
                        borderRadius: 3,
                        background: "rgba(255, 255, 255, 0.6)",
                        border: "1px solid #e8e8e8",
                        display: "flex",
                        gap: 2,
                        transition: "all 0.3s",
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        },
                      }}
                    >
                      <Avatar
                        src={item.url}
                        alt={item.name}
                        variant="rounded"
                        sx={{ width: 64, height: 64 }}
                      />
                      <Box flex={1} minWidth={0}>
                        <Typography
                          variant="subtitle2"
                          fontWeight={500}
                          color="#2d2d2d"
                          noWrap
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="caption" color="#666">
                          Qty: {item.quantity}
                        </Typography>
                      </Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#2d2d2d"
                      >
                        {(item.price * item.quantity).toFixed(2)} TND
                      </Typography>
                    </Paper>
                  ))}
                </Box>

                <Divider
                  sx={{ mb: 2, borderColor: "#e8e8e8", borderWidth: 1 }}
                />

                {/* Price Breakdown */}
                <Box mb={3}>
                  <Box display="flex" justifyContent="space-between" mb={1.5}>
                    <Typography color="#2d2d2d">Subtotal</Typography>
                    <Typography fontWeight={500}>
                      {total.toFixed(2)} TND
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={1.5}>
                    <Typography color="#2d2d2d">Tax (10%)</Typography>
                    <Typography fontWeight={500}>
                      {calculateTax().toFixed(2)} TND
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography color="#2d2d2d">Shipping</Typography>
                    <Typography fontWeight={600} color="#2d7a3e">
                      FREE
                    </Typography>
                  </Box>

                  <Divider
                    sx={{ mb: 2, borderColor: "#e8e8e8", borderWidth: 1 }}
                  />

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="h6" fontWeight={700} color="#2d2d2d">
                      Total
                    </Typography>
                    <Typography variant="h5" fontWeight={700} color="#d4af37">
                      {calculateTotal().toFixed(2)} TND
                    </Typography>
                  </Box>
                </Box>

                {/* Place Order Button */}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  sx={{
                    py: 2,
                    fontSize: "1rem",
                    fontWeight: 600,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #c9a22e 100%)",
                    boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #c9a22e 0%, #b89428 100%)",
                      boxShadow: "0 6px 20px rgba(212, 175, 55, 0.4)",
                      transform: "scale(1.02)",
                    },
                    transition: "all 0.3s",
                  }}
                >
                  Place Order {calculateTotal().toFixed(2)} TND
                </Button>

                <Typography
                  variant="caption"
                  color="#666"
                  display="block"
                  textAlign="center"
                  mt={2}
                >
                  🔒 Secure checkout - Your information is protected
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Loading...</Typography>
        </Box>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
