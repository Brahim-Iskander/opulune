"use client";
import { useState } from "react";
import styles from "./ContactPage.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/api/contact",formData);

      console.log("Success:", response.data);
      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Nous Contacter</div>
          <h1 className={styles.heroTitle}>Parlons Ensemble</h1>
          <p className={styles.heroDescription}>
            Nous serions ravis d'échanger avec vous. Que ce soit pour une
            question, une commande personnalisée ou simplement partager votre
            passion pour nos créations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Rejoignez-Nous</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Adresse</div>
              <div className={styles.infoValue}>
                123 Rue de la Lumière
                <br />
                75008 Paris, France
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Téléphone</div>
              <div className={styles.infoValue}>
                <a href="tel:+33123456789">+33 1 23 45 67 89</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Email</div>
              <div className={styles.infoValue}>
                <a href="mailto:contact@opulune.fr">contact@opulune.fr</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>Suivez-Nous</div>
              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/profile.php?id=61583061987333"
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/opu_lune?igsh=MXF4MjYwY2dqNWRzYQ=="
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Envoyez-nous un Message</h3>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nom Complet</label>
                <input
                  type="text"
                  name="name"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Téléphone</label>
                <input
                  type="tel"
                  name="phone"
                  className={styles.formInput}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Sujet</label>
                <select
                  name="subject"
                  className={styles.formSelect}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="commande">Commande Générale</option>
                  <option value="personnalise">Commande Personnalisée</option>
                  <option value="grossiste">Vente en Gros</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                name="message"
                className={styles.formTextarea}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton}>
              Envoyer le Message
            </button>
          </form>
        </div>
      </section>

      {/* Hours Section */}
      <section className={styles.hoursSection}>
        <h2 className={styles.hoursTitle}>Heures d'Ouverture</h2>
        <div className={styles.hoursGrid}>
          <div className={styles.hoursItem}>
            <div className={styles.hoursDay}>Lundi - Vendredi</div>
            <div className={styles.hoursTime}>10h00 - 19h00</div>
          </div>
          <div className={styles.hoursItem}>
            <div className={styles.hoursDay}>Samedi</div>
            <div className={styles.hoursTime}>11h00 - 18h00</div>
          </div>
          <div className={styles.hoursItem}>
            <div className={styles.hoursDay}>Dimanche</div>
            <div className={styles.hoursTime}>Fermé</div>
          </div>
        </div>
      </section>
    </div>
  );
}
