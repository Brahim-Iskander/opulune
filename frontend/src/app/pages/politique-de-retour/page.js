"use client";
import styles from '../../about/AboutPage.module.css';

export default function ReturnPolicyPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Service Client</div>
          <h1 className={styles.heroTitle}>Politique de Retour</h1>
          <p className={styles.heroDescription}>
            Votre satisfaction est notre priorité. Découvrez notre politique 
            de retour simple et transparente.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className={styles.storySection}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Délai de Rétractation</h2>
            <p className={styles.storyText}>
              Conformément à la législation en vigueur, vous disposez d'un délai de 14 jours 
              calendaires à compter de la réception de votre commande pour exercer votre droit 
              de rétractation sans avoir à justifier de motif ni à payer de pénalité.
            </p>
            <p className={styles.storyText}>
              Pour exercer ce droit, vous devez nous notifier votre décision de rétractation 
              par email à <strong>retours@opulune.com</strong> ou par courrier à notre adresse.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Conditions de Retour</h2>
            <p className={styles.storyText}>
              Pour être éligible à un retour, votre article doit respecter les conditions suivantes :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                • Le produit doit être non utilisé, dans son état d'origine<br/>
                • L'emballage d'origine doit être intact et non endommagé<br/>
                • La bougie ne doit pas avoir été allumée<br/>
                • Tous les accessoires et documents doivent être inclus<br/>
                • Le produit doit être retourné dans son emballage d'origine
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              <strong>Important :</strong> Pour des raisons d'hygiène et de sécurité, nous ne pouvons 
              accepter le retour de bougies qui ont été allumées ou utilisées.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Procédure de Retour</h2>
            
            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Étape 1 : Notification</h3>
              <p className={styles.storyText}>
                Envoyez-nous un email à <strong>retours@opulune.com</strong> avec votre numéro 
                de commande et les produits que vous souhaitez retourner. Nous vous enverrons 
                les instructions de retour et une étiquette de retour si applicable.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Étape 2 : Emballage</h3>
              <p className={styles.storyText}>
                Emballez soigneusement les produits dans leur emballage d'origine. Assurez-vous 
                que les articles sont bien protégés pour éviter tout dommage pendant le transport.
              </p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h3 className={styles.valueTitle}>Étape 3 : Expédition</h3>
              <p className={styles.storyText}>
                Renvoyez le colis à l'adresse indiquée dans nos instructions. Nous recommandons 
                d'utiliser un service de livraison avec suivi et assurance pour votre protection.
              </p>
              <p className={styles.storyText}>
                <strong>Adresse de retour :</strong><br/>
                Opulune - Service Retours<br/>
                [Votre adresse complète]<br/>
                France
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Frais de Retour</h2>
            <p className={styles.storyText}>
              Les frais de retour sont à la charge du client, sauf dans les cas suivants :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                • Produit défectueux ou endommagé à la réception<br/>
                • Erreur de notre part dans la préparation de la commande<br/>
                • Produit ne correspondant pas à la description
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              Dans ces cas, nous prendrons en charge les frais de retour et vous fournirons 
              une étiquette de retour prépayée.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Remboursement</h2>
            <p className={styles.storyText}>
              Une fois votre retour reçu et inspecté, nous vous enverrons un email pour vous 
              notifier de la réception et vous informer de l'approbation ou du rejet de votre 
              remboursement.
            </p>
            <p className={styles.storyText}>
              Si votre retour est approuvé, le remboursement sera traité et un crédit sera 
              automatiquement appliqué sur votre moyen de paiement d'origine dans un délai 
              de 14 jours ouvrables.
            </p>
            <p className={styles.storyText}>
              <strong>Délais de remboursement :</strong>
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Carte bancaire : 5-10 jours ouvrables<br/>
                • PayPal : 3-5 jours ouvrables<br/>
                • Virement bancaire : 5-7 jours ouvrables
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Échanges</h2>
            <p className={styles.storyText}>
              Nous n'effectuons pas d'échanges directs. Si vous souhaitez échanger un produit, 
              veuillez retourner l'article d'origine et passer une nouvelle commande pour le 
              produit souhaité.
            </p>
            <p className={styles.storyText}>
              Cette procédure nous permet de traiter votre demande plus rapidement et vous 
              garantit de recevoir le nouveau produit dans les meilleurs délais.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Produits Endommagés ou Défectueux</h2>
            <p className={styles.storyText}>
              Si vous recevez un produit endommagé ou défectueux, veuillez nous contacter 
              immédiatement à <strong>contact@opulune.com</strong> avec :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                • Votre numéro de commande<br/>
                • Des photos claires du produit endommagé<br/>
                • Une description du problème
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              Nous traiterons votre réclamation en priorité et vous proposerons un remplacement 
              gratuit ou un remboursement complet, selon votre préférence.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Articles en Promotion</h2>
            <p className={styles.storyText}>
              Les articles achetés en promotion ou lors de soldes sont soumis aux mêmes conditions 
              de retour que les articles à prix plein. Vous bénéficiez du même délai de rétractation 
              de 14 jours.
            </p>
            <p className={styles.storyText}>
              Le remboursement sera effectué sur la base du prix effectivement payé.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Cartes Cadeaux</h2>
            <p className={styles.storyText}>
              Les cartes cadeaux ne sont ni remboursables ni échangeables contre de l'argent. 
              Elles sont valables 12 mois à compter de la date d'achat et peuvent être utilisées 
              pour tout achat sur notre boutique en ligne.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>Questions?</h2>
            <p className={styles.storyText}>
              Si vous avez des questions concernant notre politique de retour, n'hésitez pas 
              à nous contacter :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Email :</strong> retours@opulune.com<br/>
                <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX<br/>
                <strong>Horaires :</strong> Lundi - Vendredi, 9h - 18h
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Besoin d'Aide?</h2>
          <p className={styles.ctaDescription}>
            Notre équipe de service client est là pour vous accompagner dans 
            votre processus de retour.
          </p>
          <a href="/contact" className={styles.ctaButton}>Contactez-Nous</a>
        </div>
      </section>

    </div>
  );
}