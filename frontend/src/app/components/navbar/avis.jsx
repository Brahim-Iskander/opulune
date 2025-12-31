
import React, { useState, useEffect } from 'react';
import { Frown, Meh, Smile, Heart } from 'lucide-react';
import axios from 'axios'

const styles = {
  container: {
    
    backgroundColor: 'transparent',
    padding: '32px 16px',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  maxWidth: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '32px',
    color: '#ffffffff'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
    marginTop: '32px'
  },
  avisCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  avisHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  },
  avatar: {
    width: '48px',
    height: '48px',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  avisInfo: {
    flex: 1
  },
  avisName: {
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '8px',
    fontSize: '16px'
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  ratingButtons: {
    display: 'flex',
    gap: '4px'
  },
  ratingLabel: {
    fontSize: '12px',
    color: '#6b7280',
    fontWeight: '500'
  },
  messageBox: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    border: '1px solid #e2e8f0'
  },
  message: {
    color: '#374151',
    lineHeight: '1.6',
    margin: 0,
    fontSize: '14px'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  date: {
    fontSize: '12px',
    color: '#9ca3af'
  },
  statusBadge: {
    padding: '4px 8px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '500'
  },
  statusPending: {
    backgroundColor: '#fef3c7',
    color: '#92400e'
  },
  statusApproved: {
    backgroundColor: '#d1fae5',
    color: '#065f46'
  },
  statusRejected: {
    backgroundColor: '#fee2e2',
    color: '#991b1b'
  },
  loading: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '16px',
    padding: '40px'
  },
  error: {
    textAlign: 'center',
    color: '#fecaca',
    fontSize: '16px',
    padding: '40px'
  },
  noReviews: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '16px',
    padding: '40px'
  }
};

const customIcons = {
  1: <Frown size={20} color="#ef4444" />,
  2: <Frown size={20} color="#f87171" />,
  3: <Meh size={20} color="#eab308" />,
  4: <Smile size={20} color="#10b981" />,
  5: <Heart size={20} color="#059669" />
};

const ratingLabels = {
  1: 'Très insatisfait',
  2: 'Insatisfait', 
  3: 'Neutre',
  4: 'Satisfait',
  5: 'Très satisfait'
};

function RatingDisplay({ rating }) {
  return (
    <div style={styles.ratingButtons}>
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} style={{
          opacity: star <= rating ? 1 : 0.2
        }}>
          {customIcons[star]}
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ status }) {
  const getStatusStyle = (status) => {
    switch(status) {
      case 'approved':
        return { ...styles.statusBadge, ...styles.statusApproved };
      case 'rejected':
        return { ...styles.statusBadge, ...styles.statusRejected };
      default:
        return { ...styles.statusBadge, ...styles.statusPending };
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'approved':
        return 'Approuvé';
      case 'rejected':
        return 'Rejeté';
      default:
        return 'En attente';
    }
  };

  return (
    <span style={getStatusStyle(status)}>
      {getStatusText(status)}
    </span>
  );
}

function AvisCard({ avis }) {
  return (
    <div 
      style={styles.avisCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={styles.avisHeader}>
        <div style={styles.avatar}>
          {avis.name.charAt(0).toUpperCase()}
        </div>
        <div style={styles.avisInfo}>
          <h3 style={styles.avisName}>{avis.name}</h3>
          <div style={styles.ratingContainer}>
            <RatingDisplay rating={avis.rate} />
            <span style={styles.ratingLabel}>
              {ratingLabels[avis.rate]}
            </span>
          </div>
        </div>
      </div>
      
      <div style={styles.messageBox}>
        <p style={styles.message}>{avis.comment}</p>
      </div>
      
      <div style={styles.footer}>
        <div style={styles.date}>
          {new Date(avis.createdAt).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
        <StatusBadge status={avis.status} />
      </div>
    </div>
  );
}

export default function AvisDisplay() {
  const [avis, setAvis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAvis();
  }, []);

const fetchAvis = async () => {
  try {
    setLoading(true);
    const response = await axios.get('https://makina-1.onrender.com/comments');
    setAvis(response.data);
    setError(null);
  } catch (err) {
    console.error('Error fetching avis:', err);
    setError('Erreur lors du chargement des avis');
  } finally {
    setLoading(false);
  }
};


  if (loading) {
    return (
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <h1 style={styles.title}>Avis Clients</h1>
          <div style={styles.loading}>Chargement des avis...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <div style={styles.maxWidth}>
          <h1 style={styles.title}>Avis Clients</h1>
          <div style={styles.error}>{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        <h1 style={styles.title}>Avis Clients ({avis.length})</h1>
        
        {avis.length === 0 ? (
          <div style={styles.noReviews}>
            Aucun avis disponible pour le moment.
          </div>
        ) : (
          <div style={styles.grid}>
            {avis.map((avisSingle) => (
              <AvisCard key={avisSingle._id} avis={avisSingle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}