"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #F7F3ED 0%, #FFFEF9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 5%',
    fontFamily: "'Spectral', serif",
    position: 'relative',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.03,
    backgroundImage: `radial-gradient(circle at 30% 40%, #C9A961 1px, transparent 1px),
                      radial-gradient(circle at 70% 60%, #C9A961 1px, transparent 1px)`,
    backgroundSize: '150px 150px, 200px 200px',
    pointerEvents: 'none',
  },
  card: {
    background: '#FFFEF9',
    border: '1px solid rgba(201, 169, 97, 0.2)',
    padding: '4rem 3rem',
    maxWidth: '520px',
    width: '100%',
    position: 'relative',
    zIndex: 10,
  },
  logo: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  logoText: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.5rem',
    fontWeight: '300',
    letterSpacing: '0.3em',
    color: '#16171D',
    marginBottom: '0.5rem',
  },
  logoLine: {
    width: '40px',
    height: '1px',
    background: '#C9A961',
    margin: '0.5rem auto',
  },
  subtitle: {
    color: '#C9A961',
    fontSize: '0.85rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginTop: '0.5rem',
    fontWeight: '300',
  },
  title: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '2.5rem',
    fontWeight: '400',
    color: '#16171D',
    marginBottom: '1rem',
    textAlign: 'center',
    letterSpacing: '0.05em',
  },
  description: {
    fontSize: '1rem',
    color: '#2C2C2C',
    textAlign: 'center',
    marginBottom: '3rem',
    fontWeight: '300',
    lineHeight: '1.6',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  },
  label: {
    fontSize: '0.85rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: '#2C2C2C',
    fontWeight: '400',
  },
  input: {
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    border: '1px solid rgba(44, 44, 44, 0.2)',
    background: '#F7F3ED',
    fontFamily: "'Spectral', serif",
    color: '#2C2C2C',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  button: {
    padding: '1.3rem',
    fontSize: '0.85rem',
    fontWeight: '400',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: '#FFFEF9',
    background: '#16171D',
    border: '1px solid #16171D',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    marginTop: '1rem',
    fontFamily: "'Spectral', serif",
    position: 'relative',
    overflow: 'hidden',
  },
  link: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '0.9rem',
    color: '#2C2C2C',
    fontWeight: '300',
  },
  linkButton: {
    color: '#C9A961',
    fontWeight: '400',
    textDecoration: 'none',
    cursor: 'pointer',
    marginLeft: '0.5rem',
    letterSpacing: '0.05em',
    transition: 'color 0.3s ease',
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem',
  },
  checkbox: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#2C2C2C',
    fontWeight: '300',
  },
  forgotPassword: {
    fontSize: '0.85rem',
    color: '#C9A961',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  },
  decorativeLine: {
    position: 'relative',
    textAlign: 'center',
    margin: '0.5rem 0',
  },
  decorativeSymbol: {
    color: '#C9A961',
    fontSize: '1.2rem',
  },
};

export default function AuthPages() {
    const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
const handleSubmit = async () => {
  try {
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    
    const response = await axios.post(`https://opulune-1.onrender.com${endpoint}`, formData);
    
    
    if (response.data.success) {
     
      
      if (isLogin) {
         localStorage.setItem('user', JSON.stringify(response.data.user));
        router.refresh();
        router.push('/'); // Redirect to home after login
      } else {
        window.location.reload();       
      }
    } else {
      // Show error message from server
      alert(response.data.message);
    }
  } catch (error) {
    console.error('Request failed:', error);
    if (error.response) {
      alert(error.response.data.message || 'Une erreur est survenue');
    } else {
      alert('Erreur de connexion au serveur');
    }
  }
};


  return (
    <div style={styles.container}>
      <div style={styles.backgroundPattern}></div>
      
      <div style={styles.card}>
        <div style={styles.logo}>
          <div style={styles.logoText}>OPULUNE</div>
          <div style={styles.logoLine}></div>
          <div style={styles.subtitle}>L'Art de la Lumière</div>
        </div>

        <div style={styles.decorativeLine}>
          <span style={styles.decorativeSymbol}>✦</span>
        </div>

        <h1 style={styles.title}>
          {isLogin ? 'Bienvenue' : 'Créer un Compte'}
        </h1>
        <p style={styles.description}>
          {isLogin 
            ? 'Connectez-vous pour accéder à votre espace personnel' 
            : 'Rejoignez notre communauté et découvrez nos créations exclusives'}
        </p>

        <div style={styles.formContainer}>
          {!isLogin && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Nom Complet</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="Jean Dupont"
                onFocus={(e) => {
                  e.target.style.borderColor = '#C9A961';
                  e.target.style.background = '#FFFEF9';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(44, 44, 44, 0.2)';
                  e.target.style.background = '#F7F3ED';
                }}
              />
            </div>
          )}

          <div style={styles.formGroup}>
            <label style={styles.label}>Adresse Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="vous@exemple.com"
              onFocus={(e) => {
                e.target.style.borderColor = '#C9A961';
                e.target.style.background = '#FFFEF9';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(44, 44, 44, 0.2)';
                e.target.style.background = '#F7F3ED';
              }}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Mot de Passe</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={styles.input}
              placeholder="••••••••"
              onFocus={(e) => {
                e.target.style.borderColor = '#C9A961';
                e.target.style.background = '#FFFEF9';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(44, 44, 44, 0.2)';
                e.target.style.background = '#F7F3ED';
              }}
            />
          </div>

          {!isLogin && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Confirmer le Mot de Passe</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                style={styles.input}
                placeholder="••••••••"
                onFocus={(e) => {
                  e.target.style.borderColor = '#C9A961';
                  e.target.style.background = '#FFFEF9';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(44, 44, 44, 0.2)';
                  e.target.style.background = '#F7F3ED';
                }}
              />
            </div>
          )}

          {isLogin && (
            <div style={styles.checkboxContainer}>
              <label style={styles.checkbox}>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                Se souvenir de moi
              </label>
              <span 
                style={styles.forgotPassword}
                onMouseEnter={(e) => e.target.style.color = '#16171D'}
                onMouseLeave={(e) => e.target.style.color = '#C9A961'}
              >
                Mot de passe oublié?
              </span>
            </div>
          )}

          <button
            onClick={handleSubmit}
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.background = '#C9A961';
              e.target.style.borderColor = '#C9A961';
              e.target.style.color = '#16171D';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#16171D';
              e.target.style.borderColor = '#16171D';
              e.target.style.color = '#FFFEF9';
            }}
          >
            {isLogin ? 'Se Connecter' : 'Créer mon Compte'}
          </button>
        </div>

        <div style={styles.decorativeLine}>
          <span style={styles.decorativeSymbol}>✦</span>
        </div>

        <div style={styles.link}>
          {isLogin ? "Vous n'avez pas de compte?" : "Vous avez déjà un compte?"}
          <span
            style={styles.linkButton}
            onClick={() => setIsLogin(!isLogin)}
            onMouseEnter={(e) => e.target.style.color = '#16171D'}
            onMouseLeave={(e) => e.target.style.color = '#C9A961'}
          >
            {isLogin ? 'Créer un compte' : 'Se connecter'}
          </span>
        </div>
      </div>
    </div>
  );
}