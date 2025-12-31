"use client";
import styles from '../../about/AboutPage.module.css';

export default function CGVPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Informations Légales</div>
          <h1 className={styles.heroTitle}>Conditions Générales de Vente</h1>
          <p className={styles.heroDescription}>
            Les présentes conditions générales régissent les ventes de bougies 
            artisanales sur le site Opulune.
          </p>
        </div>
      </section>

      {/* CGV Content */}
      <section className={styles.storySection}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          <p className={styles.storyText} style={{ marginBottom: '40px' }}>
            <strong>Date de dernière mise à jour :</strong> Décembre 2025
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>1. Dispositions Générales</h2>
            <p className={styles.storyText}>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations 
              contractuelles entre Opulune, ci-après dénommée "le Vendeur", et toute personne 
              physique ou morale, ci-après dénommée "le Client" ou "l'Acheteur", souhaitant 
              effectuer un achat sur le site www.opulune.com.
            </p>
            <p className={styles.storyText}>
              Le fait de passer commande implique l'adhésion entière et sans réserve de 
              l'Acheteur aux présentes CGV. L'Acheteur reconnaît avoir pris connaissance des 
              présentes CGV et les avoir acceptées avant de passer commande.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>2. Identification du Vendeur</h2>
            <p className={styles.storyText}>
              <strong>Raison sociale :</strong> Opulune<br/>
              <strong>Forme juridique :</strong> [À compléter - SARL, SAS, etc.]<br/>
              <strong>Capital social :</strong> [À compléter]<br/>
              <strong>Siège social :</strong> [Votre adresse complète]<br/>
              <strong>SIRET :</strong> [Votre numéro SIRET]<br/>
              <strong>TVA intracommunautaire :</strong> [Votre numéro de TVA]<br/>
              <strong>Email :</strong> contact@opulune.com<br/>
              <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX
            </p>
            <p className={styles.storyText}>
              <strong>Directeur de la publication :</strong> [Nom du responsable]<br/>
              <strong>Hébergeur :</strong> [Nom de l'hébergeur, adresse et téléphone]
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>3. Produits et Services</h2>
            <p className={styles.storyText}>
              Les produits proposés à la vente sont des bougies artisanales fabriquées avec 
              des cires naturelles de soja et de coco, des mèches en coton biologique et des 
              parfums de haute qualité.
            </p>
            <p className={styles.storyText}>
              Les photographies, descriptions et caractéristiques des produits présentés sur 
              le site ne sont pas contractuelles. Bien que nous fassions tout notre possible 
              pour que les représentations visuelles soient fidèles, de légères variations 
              peuvent survenir en raison de la nature artisanale de nos produits.
            </p>
            <p className={styles.storyText}>
              Tous nos produits sont conformes à la législation française et européenne en 
              vigueur concernant la sécurité des bougies.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>4. Commandes</h2>
            
            <h3 className={styles.valueTitle}>4.1 Processus de Commande</h3>
            <p className={styles.storyText}>
              Pour passer commande, le Client doit :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                1. Sélectionner les produits et les ajouter au panier<br/>
                2. Vérifier le contenu du panier<br/>
                3. Renseigner ses informations de livraison et de facturation<br/>
                4. Choisir le mode de livraison<br/>
                5. Sélectionner le mode de paiement<br/>
                6. Accepter les présentes CGV<br/>
                7. Valider et payer la commande
            </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.2 Confirmation de Commande</h3>
            <p className={styles.storyText}>
              Une fois la commande validée et le paiement effectué, le Client reçoit un email 
              de confirmation contenant le récapitulatif de sa commande et un numéro de commande 
              unique.
            </p>
            <p className={styles.storyText}>
              La vente est considérée comme définitive après l'envoi de cet email de confirmation 
              et l'encaissement du paiement.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.3 Modification ou Annulation</h3>
            <p className={styles.storyText}>
              Toute commande peut être annulée ou modifiée gratuitement dans les 2 heures suivant 
              sa validation, en contactant notre service client. Passé ce délai, la commande entre 
              en phase de préparation et ne peut plus être modifiée ou annulée.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>5. Prix et Paiement</h2>
            
            <h3 className={styles.valueTitle}>5.1 Prix</h3>
            <p className={styles.storyText}>
              Les prix de nos produits sont indiqués en euros (€), toutes taxes comprises (TTC), 
              hors frais de livraison. Les frais de livraison sont calculés et indiqués avant la 
              validation finale de la commande.
            </p>
            <p className={styles.storyText}>
              Opulune se réserve le droit de modifier ses prix à tout moment. Les produits seront 
              facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>5.2 Moyens de Paiement</h3>
            <p className={styles.storyText}>
              Les paiements peuvent être effectués par :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Carte bancaire (Visa, Mastercard, American Express)<br/>
                • PayPal<br/>
                • [Autres moyens de paiement acceptés]
              </p>
            </div>
            <p className={styles.storyText}>
              Le paiement est exigé en totalité au moment de la commande. Les informations 
              bancaires sont sécurisées par le protocole SSL et ne sont pas conservées par Opulune.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>5.3 Sécurité des Paiements</h3>
            <p className={styles.storyText}>
              Tous les paiements sont sécurisés via notre prestataire de paiement certifié PCI-DSS. 
              Nous ne stockons aucune donnée bancaire sur nos serveurs.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>6. Livraison</h2>
            
            <h3 className={styles.valueTitle}>6.1 Zones de Livraison</h3>
            <p className={styles.storyText}>
              Nous livrons en France métropolitaine, en Corse, dans les DOM-TOM et dans la plupart 
              des pays de l'Union Européenne. Pour les autres destinations, veuillez nous contacter.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>6.2 Délais de Livraison</h3>
            <p className={styles.storyText}>
              Les délais de livraison sont les suivants :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • France métropolitaine : 3-5 jours ouvrables<br/>
                • Corse et DOM-TOM : 7-10 jours ouvrables<br/>
                • Union Européenne : 5-10 jours ouvrables<br/>
                • Autres pays : 10-20 jours ouvrables
              </p>
            </div>
            <p className={styles.storyText}>
              Les commandes sont expédiées sous 2-3 jours ouvrables après validation du paiement. 
              Ces délais sont donnés à titre indicatif et ne constituent pas une obligation de 
              résultat.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>6.3 Frais de Livraison</h3>
            <p className={styles.storyText}>
              Les frais de livraison varient selon la destination et le poids du colis. Ils sont 
              calculés automatiquement et affichés avant la validation de la commande.
            </p>
            <p className={styles.storyText}>
              <strong>Livraison gratuite :</strong> Pour toute commande supérieure à 50€ en 
              France métropolitaine.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>6.4 Suivi de Commande</h3>
            <p className={styles.storyText}>
              Dès l'expédition, un email contenant le numéro de suivi est envoyé au Client. 
              Ce numéro permet de suivre l'acheminement du colis en temps réel.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>6.5 Réception et Vérification</h3>
            <p className={styles.storyText}>
              Lors de la réception du colis, le Client doit vérifier l'état de l'emballage et 
              signaler immédiatement toute anomalie au transporteur et à Opulune. Toute réserve 
              doit être notifiée dans les 48 heures suivant la réception.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>7. Droit de Rétractation</h2>
            <p className={styles.storyText}>
              Conformément aux articles L. 221-18 et suivants du Code de la consommation, le 
              Client dispose d'un délai de 14 jours calendaires à compter de la réception de 
              sa commande pour exercer son droit de rétractation sans avoir à justifier de motif 
              ni à payer de pénalité.
            </p>
            <p className={styles.storyText}>
              Pour plus d'informations sur les conditions et la procédure de retour, consultez 
              notre page <a href="/politique-retour" style={{ textDecoration: 'underline' }}>Politique de Retour</a>.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>8. Garanties</h2>
            
            <h3 className={styles.valueTitle}>8.1 Garantie de Conformité</h3>
            <p className={styles.storyText}>
              Tous nos produits bénéficient de la garantie légale de conformité prévue aux 
              articles L. 217-4 et suivants du Code de la consommation et de la garantie des 
              vices cachés prévue aux articles 1641 et suivants du Code civil.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>8.2 Garantie Qualité</h3>
            <p className={styles.storyText}>
              Opulune garantit la qualité de ses produits. En cas de défaut de fabrication, 
              le produit sera remplacé ou remboursé selon le choix du Client.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>9. Responsabilité</h2>
            <p className={styles.storyText}>
              Opulune met tout en œuvre pour assurer la sécurité et la qualité de ses produits. 
              Toutefois, la responsabilité d'Opulune ne saurait être engagée en cas de mauvaise 
              utilisation des produits ou de non-respect des instructions d'utilisation fournies.
            </p>
            <p className={styles.storyText}>
              Les bougies doivent être utilisées conformément aux consignes de sécurité indiquées 
              sur l'emballage et sur notre site. Ne jamais laisser une bougie allumée sans 
              surveillance.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>10. Propriété Intellectuelle</h2>
            <p className={styles.storyText}>
              Tous les éléments du site www.opulune.com (textes, images, graphismes, logo, 
              icônes, etc.) sont la propriété exclusive d'Opulune et sont protégés par le droit 
              d'auteur, le droit des marques et/ou tout autre droit de propriété intellectuelle.
            </p>
            <p className={styles.storyText}>
              Toute reproduction, représentation, modification, publication ou adaptation de 
              tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, 
              est interdite sans l'autorisation écrite préalable d'Opulune.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>11. Protection des Données Personnelles</h2>
            <p className={styles.storyText}>
              Les données personnelles collectées lors de la commande sont nécessaires au 
              traitement et à la livraison de celle-ci. Conformément au Règlement Général sur 
              la Protection des Données (RGPD), le Client dispose d'un droit d'accès, de 
              rectification, de suppression et d'opposition aux données le concernant.
            </p>
            <p className={styles.storyText}>
              Pour plus d'informations, consultez notre <a href="/confidentialite" style={{ textDecoration: 'underline' }}>Politique de Confidentialité</a>.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>12. Médiation et Règlement des Litiges</h2>
            <p className={styles.storyText}>
              Conformément aux articles L. 611-1 et R. 612-1 et suivants du Code de la 
              consommation, nous proposons un dispositif de médiation de la consommation.
            </p>
            <p className={styles.storyText}>
              En cas de litige, le Client peut saisir gratuitement le médiateur :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                <strong>[Nom du médiateur]</strong><br/>
                [Adresse]<br/>
                [Site web]
              </p>
            </div>
            <p className={styles.storyText}>
              Le Client peut également recourir à la plateforme de Règlement en Ligne des Litiges 
              (RLL) : https://ec.europa.eu/consumers/odr/
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>13. Droit Applicable</h2>
            <p className={styles.storyText}>
              Les présentes CGV sont soumises au droit français. En cas de litige et à défaut 
              d'accord amiable, le litige sera porté devant les tribunaux compétents conformément 
              aux règles de droit commun.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>14. Modification des CGV</h2>
            <p className={styles.storyText}>
              Opulune se réserve le droit de modifier les présentes CGV à tout moment. Les CGV 
              applicables sont celles en vigueur à la date de la commande. Le Client est invité 
              à consulter régulièrement les CGV.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>15. Contact</h2>
            <p className={styles.storyText}>
              Pour toute question concernant les présentes CGV ou pour toute réclamation, 
              vous pouvez nous contacter :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                <strong>Email :</strong> contact@opulune.com<br/>
                <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX<br/>
                <strong>Courrier :</strong> Opulune, [Votre adresse]<br/>
                <strong>Horaires :</strong> Lundi - Vendredi, 9h - 18h
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}