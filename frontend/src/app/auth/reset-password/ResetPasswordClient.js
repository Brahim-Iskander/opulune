"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";

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
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "2.2rem",
    marginBottom: "2rem",
    color: "#16171D",
  },
  input: {
    width: "100%",
    padding: "1rem",
    border: "1px solid rgba(44,44,44,.25)",
    background: "#F7F3ED",
    marginBottom: "1.2rem",
    fontFamily: "'Spectral', serif",
  },
  button: {
    width: "100%",
    padding: "1.2rem",
    background: "#16171D",
    color: "#FFFEF9",
    border: "none",
    letterSpacing: "0.2em",
    cursor: "pointer",
    transition: "all .3s",
  },
};

export default function ResetPassword() {
  const params = useSearchParams();
  const token = params.get("token");
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log("Token from URL:", token);


  const submit = async () => {
    if (!password || !confirm) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (password !== confirm) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://opulune-4.onrender.com/api/auth/reset-password", {
        token,
        password,
      });

      setMessage("Mot de passe mis à jour avec succès !");
      console.log(response.data);

      setTimeout(() => {
        router.push("/auth/users"); // redirect after 2 seconds
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la réinitialisation du mot de passe. Vérifiez le token ou le serveur !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Nouveau mot de passe</h1>

        <input
          type="password"
          placeholder="Nouveau mot de passe"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          style={styles.input}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.background = "#C9A961")}
          onMouseLeave={(e) => (e.target.style.background = "#16171D")}
          onClick={submit}
          disabled={loading}
        >
          {loading ? "RÉINITIALISATION..." : "RÉINITIALISER"}
        </button>

        {message && <p style={{ marginTop: "1rem", color: "green" }}>{message}</p>}
      </div>
    </div>
  );
}
