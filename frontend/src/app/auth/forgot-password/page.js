"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #F7F3ED, #FFFEF9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Spectral', serif",
  },
  card: {
    background: "#FFFEF9",
    border: "1px solid rgba(201,169,97,.25)",
    padding: "4rem 3rem",
    width: "420px",
    textAlign: "center",
  },
  title: { fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", marginBottom: "1rem", color: "#16171D" },
  description: { fontSize: "0.95rem", color: "#2C2C2C", marginBottom: "2.5rem" },
  input: { width: "100%", padding: "1rem", border: "1px solid rgba(44,44,44,.25)", background: "#F7F3ED", marginBottom: "1.5rem" },
  button: { width: "100%", padding: "1.2rem", background: "#16171D", color: "#FFFEF9", border: "none", letterSpacing: "0.2em", cursor: "pointer", transition: "all .3s" },
};

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const submit = async () => {
    if (!email) return alert("Veuillez entrer votre email !");
    setLoading(true);
    try {
      const response = await axios.post(
        "https://opulune-4.onrender.com/api/auth/forgot-password-web", // use localhost for dev
        { email }
      );
      setMessage(response.data.message);
    } catch (err) {
      console.error(err);
      alert("Impossible de se connecter au serveur. Vérifiez votre backend !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Mot de passe oublié</h1>
        <p style={styles.description}>
          Entrez votre email et recevez un lien sécurisé pour réinitialiser votre mot de passe.
        </p>

        <input
          type="email"
          placeholder="vous@exemple.com"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = "#C9A961")}
          onMouseLeave={(e) => (e.target.style.background = "#16171D")}
          onClick={submit}
          disabled={loading}
        >
          {loading ? "ENVOI..." : "ENVOYER LE LIEN"}
        </button>

        {message && <p style={{ marginTop: "1rem", color: "green" }}>{message}</p>}
      </div>
    </div>
  );
}
