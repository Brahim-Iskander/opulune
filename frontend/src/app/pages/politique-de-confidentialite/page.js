"use client";
import styles from '../../about/AboutPage.module.css';

export default function ConfidentialitePage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Protection des Données</div>
          <h1 className={styles.heroTitle}>Politique de Confidentialité</h1>
          <p className={styles.heroDescription}>
            Opulune s'engage à protéger votre vie privée et vos données personnelles. 
            Découvrez comment nous collectons, utilisons et protégeons vos informations.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className={styles.storySection}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          <p className={styles.storyText} style={{ marginBottom: '40px' }}>
            <strong>Date de dernière mise à jour :</strong> Décembre 2025
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>1. Introduction</h2>
            <p className={styles.storyText}>
              La présente Politique de Confidentialité décrit la façon dont Opulune (ci-après 
              "nous", "notre" ou "nos") collecte, utilise, partage et protège les informations 
              personnelles que vous nous fournissez lorsque vous utilisez notre site web 
              www.opulune.com et nos services.
            </p>
            <p className={styles.storyText}>
              Nous nous engageons à respecter votre vie privée et à protéger vos données 
              personnelles conformément au Règlement Général sur la Protection des Données 
              (RGPD) et à la législation française en vigueur.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>2. Responsable du Traitement</h2>
            <p className={styles.storyText}>
              Le responsable du traitement de vos données personnelles est :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Opulune</strong><br/>
                [Adresse complète]<br/>
                SIRET : [Numéro SIRET]<br/>
                Email : privacy@opulune.com<br/>
                Téléphone : +33 (0)1 XX XX XX XX
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>3. Données Collectées</h2>
            
            <h3 className={styles.valueTitle}>3.1 Données que Vous Nous Fournissez</h3>
            <p className={styles.storyText}>
              Lorsque vous passez une commande ou créez un compte sur notre site, nous 
              collectons les informations suivantes :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • <strong>Informations d'identification :</strong> nom, prénom<br/>
                • <strong>Coordonnées :</strong> adresse email, numéro de téléphone, adresse postale<br/>
                • <strong>Informations de livraison :</strong> adresse de livraison, instructions de livraison<br/>
                • <strong>Informations de facturation :</strong> adresse de facturation<br/>
                • <strong>Historique d'achat :</strong> produits commandés, montants, dates<br/>
                • <strong>Communications :</strong> messages envoyés via notre formulaire de contact
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>3.2 Données Collectées Automatiquement</h3>
            <p className={styles.storyText}>
              Lors de votre navigation sur notre site, certaines informations sont collectées 
              automatiquement :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • <strong>Données de connexion :</strong> adresse IP, type de navigateur, système d'exploitation<br/>
                • <strong>Données de navigation :</strong> pages visitées, durée de visite, liens cliqués<br/>
                • <strong>Cookies :</strong> identifiants de session, préférences (voir section Cookies)
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>3.3 Données de Paiement</h3>
            <p className={styles.storyText}>
              Les informations de paiement (numéro de carte bancaire, date d'expiration, 
              cryptogramme) sont collectées et traitées directement par notre prestataire de 
              paiement sécurisé. Nous ne stockons jamais vos données bancaires complètes sur 
              nos serveurs.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>4. Finalités du Traitement</h2>
            <p className={styles.storyText}>
              Nous utilisons vos données personnelles pour les finalités suivantes :
            </p>
            
            <h3 className={styles.valueTitle}>4.1 Gestion des Commandes</h3>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Traiter et livrer vos commandes<br/>
                • Vous tenir informé du statut de votre commande<br/>
                • Gérer les retours et remboursements<br/>
                • Émettre des factures
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.2 Service Client</h3>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Répondre à vos questions et réclamations<br/>
                • Vous fournir un support technique<br/>
                • Améliorer la qualité de nos services
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.3 Marketing (avec votre consentement)</h3>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Vous envoyer notre newsletter<br/>
                • Vous informer de nos nouveaux produits et promotions<br/>
                • Personnaliser votre expérience sur notre site<br/>
                • Réaliser des études de satisfaction
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.4 Obligations Légales</h3>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Respecter nos obligations comptables et fiscales<br/>
                • Prévenir et détecter la fraude<br/>
                • Répondre aux demandes des autorités compétentes
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>5. Base Légale du Traitement</h2>
            <p className={styles.storyText}>
              Le traitement de vos données personnelles repose sur les bases légales suivantes :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • <strong>Exécution du contrat :</strong> pour traiter vos commandes et vous fournir nos services<br/>
                • <strong>Obligation légale :</strong> pour respecter nos obligations comptables et fiscales<br/>
                • <strong>Consentement :</strong> pour l'envoi de communications marketing (vous pouvez retirer votre consentement à tout moment)<br/>
                • <strong>Intérêt légitime :</strong> pour améliorer nos services et prévenir la fraude
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>6. Partage des Données</h2>
            <p className={styles.storyText}>
              Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons 
              partager vos informations avec les catégories de destinataires suivants :
            </p>
            
            <h3 className={styles.valueTitle}>6.1 Prestataires de Services</h3>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • <strong>Transporteurs :</strong> pour la livraison de vos commandes<br/>
                • <strong>Prestataires de paiement :</strong> pour sécuriser les transactions<br/>
                • <strong>Hébergeur web :</strong> pour l'hébergement de notre site<br/>
                • <strong>Outils marketing :</strong> pour l'envoi de newsletters (si vous y avez consenti)<br/>
                • <strong>Service client :</strong> pour gérer vos demandes
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              Ces prestataires agissent en tant que sous-traitants et sont contractuellement 
              tenus de protéger vos données conformément au RGPD.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>6.2 Autorités Légales</h3>
            <p className={styles.storyText}>
              Nous pouvons divulguer vos informations si la loi l'exige ou en réponse à des 
              demandes légales valides d'autorités publiques.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>7. Transferts de Données</h2>
            <p className={styles.storyText}>
              Vos données personnelles sont hébergées et traitées au sein de l'Union Européenne. 
              Dans le cas où des données seraient transférées hors de l'UE, nous nous assurons 
              que des garanties appropriées sont en place conformément au RGPD (clauses 
              contractuelles types, certification Privacy Shield, etc.).
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>8. Durée de Conservation</h2>
            <p className={styles.storyText}>
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire 
              aux finalités pour lesquelles elles ont été collectées :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • <strong>Données de compte :</strong> jusqu'à la suppression de votre compte ou 3 ans d'inactivité<br/>
                • <strong>Données de commande :</strong> 10 ans (obligations comptables et fiscales)<br/>
                • <strong>Données de facturation :</strong> 10 ans (obligations légales)<br/>
                • <strong>Données marketing :</strong> 3 ans après votre dernier contact ou jusqu'au retrait de votre consentement<br/>
                • <strong>Cookies :</strong> 13 mois maximum
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              À l'expiration de ces délais, vos données sont supprimées ou anonymisées de 
              manière irréversible.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>9. Vos Droits</h2>
            <p className={styles.storyText}>
              Conformément au RGPD, vous disposez des droits suivants concernant vos données 
              personnelles :
            </p>
            
            <h3 className={styles.valueTitle}>9.1 Droit d'Accès</h3>
            <p className={styles.storyText}>
              Vous pouvez obtenir une copie de vos données personnelles que nous détenons.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.2 Droit de Rectification</h3>
            <p className={styles.storyText}>
              Vous pouvez demander la correction de données inexactes ou incomplètes.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.3 Droit à l'Effacement</h3>
            <p className={styles.storyText}>
              Vous pouvez demander la suppression de vos données dans certains cas (droit à l'oubli).
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.4 Droit à la Limitation du Traitement</h3>
            <p className={styles.storyText}>
              Vous pouvez demander la limitation du traitement de vos données dans certaines 
              circonstances.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.5 Droit à la Portabilité</h3>
            <p className={styles.storyText}>
              Vous pouvez recevoir vos données dans un format structuré et couramment utilisé 
              et les transmettre à un autre responsable de traitement.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.6 Droit d'Opposition</h3>
            <p className={styles.storyText}>
              Vous pouvez vous opposer au traitement de vos données à des fins de marketing 
              direct à tout moment.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.7 Droit de Retirer Votre Consentement</h3>
            <p className={styles.storyText}>
              Lorsque le traitement est basé sur votre consentement, vous pouvez le retirer 
              à tout moment.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.8 Exercer Vos Droits</h3>
            <p className={styles.storyText}>
              Pour exercer vos droits, contactez-nous à :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                <strong>Email :</strong> privacy@opulune.com<br/>
                <strong>Courrier :</strong> Opulune - DPO, [Votre adresse]
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              Nous nous engageons à répondre à votre demande dans un délai d'un mois. 
              Une pièce d'identité peut être demandée pour vérifier votre identité.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '20px' }}>9.9 Droit de Réclamation</h3>
            <p className={styles.storyText}>
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit 
              d'introduire une réclamation auprès de la CNIL :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                Commission Nationale de l'Informatique et des Libertés (CNIL)<br/>
                3 Place de Fontenoy - TSA 80715<br/>
                75334 PARIS CEDEX 07<br/>
                Téléphone : 01 53 73 22 22<br/>
                Site web : www.cnil.fr
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>10. Cookies</h2>
            
            <h3 className={styles.valueTitle}>10.1 Qu'est-ce qu'un Cookie?</h3>
            <p className={styles.storyText}>
              Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous 
              visitez notre site. Les cookies nous aident à améliorer votre expérience de 
              navigation et à analyser l'utilisation de notre site.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>10.2 Types de Cookies Utilisés</h3>
            <p className={styles.storyText}>
              <strong>• Cookies Essentiels (obligatoires) :</strong>
            </p>
            <div style={{ marginLeft: '20px' }}>
              <p className={styles.storyText}>
                Nécessaires au fonctionnement du site (panier, connexion, sécurité). 
                Ils ne peuvent pas être désactivés.
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '15px' }}>
              <strong>• Cookies de Performance (avec votre consentement) :</strong>
            </p>
            <div style={{ marginLeft: '20px' }}>
              <p className={styles.storyText}>
                Collectent des informations anonymes sur l'utilisation du site pour nous aider 
                à l'améliorer (Google Analytics, etc.).
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '15px' }}>
              <strong>• Cookies Marketing (avec votre consentement) :</strong>
            </p>
            <div style={{ marginLeft: '20px' }}>
              <p className={styles.storyText}>
                Utilisés pour afficher des publicités pertinentes et mesurer l'efficacité 
                de nos campagnes.
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>10.3 Gestion des Cookies</h3>
            <p className={styles.storyText}>
              Vous pouvez accepter ou refuser les cookies via notre bandeau de consentement 
              lors de votre première visite. Vous pouvez également modifier vos préférences 
              à tout moment en cliquant sur "Paramètres des cookies" en bas de page.
            </p>
            <p className={styles.storyText}>
              Vous pouvez également paramétrer votre navigateur pour refuser tous les cookies 
              ou être averti de leur dépôt. Notez que le refus de certains cookies peut 
              affecter le fonctionnement du site.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>11. Sécurité des Données</h2>
            <p className={styles.storyText}>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
              appropriées pour protéger vos données personnelles contre la perte, l'utilisation 
              abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Chiffrement SSL/TLS pour toutes les communications<br/>
                • Serveurs sécurisés avec pare-feu<br/>
                • Accès aux données limité au personnel autorisé<br/>
                • Authentification forte et contrôles d'accès<br/>
                • Sauvegardes régulières et cryptées<br/>
                • Audits de sécurité périodiques
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              Malgré ces mesures, aucune transmission de données sur Internet n'est totalement 
              sécurisée. Nous vous encourageons à utiliser des mots de passe forts et à les 
              garder confidentiels.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>12. Liens vers des Sites Tiers</h2>
            <p className={styles.storyText}>
              Notre site peut contenir des liens vers des sites web tiers. Nous ne sommes pas 
              responsables des pratiques de confidentialité de ces sites. Nous vous encourageons 
              à lire les politiques de confidentialité de chaque site que vous visitez.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>13. Mineurs</h2>
            <p className={styles.storyText}>
              Nos services ne sont pas destinés aux personnes de moins de 16 ans. Nous ne 
              collectons pas sciemment de données personnelles auprès de mineurs. Si vous êtes 
              parent ou tuteur et que vous découvrez que votre enfant nous a fourni des 
              informations personnelles, contactez-nous immédiatement.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>14. Modifications de la Politique</h2>
            <p className={styles.storyText}>
              Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. 
              La version la plus récente sera toujours disponible sur cette page avec la date 
              de dernière mise à jour. Nous vous encourageons à consulter régulièrement cette 
              page pour rester informé de nos pratiques.
            </p>
            <p className={styles.storyText}>
              En cas de changement substantiel, nous vous en informerons par email ou via une 
              notification sur notre site.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>15. Contact</h2>
            <p className={styles.storyText}>
              Pour toute question concernant cette Politique de Confidentialité ou le traitement 
              de vos données personnelles, contactez-nous :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Délégué à la Protection des Données (DPO) :</strong><br/>
                Email : privacy@opulune.com<br/>
                Courrier : Opulune - DPO, [Votre adresse complète]<br/>
                Téléphone : +33 (0)1 XX XX XX XX
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Des Questions sur Vos Données?</h2>
          <p className={styles.ctaDescription}>
            Notre équipe est à votre disposition pour répondre à toutes vos questions 
            concernant la protection de vos données personnelles.
          </p>
          <a href="/contact" className={styles.ctaButton}>Nous Contacter</a>
        </div>
      </section>

    </div>
  );
}