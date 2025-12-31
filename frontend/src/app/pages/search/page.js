"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../../about/AboutPage.module.css';

export default function RecherchePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Recherche:', searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}style={{ padding: '0px',height:'30%'}} >
        <div className={styles.heroContent} style={{ padding: '0px', marginTop: '0px' }}>
          <div className={styles.heroSubtitle}>Trouvez Votre Bougie Parfaite</div>
          <h1 className={styles.heroTitle}>Recherche</h1>
          <p className={styles.heroDescription}>
            Découvrez nos collections de bougies artisanales en recherchant par nom ou catégorie.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className={styles.storySection}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} style={{ marginBottom: '60px' }}>
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              maxWidth: '700px', 
              margin: '0 auto',
              flexWrap: 'wrap'
            }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Rechercher une bougie, un parfum, une catégorie..."
                style={{
                  flex: '1',
                  minWidth: '250px',
                  padding: '18px 24px',
                  fontSize: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => e.target.style.borderColor = '#1f2937'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
              <button
                type="submit"
                style={{
                  padding: '18px 40px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#fff',
                  backgroundColor: '#1f2937',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}
              >
                Rechercher
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Explorez Toutes Nos Collections</h2>
          <p className={styles.ctaDescription}>
            Découvrez l'intégralité de nos bougies artisanales et trouvez 
            celle qui illuminera votre quotidien.
          </p>
          <Link href="/produits" className={styles.ctaButton}>Voir Tous les Produits</Link>
        </div>
      </section>

    </div>
  );
}