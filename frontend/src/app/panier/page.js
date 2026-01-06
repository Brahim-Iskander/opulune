"use client";
import { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, IconButton, Button, Box, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import Loading from "./loading";
import { useTheme } from '@mui/material/styles';
import { useRouter } from "next/navigation";
export default function CartPage() {
  const router = useRouter();
  const [rows, setRows] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // mobile detection

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setRows(JSON.parse(storedCart));
    else setRows([]);
  }, []);
const handleCheckout = () => {
    // Encode the data as URL search params
    const params = new URLSearchParams({
      products: JSON.stringify(rows),
      total: totalPrice.toString()
    });
    
    router.push(`/checkout?${params.toString()}`);
  };
  useEffect(() => {
    if (rows !== null) {
      localStorage.setItem("cart", JSON.stringify(rows));
    }
  }, [rows]);

  const handleQuantityChange = (index, delta) => {
    setRows(prev =>
      prev.map((row, i) =>
        i === index ? { ...row, quantity: Math.max(1, row.quantity + delta) } : row
      )
    );
  };

  const handleDelete = (index) => {
    setRows(prev => prev.filter((_, i) => i !== index));
  };

  if (rows === null) return <Loading />;
  if (rows.length === 0) return <Typography component="div" variant="h3" sx={{ textAlign: "center", marginTop: "100px",marginBottom:"100px"}}>Votre panier est vide</Typography>;

  const totalPrice = rows.reduce((acc, row) => acc + row.quantity * row.price, 0);

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: "50px",
      marginBottom: "50px",
      padding: "0 10px" // small padding on sides
    }}>
      <TableContainer component={Paper} sx={{
        width: isMobile ? "100%" : "80%", // centered and responsive
        maxWidth: 1200,
        padding: "20px"
      }}>
        <Typography variant="h4" sx={{ fontFamily: "var(--font-playfair)", fontWeight: "bold", marginTop: "20px", marginBottom: "20px", textAlign: "center" }}>
          Mon Panier
        </Typography>
        <Table sx={{ minWidth: isMobile ? '100%' : 650, margin: "0 auto" }} aria-label="cart table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }}>Produit</TableCell>
              <TableCell sx={{ fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }} align="center">Quantité</TableCell>
              <TableCell sx={{ fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }} align="right">Total</TableCell>
              <TableCell sx={{ fontFamily: "Arial", fontSize: "16px", fontWeight: "bold" }} align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row.name + index} sx={{ flexDirection: isMobile ? "column" : "row" }}>
                <TableCell component="th" scope="row">
                  <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center" }}>
                    <img src={row.imageUrl} alt={row.name} style={{
                      width: isMobile ? "80px" : "100px",
                      height: isMobile ? "80px" : "100px",
                      marginRight: isMobile ? "0" : "20px",
                      marginBottom: isMobile ? "10px" : "0",
                      borderRadius: "10px"
                    }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: isMobile ? "center" : "flex-start" }}>
                      <Typography sx={{ fontFamily: "var(--font-montserrat)", fontSize: "16px", fontWeight: "bold" }}>{row.name}</Typography>
                      <Typography sx={{ fontFamily: "var(--font-montserrat)", fontSize: "16px" }}>{row.price} TND</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleQuantityChange(index, -1)} size="small"><RemoveIcon /></IconButton>
                  <Typography sx={{ display: "inline-block", fontFamily: "var(--font-montserrat)", fontSize: "16px", margin: "0 10px" }}>{row.quantity}</Typography>
                  <IconButton onClick={() => handleQuantityChange(index, 1)} size="small"><AddIcon /></IconButton>
                </TableCell>
                <TableCell align="right" sx={{ fontFamily: "var(--font-montserrat)", fontSize: "16px", fontWeight: "600" }}>{row.quantity * row.price} TND</TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
            {/* Total row */}
            <TableRow>
              <TableCell />
              <TableCell align="right" sx={{ fontFamily: "var(--font-montserrat)", fontSize: "16px", fontWeight: "bold" }}>Total :</TableCell>
              <TableCell align="right" sx={{ fontFamily: "var(--font-montserrat)", fontSize: "16px", fontWeight: "bold" }}>{totalPrice} TND</TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>

        <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "center", width: "100%" }}>
          <Button variant="contained" sx={{
            fontFamily: "var(--font-playfair)",
            fontWeight: "bold",
            padding: "10px 30px",
            backgroundColor: "#000",
            color: "#fff",
            "&:hover": { backgroundColor: "#333" },
            width: isMobile ? "100%" : "auto"
          }}  onClick={() => {handleCheckout()}}>
            Checkout
          </Button>
        </Box>
      </TableContainer>
    </Box>
  );
}
