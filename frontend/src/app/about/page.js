"use client";
import styles from './AboutPage.module.css';

export default function AboutPage() {
  const metadata = {
  title: 'À Propos - Notre Histoire | Nom de votre boutique',
  description: 'Découvrez notre histoire, nos valeurs et notre engagement envers la qualité. Apprenez-en plus sur notre équipe et notre mission.',
  keywords: ['à propos', 'notre histoire', 'mission', 'valeurs', 'équipe'],
  openGraph: {
    title: 'À Propos - Notre Histoire',
    description: 'Découvrez notre histoire, nos valeurs et notre engagement envers la qualité.',
    type: 'website',
    url: 'https://opulune.netlify.app/',
    images: ['/images/og-about.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À Propos - Notre Histoire',
    description: 'Découvrez notre histoire et nos valeurs.',
    images: ['/images/og-about.jpg'],
  },
  alternates: {
    canonical: 'https://opulune.netlify.app/',
  }};
  
  return (
    <div className={styles.container}>
      

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Notre Histoire</div>
          <h1 className={styles.heroTitle}>L'Art de la Lumière</h1>
          <p className={styles.heroDescription}>
            Depuis 2025, Opulune transforme des moments ordinaires en expériences extraordinaires à travers l'art ancestral de la fabrication artisanale de bougies. Chaque création est une symphonie de parfums soigneusement orchestrée, conçue pour éveiller vos sens et élever votre espace.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyImage}>
            <img src="/b1.png" alt="Notre Atelier" className={styles.image} style={{ width: "100%", height: "100%", objectFit:"cover" }} />
          </div>
          <div className={styles.storyContent}>
            <div className={styles.sectionSubtitle}>Notre Voyage</div>
            <h2 className={styles.sectionTitle}>Une Passion Devenue Réalité</h2>
            <p className={styles.storyText}>
              Tout a commencé dans un petit atelier parisien, où notre fondatrice, inspirée par les nuits étoilées et les parfums envoûtants de ses voyages, a décidé de créer quelque chose d'unique. Opulune est née de cette passion pour l'artisanat, la qualité et le luxe accessible.
            </p>
            <p className={styles.storyText}>
              Aujourd'hui, chaque bougie que nous créons reflète notre engagement envers l'excellence. Nous sélectionnons méticuleusement les meilleures cires naturelles, les huiles essentielles les plus pures et créons des parfums qui racontent une histoire.
            </p>
            <p className={styles.storyText}>
              Notre mission est simple : illuminer votre quotidien avec des créations qui transcendent le simple objet pour devenir une expérience sensorielle inoubliable.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <div className={styles.sectionSubtitle}>Nos Valeurs</div>
          <h2 className={styles.sectionTitle}>Ce Qui Nous Définit</h2>
        </div>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <span className={styles.valueIcon}>✨</span>
            <h3 className={styles.valueTitle}>Excellence</h3>
            <p className={styles.valueDescription}>
              Chaque détail compte. De la sélection des matières premières à la finition finale, nous poursuivons la perfection dans chaque création.
            </p>
          </div>
          <div className={styles.valueCard}>
            <span className={styles.valueIcon}>🌿</span>
            <h3 className={styles.valueTitle}>Durabilité</h3>
            <p className={styles.valueDescription}>
              Nous utilisons uniquement des cires naturelles, des mèches en coton bio et des emballages recyclables pour protéger notre planète.
            </p>
          </div>
          <div className={styles.valueCard}>
            <span className={styles.valueIcon}>🎨</span>
            <h3 className={styles.valueTitle}>Artisanat</h3>
            <p className={styles.valueDescription}>
              Chaque bougie est coulée à la main par nos artisans experts, garantissant une qualité et une attention aux détails incomparables.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <div className={styles.sectionSubtitle}>Notre Processus</div>
          <h2 className={styles.sectionTitle}>De l'Inspiration à la Perfection</h2>
          <p className={styles.storyText}>
            Découvrez le voyage méticuleux que chaque bougie Opulune entreprend, de la conception à votre maison.
          </p>
        </div>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Inspiration & Création</h3>
              <p className={styles.stepDescription}>
                Nos parfumeurs voyagent à travers le monde, s'inspirant de la nature, de l'art et des cultures pour créer des compositions olfactives uniques et sophistiquées.
              </p>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Sélection des Matières</h3>
              <p className={styles.stepDescription}>
                Nous choisissons avec soin les meilleures cires naturelles de soja et de coco, combinées avec des huiles essentielles premium et des parfums de haute qualité.
              </p>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Fabrication Artisanale</h3>
              <p className={styles.stepDescription}>
                Chaque bougie est coulée à la main dans notre atelier, avec une attention méticuleuse portée à la température, au timing et à la qualité de chaque création.
              </p>
            </div>
          </div>
          <div className={styles.processStep}>
            <div className={styles.stepNumber}>04</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>Contrôle Qualité</h3>
              <p className={styles.stepDescription}>
                Après le repos nécessaire, chaque bougie est inspectée, testée et emballée avec soin pour garantir qu'elle arrive chez vous en parfait état.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamHeader}>
          <div className={styles.sectionSubtitle}>Notre Équipe</div>
          <h2 className={styles.sectionTitle}>Les Artisans d'Opulune</h2>
          <p className={styles.teamIntro}>
            Derrière chaque bougie se trouve une équipe passionnée de créateurs, d'artisans et de perfectionnistes dédiés à transformer votre expérience de la lumière en un moment de pur luxe. Notre équipe combine savoir-faire traditionnel et innovation moderne pour créer des bougies qui transcendent l'ordinaire.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Prêt à Illuminer Votre Vie?</h2>
          <p className={styles.ctaDescription}>
            Découvrez nos collections exclusives et laissez-vous transporter par des parfums qui racontent une histoire. Chaque bougie est une invitation au voyage sensoriel.
          </p>
          <a href="/produits" className={styles.ctaButton}>Explorer les Collections</a>
        </div>
      </section>

    </div>
  );
}