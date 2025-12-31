import styles from '../../about/AboutPage.module.css';
export const metadata = {
  title: 'FAQ - Questions Fréquentes | Nom de votre boutique',
  description: 'Trouvez les réponses à vos questions sur nos produits, livraison, retours, paiements et plus encore.',
  keywords: ['FAQ', 'questions', 'aide', 'support', 'réponses'],
  openGraph: {
    title: 'FAQ - Questions Fréquentes',
    description: 'Trouvez les réponses à vos questions sur nos produits, livraison, retours et paiements.',
    type: 'website',
    url: 'https://opulune.netlify.app/pages/faq',
    images: ['/images/og-faq.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - Questions Fréquentes',
    description: 'Trouvez les réponses à vos questions.',
    images: ['/images/og-faq.jpg'],
  },
  alternates: {
    canonical: 'https://opulune.netlify.app/pages/faq',
  },
}
export default function FAQPage() {
  
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Aide & Support</div>
          <h1 className={styles.heroTitle}>Questions Fréquentes</h1>
          <p className={styles.heroDescription}>
            Trouvez les réponses à vos questions sur nos bougies artisanales, 
            la livraison, l'entretien et plus encore.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.storySection}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Produits */}
          <div style={{ marginBottom: '60px' }}>
            <h2 className={styles.sectionTitle}>À Propos de Nos Produits</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>De quoi sont faites vos bougies?</h3>
              <p className={styles.storyText}>
                Nos bougies sont fabriquées avec des cires naturelles de soja et de coco, 
                des mèches en coton biologique et des huiles essentielles premium. 
                Nous n'utilisons aucun produit chimique nocif, paraffine ou additif artificiel.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Combien de temps durent vos bougies?</h3>
              <p className={styles.storyText}>
                Nos bougies ont une durée de combustion moyenne de 40 à 60 heures selon la taille. 
                Les petites bougies (180g) durent environ 40 heures, tandis que nos grandes 
                bougies (300g) peuvent durer jusqu'à 60 heures avec un entretien approprié.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Vos bougies sont-elles véganes et sans cruauté?</h3>
              <p className={styles.storyText}>
                Oui, absolument! Toutes nos bougies sont 100% véganes et jamais testées sur 
                les animaux. Nous utilisons uniquement des ingrédients d'origine végétale et 
                des parfums sans composants d'origine animale.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Puis-je réutiliser les contenants?</h3>
              <p className={styles.storyText}>
                Certainement! Nos contenants en verre sont conçus pour être réutilisés. 
                Une fois la bougie terminée, nettoyez simplement le pot avec de l'eau chaude 
                savonneuse et utilisez-le comme pot de fleurs, rangement ou décoration.
              </p>
            </div>
          </div>

          {/* Commande & Livraison */}
          <div style={{ marginBottom: '60px' }}>
            <h2 className={styles.sectionTitle}>Commande & Livraison</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Quels sont les délais de livraison?</h3>
              <p className={styles.storyText}>
                Nous expédions sous 2-3 jours ouvrables. La livraison standard prend 
                généralement 3-5 jours ouvrables en France métropolitaine. Pour les autres 
                destinations, comptez 7-14 jours ouvrables.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Livrez-vous à l'international?</h3>
              <p className={styles.storyText}>
                Oui, nous livrons dans toute l'Europe et dans certains pays internationaux. 
                Les frais de livraison sont calculés automatiquement lors du paiement en 
                fonction de votre destination.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Comment suivre ma commande?</h3>
              <p className={styles.storyText}>
                Une fois votre commande expédiée, vous recevrez un email de confirmation 
                avec un numéro de suivi. Vous pourrez suivre votre colis en temps réel 
                via le lien fourni.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Proposez-vous des emballages cadeaux?</h3>
              <p className={styles.storyText}>
                Oui! Nous offrons des options d'emballage cadeau élégant pour toutes nos 
                bougies. Vous pouvez également ajouter un message personnalisé lors de 
                votre commande.
              </p>
            </div>
          </div>

          {/* Utilisation & Entretien */}
          <div style={{ marginBottom: '60px' }}>
            <h2 className={styles.sectionTitle}>Utilisation & Entretien</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Comment utiliser ma bougie pour la première fois?</h3>
              <p className={styles.storyText}>
                Lors de la première utilisation, laissez brûler la bougie jusqu'à ce que 
                toute la surface soit liquide (environ 2-3 heures). Cela évite l'effet tunnel 
                et garantit une combustion uniforme pour toute la durée de vie de la bougie.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Comment entretenir ma mèche?</h3>
              <p className={styles.storyText}>
                Coupez la mèche à 5mm avant chaque utilisation pour une combustion propre 
                et optimale. Utilisez un coupe-mèche ou des ciseaux. Une mèche trop longue 
                peut créer de la suie et une flamme trop haute.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Combien de temps puis-je brûler ma bougie?</h3>
              <p className={styles.storyText}>
                Nous recommandons de ne pas brûler votre bougie plus de 4 heures consécutives. 
                Éteignez-la, laissez-la refroidir pendant au moins 2 heures avant de la rallumer.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Ma bougie fume, que faire?</h3>
              <p className={styles.storyText}>
                Si votre bougie fume, éteignez-la immédiatement et coupez la mèche. 
                La fumée est généralement causée par une mèche trop longue ou un courant d'air. 
                Assurez-vous de placer votre bougie dans un endroit sans courant d'air.
              </p>
            </div>
          </div>

          {/* Retours & Garantie */}
          <div style={{ marginBottom: '60px' }}>
            <h2 className={styles.sectionTitle}>Retours & Garantie</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Quelle est votre politique de retour?</h3>
              <p className={styles.storyText}>
                Vous disposez de 14 jours pour retourner tout produit non utilisé et dans 
                son emballage d'origine. Consultez notre page Politique de Retour pour 
                plus de détails.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Que faire si ma bougie arrive endommagée?</h3>
              <p className={styles.storyText}>
                Contactez-nous immédiatement à contact@opulune.com avec des photos du produit 
                endommagé. Nous vous enverrons un remplacement gratuit ou vous rembourserons 
                intégralement.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Offrez-vous une garantie?</h3>
              <p className={styles.storyText}>
                Oui, nous garantissons la qualité de nos bougies. Si vous rencontrez un 
                problème de combustion ou de qualité, contactez-nous et nous trouverons 
                une solution rapidement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Vous n'avez pas trouvé votre réponse?</h2>
          <p className={styles.ctaDescription}>
            Notre équipe est là pour vous aider. Contactez-nous et nous répondrons 
            à toutes vos questions dans les plus brefs délais.
          </p>
          <a href="/contact" className={styles.ctaButton}>Nous Contacter</a>
        </div>
      </section>

    </div>
  );
}