"use client";
import { useState, useEffect } from 'react';
import styles from './OpuluneHomepage.module.css';

export default function OpuluneHomepage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      name: "Oud de Minuit",
      description: "Ambre sombre & bois exotiques",
      price: "78€",
      image: "🌙"
    },
    {
      name: "Rose Dorée",
      description: "Rose bulgare & champagne",
      price: "82€",
      image: "🌹"
    },
    {
      name: "Velours Noir",
      description: "Figue noire & musc cachemire",
      price: "75€",
      image: "🖤"
    },
    {
      name: "Luna Blanc",
      description: "Thé blanc & fleur de lune",
      price: "72€",
      image: "✨"
    }
  ];

  const collections = [
    {
      title: "CÉLESTE",
      subtitle: "Luminescence inspirée de la lune",
      count: "8 parfums"
    },
    {
      title: "OPULENT",
      subtitle: "Luxe infusé d'or",
      count: "6 parfums"
    },
    {
      title: "NOIR",
      subtitle: "Sombre & mystérieux",
      count: "5 parfums"
    }
  ];

  return (
    <div className={styles.container}>
     

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Bougies Artisanales de Luxe</div>
          <h1 className={styles.heroTitle}>Illuminez Votre Sanctuaire</h1>
          <p className={styles.heroDescription}>
            La perfection coulée à la main rencontre l'élégance intemporelle. Chaque bougie Opulune est un chef-d'œuvre de senteur et de design, conçu pour transformer votre espace en un havre de luxe.
          </p>
          <a href="/produits" className={styles.ctaButton}>Découvrir la Collection</a>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Parfums Signature</div>
          <h2 className={styles.sectionTitle}>Créations Vedettes</h2>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div 
              key={index} 
              className={styles.productCard}
              onMouseEnter={() => setActiveProduct(index)}
            >
              <span className={styles.productIcon}>{product.image}</span>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productPrice}>{product.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Collections */}
      <section className={styles.collections}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionSubtitle}>Collections Raffinées</div>
          <h2 className={styles.sectionTitle}>Découvrez Notre Univers</h2>
        </div>
        <div className={styles.collectionsGrid}>
          {collections.map((collection, index) => (
            <div key={index} className={styles.collectionCard}>
              <h3 className={styles.collectionTitle}>{collection.title}</h3>
              <p className={styles.collectionSubtitle}>{collection.subtitle}</p>
              <div className={styles.collectionCount}>{collection.count}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className={styles.experience}>
        <div className={styles.experienceContent}>
          <h2 className={styles.experienceTitle}>L'Expérience Opulune</h2>
          <p className={styles.experienceDescription}>
            Chaque bougie est un voyage. De la première flamme jusqu'à la dernière heure, nous créons des moments de pure indulgence en utilisant uniquement les cires naturelles les plus fines, des huiles parfumées premium et des mèches en coton sans plomb.
          </p>
          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Coulée à la Main</div>
              <div className={styles.featureDescription}>Artisanat en petits lots</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Cire Premium</div>
              <div className={styles.featureDescription}>100% mélange naturel soja & coco</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>Parfum de Luxe</div>
              <div className={styles.featureDescription}>Profils olfactifs complexes</div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureTitle}>65+ Heures de Combustion</div>
              <div className={styles.featureDescription}>Luxe longue durée</div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}