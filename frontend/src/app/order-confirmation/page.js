"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Add this import

export default function OrderConfirmationPage() {
  const [orderData, setOrderData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderConfirmation");

    if (storedOrder) {
      setOrderData(JSON.parse(storedOrder));
    } else {
      router.push("/");
    }
  }, []);

  if (!orderData) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fafaf8 0%, #f5f3ed 100%)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h2>Loading...</h2>
      </div>
    );
  }

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fafaf8 0%, #f5f3ed 100%)",
      padding: "40px 20px",
      fontFamily: "'Inter', sans-serif",
    },
    maxWidth: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    paper: {
      padding: "40px",
      marginBottom: "48px",
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
    },
    successIcon: {
      width: "80px",
      height: "80px",
      margin: "0 auto 24px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #d4af37 0%, #c9a22e 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "50px",
      color: "white",
      animation: "scaleIn 0.5s ease-out",
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 300,
      color: "#1a1a2e",
      marginBottom: "16px",
      letterSpacing: "-1px",
      textAlign: "center",
    },
    subtitle: {
      color: "#666666",
      fontWeight: 400,
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: 1.6,
      textAlign: "center",
      fontSize: "1.1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      marginBottom: "48px",
    },
    infoCard: {
      padding: "24px",
      borderRadius: "16px",
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
    },
    label: {
      color: "#999",
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontSize: "0.75rem",
      fontWeight: 600,
      marginBottom: "8px",
    },
    button: {
      width: "100%",
      padding: "16px 32px",
      fontSize: "1rem",
      fontWeight: 600,
      borderRadius: "12px",
      background: "linear-gradient(135deg, #d4af37 0%, #c9a22e 100%)",
      boxShadow: "0 4px 12px rgba(212, 175, 55, 0.3)",
      border: "none",
      color: "white",
      cursor: "pointer",
      transition: "all 0.3s",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
      marginBottom: "16px",
    },
    buttonOutline: {
      width: "100%",
      padding: "16px 32px",
      fontSize: "1rem",
      fontWeight: 600,
      borderRadius: "12px",
      background: "transparent",
      border: "2px solid #d4af37",
      color: "#d4af37",
      cursor: "pointer",
      transition: "all 0.3s",
      textDecoration: "none",
      display: "block",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Success Header */}
        <div style={{ ...styles.paper, textAlign: "center" }}>
          <div style={styles.successIcon}>✓</div>
          <h1 style={styles.title}>Commande Confirmée !</h1>
          <p style={styles.subtitle}>
            Merci pour votre confiance. Votre commande a été reçue et sera
            préparée avec le plus grand soin.
          </p>
        </div>

        {/* Order Info Cards */}
        <div style={styles.grid}>
          <div style={styles.infoCard}>
            <div style={styles.label}>Numéro de Commande</div>
            <div
              style={{ fontSize: "1.5rem", color: "#d4af37", fontWeight: 600 }}
            >
              {orderData.orderNumber}
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.label}>Date</div>
            <div
              style={{ fontSize: "1.2rem", color: "#2d2d2d", fontWeight: 500 }}
            >
              {orderData.orderDate}
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.label}>Email de Confirmation</div>
            <div
              style={{
                fontSize: "1rem",
                color: "#2d2d2d",
                fontWeight: 500,
                wordBreak: "break-word",
              }}
            >
              {orderData.email}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
          }}
        >
          {/* Order Details */}
          <div style={{ gridColumn: "span 2" }}>
            <div style={styles.paper}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                  marginBottom: "24px",
                }}
              >
                Détails de la Commande
              </h2>
              {/* Products */}
              {orderData.items.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    marginBottom:
                      index < orderData.items.length - 1 ? "24px" : "0",
                  }}
                >
                  <div
                    style={{ display: "flex", gap: "16px", padding: "16px 0" }}
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontWeight: 600,
                          color: "#2d2d2d",
                          marginBottom: "4px",
                          fontSize: "1.1rem",
                        }}
                      >
                        {item.name}
                      </div>
                      <div style={{ color: "#666", fontSize: "0.9rem" }}>
                        Quantité: {item.quantity}
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: 600,
                        color: "#d4af37",
                        fontSize: "1.2rem",
                      }}
                    >
                      {(item.price * item.quantity).toFixed(2)} TND
                    </div>
                  </div>
                  {index < orderData.items.length - 1 && (
                    <div style={{ borderBottom: "1px solid #e8e8e8" }} />
                  )}
                </div>
              ))}

              <div
                style={{ borderTop: "2px solid #e8e8e8", margin: "24px 0" }}
              />

              {/* Price Summary */}
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#666" }}>Sous-total</span>
                  <span style={{ fontWeight: 500 }}>
                    {orderData.subtotal.toFixed(2)} TND
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#666" }}>Tax (10%)</span>
                  <span style={{ fontWeight: 500 }}>
                    {orderData.tax.toFixed(2)} TND
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ color: "#666" }}>Livraison</span>
                  <span style={{ fontWeight: 600, color: "#2d7a3e" }}>
                    GRATUITE
                  </span>
                </div>

                <div
                  style={{
                    borderTop: "2px solid #e8e8e8",
                    paddingTop: "16px",
                    marginBottom: "16px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 700,
                      color: "#2d2d2d",
                    }}
                  >
                    Total
                  </span>
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#d4af37",
                    }}
                  >
                    {orderData.total.toFixed(2)} TND
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div style={styles.paper}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                  marginBottom: "24px",
                }}
              >
                Adresse de Livraison
              </h2>
              <div style={{ lineHeight: 1.8 }}>
                <div
                  style={{
                    marginBottom: "8px",
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {orderData.shippingAddress.name}
                </div>
                <div style={{ color: "#666", marginBottom: "4px" }}>
                  {orderData.shippingAddress.street}
                </div>
                <div style={{ color: "#666", marginBottom: "4px" }}>
                  {orderData.shippingAddress.city}
                </div>
                <div style={{ color: "#666" }}>
                  {orderData.shippingAddress.country}
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps Sidebar */}
          <div>
            <div style={{ ...styles.paper, position: "sticky", top: "20px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#2d2d2d",
                  marginBottom: "24px",
                }}
              >
                Prochaines Étapes
              </h2>

              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{ display: "flex", gap: "16px", marginBottom: "24px" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#d4af37",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                    }}
                  >
                    📧
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                      Email de Confirmation
                    </div>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Vous recevrez un email avec tous les détails
                    </div>
                  </div>
                </div>

                <div
                  style={{ display: "flex", gap: "16px", marginBottom: "24px" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#d4af37",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                    }}
                  >
                    🎨
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                      Préparation Artisanale
                    </div>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Nos artisans préparent votre commande avec soin
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#d4af37",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      flexShrink: 0,
                    }}
                  >
                    🚚
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                      Expédition Rapide
                    </div>
                    <div
                      style={{
                        color: "#666",
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      Livraison sous 3-5 jours avec suivi
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{ borderTop: "1px solid #e8e8e8", margin: "24px 0" }}
              />

              <a
                href="/produits"
                style={styles.button}
                onClick={(e) => {
                  e.preventDefault(); // ✅ Prevent immediate navigation
                  localStorage.removeItem("orderConfirmation");
                  window.location.href = "/produits"; // ✅ Navigate after clearing
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #c9a22e 0%, #b89428 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(212, 175, 55, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #d4af37 0%, #c9a22e 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(212, 175, 55, 0.3)";
                }}
              >
                Continuer mes Achats
              </a>

              <a
                href="/"
                style={styles.buttonOutline}
                onClick={(e) => {
                  e.preventDefault(); // ✅ Prevent immediate navigation
                  localStorage.removeItem("orderConfirmation");
                  window.location.href = "/"; // ✅ Navigate after clearing
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(212, 175, 55, 0.05)";
                  e.currentTarget.style.borderColor = "#c9a22e";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "#d4af37";
                }}
              >
                Retour à l'Accueil
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
