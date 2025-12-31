"use client";
import Link from 'next/link';
import styles from '../../about/AboutPage.module.css';

export default function MentionsLegalesPage() {
  return (
    <div className={styles.container}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroSubtitle}>Informations Légales</div>
          <h1 className={styles.heroTitle}>Mentions Légales</h1>
          <p className={styles.heroDescription}>
            Informations légales relatives à l'utilisation du site Opulune et 
            à l'identification de l'éditeur.
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section className={styles.storySection}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          
          <p className={styles.storyText} style={{ marginBottom: '40px' }}>
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la 
            confiance en l'économie numérique, il est précisé aux utilisateurs du site 
            www.opulune.com l'identité des différents intervenants dans le cadre de sa 
            réalisation et de son suivi.
          </p>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>1. Éditeur du Site</h2>
            <p className={styles.storyText}>
              Le site www.opulune.com est édité par :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Raison sociale :</strong> Opulune<br/>
                <strong>Forme juridique :</strong> [SARL / SAS / Auto-entrepreneur - À compléter]<br/>
                <strong>Capital social :</strong> [Montant - À compléter]<br/>
                <strong>Siège social :</strong> [Votre adresse complète - À compléter]<br/>
                <strong>RCS :</strong> [Ville] [Numéro RCS - À compléter]<br/>
                <strong>SIRET :</strong> [Votre numéro SIRET - À compléter]<br/>
                <strong>TVA intracommunautaire :</strong> [Votre numéro de TVA - À compléter]<br/>
                <strong>Email :</strong> contact@opulune.com<br/>
                <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              <strong>Directeur de la publication :</strong> [Nom et prénom du directeur - À compléter]<br/>
              <strong>Responsable de la rédaction :</strong> [Nom et prénom - À compléter]
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>2. Hébergement</h2>
            <p className={styles.storyText}>
              Le site www.opulune.com est hébergé par :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Nom de l'hébergeur :</strong> [Nom - À compléter]<br/>
                <strong>Raison sociale :</strong> [Raison sociale complète - À compléter]<br/>
                <strong>Adresse :</strong> [Adresse complète de l'hébergeur - À compléter]<br/>
                <strong>Téléphone :</strong> [Numéro de téléphone - À compléter]<br/>
                <strong>Site web :</strong> [URL de l'hébergeur - À compléter]
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>3. Propriété Intellectuelle</h2>
            
            <h3 className={styles.valueTitle}>3.1 Contenu du Site</h3>
            <p className={styles.storyText}>
              L'ensemble du contenu présent sur le site www.opulune.com, incluant, de façon 
              non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, 
              gifs et icônes ainsi que leur mise en forme sont la propriété exclusive d'Opulune 
              à l'exception des marques, logos ou contenus appartenant à d'autres sociétés 
              partenaires ou auteurs.
            </p>
            <p className={styles.storyText}>
              Toute reproduction, distribution, modification, adaptation, retransmission ou 
              publication, même partielle, de ces différents éléments est strictement interdite 
              sans l'accord exprès par écrit d'Opulune. Cette représentation ou reproduction, 
              par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les 
              articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>3.2 Marques</h3>
            <p className={styles.storyText}>
              Les marques et logos figurant sur le site sont des marques déposées. Toute 
              reproduction totale ou partielle de ces marques ou de ces logos effectuée à 
              partir des éléments du site sans l'autorisation expresse d'Opulune est donc 
              prohibée au sens de l'article L.713-2 du Code de la propriété intellectuelle.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>3.3 Base de Données</h3>
            <p className={styles.storyText}>
              Opulune est propriétaire des droits de producteur de la base de données du site 
              www.opulune.com. Toute extraction et/ou réutilisation de la base de données au 
              sens des articles L.342-1 et L.342-2 du Code de la propriété intellectuelle est 
              interdite.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>4. Conditions d'Utilisation</h2>
            
            <h3 className={styles.valueTitle}>4.1 Accès au Site</h3>
            <p className={styles.storyText}>
              L'accès au site www.opulune.com est gratuit. Les frais d'accès et d'utilisation 
              du réseau de télécommunication sont à la charge de l'utilisateur selon les 
              modalités fixées par ses fournisseurs d'accès et opérateurs de télécommunication.
            </p>
            <p className={styles.storyText}>
              Opulune met en œuvre tous les moyens raisonnables à sa disposition pour assurer 
              un accès de qualité à ses services. Cependant, Opulune ne peut garantir la 
              disponibilité continue du site et ne saurait être tenue pour responsable de 
              dommages résultant de l'indisponibilité du site.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.2 Utilisation du Site</h3>
            <p className={styles.storyText}>
              L'utilisateur du site www.opulune.com s'engage à :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Ne pas utiliser le site de manière frauduleuse ou à des fins illégales<br/>
                • Ne pas porter atteinte à l'ordre public et aux bonnes mœurs<br/>
                • Ne pas perturber le fonctionnement du site<br/>
                • Ne pas introduire de virus ou tout autre programme malveillant<br/>
                • Ne pas tenter d'accéder de manière non autorisée au site ou aux systèmes informatiques<br/>
                • Respecter les droits de propriété intellectuelle d'Opulune et des tiers
              </p>
            </div>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>4.3 Sanctions</h3>
            <p className={styles.storyText}>
              En cas de manquement à l'une des dispositions des présentes mentions légales, 
              Opulune se réserve le droit de prendre toute mesure appropriée et notamment de :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '10px' }}>
              <p className={styles.storyText}>
                • Suspendre, interrompre ou limiter l'accès au site<br/>
                • Supprimer toute contribution qui porterait atteinte aux droits d'un tiers<br/>
                • Engager toute action judiciaire
              </p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>5. Protection des Données Personnelles</h2>
            <p className={styles.storyText}>
              Les informations recueillies sur le site www.opulune.com font l'objet d'un 
              traitement informatique destiné à la gestion des commandes, à la relation client 
              et aux opérations de prospection commerciale.
            </p>
            <p className={styles.storyText}>
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et 
              au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un 
              droit d'accès, de rectification, de suppression et d'opposition aux données 
              personnelles vous concernant.
            </p>
            <p className={styles.storyText}>
              Pour en savoir plus sur la gestion de vos données personnelles et pour exercer 
              vos droits, consultez notre{' '}
              <Link href="/confidentialite" style={{ textDecoration: 'underline' }}>
                Politique de Confidentialité
              </Link>.
            </p>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              <strong>Délégué à la Protection des Données (DPO) :</strong><br/>
              Email : privacy@opulune.com<br/>
              Courrier : Opulune - DPO, [Votre adresse complète]
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>6. Cookies</h2>
            <p className={styles.storyText}>
              Le site www.opulune.com utilise des cookies pour améliorer l'expérience 
              utilisateur, réaliser des statistiques de visite et proposer des fonctionnalités 
              relatives aux réseaux sociaux.
            </p>
            <p className={styles.storyText}>
              Un cookie est un fichier texte déposé sur votre ordinateur lors de la visite 
              d'un site ou de la consultation d'une publicité. Il a pour but de collecter des 
              informations relatives à votre navigation et de vous adresser des services 
              adaptés à votre terminal.
            </p>
            <p className={styles.storyText}>
              Vous pouvez vous opposer à l'enregistrement de cookies en configurant votre 
              navigateur. Pour plus d'informations sur les cookies et leur gestion, consultez 
              notre{' '}
              <Link href="/confidentialite" style={{ textDecoration: 'underline' }}>
                Politique de Confidentialité
              </Link>.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>7. Responsabilité</h2>
            
            <h3 className={styles.valueTitle}>7.1 Contenu du Site</h3>
            <p className={styles.storyText}>
              Opulune s'efforce d'assurer l'exactitude et la mise à jour des informations 
              diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment 
              et sans préavis, le contenu.
            </p>
            <p className={styles.storyText}>
              Toutefois, Opulune ne peut garantir l'exactitude, la précision ou l'exhaustivité 
              des informations mises à disposition sur ce site. En conséquence, Opulune décline 
              toute responsabilité pour toute imprécision, inexactitude ou omission portant sur 
              des informations disponibles sur le site.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>7.2 Liens Hypertextes</h3>
            <p className={styles.storyText}>
              Le site www.opulune.com peut contenir des liens hypertextes vers d'autres sites 
              présents sur le réseau Internet. Les liens vers ces autres ressources vous font 
              quitter le site www.opulune.com.
            </p>
            <p className={styles.storyText}>
              Il est possible de créer un lien vers la page de présentation de ce site sans 
              autorisation expresse d'Opulune. Aucune autorisation ou demande d'information 
              préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite 
              établir un lien vers le site de l'éditeur.
            </p>
            <p className={styles.storyText}>
              Opulune n'a pas la possibilité de vérifier le contenu des sites ainsi visités 
              et décline donc toute responsabilité de ce fait quant aux risques éventuels de 
              contenus illicites.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>7.3 Disponibilité du Site</h3>
            <p className={styles.storyText}>
              Opulune s'engage à faire ses meilleurs efforts pour sécuriser l'accès, la 
              consultation et l'utilisation du site conformément aux règles d'usages de 
              l'Internet.
            </p>
            <p className={styles.storyText}>
              Le site peut être interrompu ou suspendu notamment à l'occasion d'une opération 
              de maintenance, de mise à jour ou d'amélioration, ou encore en raison d'une 
              interruption ou dysfonctionnement des réseaux ou serveurs.
            </p>
            <p className={styles.storyText}>
              Opulune ne saurait être tenue responsable des difficultés d'accès, des vitesses 
              d'ouverture et de consultation des pages du site, de l'inaccessibilité temporaire 
              ou définitive du site et de l'utilisation frauduleuse par des tiers du contenu 
              et/ou des informations présentes sur le site.
            </p>

            <h3 className={styles.valueTitle} style={{ marginTop: '30px' }}>7.4 Limitation de Responsabilité</h3>
            <p className={styles.storyText}>
              Opulune ne pourra être tenue responsable des dommages directs et indirects causés 
              au matériel de l'utilisateur, lors de l'accès au site www.opulune.com, et 
              résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications 
              indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>8. Droit Applicable et Juridiction</h2>
            <p className={styles.storyText}>
              Les présentes mentions légales sont régies par le droit français. En cas de litige 
              et à défaut d'accord amiable, le litige sera porté devant les tribunaux français 
              conformément aux règles de compétence en vigueur.
            </p>
            <p className={styles.storyText}>
              Pour toute question relative à l'application des présentes mentions légales, vous 
              pouvez contacter l'éditeur aux coordonnées indiquées ci-dessus.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>9. Médiation</h2>
            <p className={styles.storyText}>
              Conformément aux dispositions du Code de la consommation concernant le règlement 
              amiable des litiges, Opulune adhère au Service du Médiateur du e-commerce de la 
              FEVAD (Fédération du e-commerce et de la vente à distance) dont les coordonnées 
              sont les suivantes :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Médiateur de la consommation FEVAD</strong><br/>
                BP 20015<br/>
                75362 PARIS CEDEX 8<br/>
                <a href="https://www.mediateurfevad.fr" target="_blank" rel="noopener noreferrer" 
                   style={{ textDecoration: 'underline' }}>
                  www.mediateurfevad.fr
                </a>
              </p>
            </div>
            <p className={styles.storyText} style={{ marginTop: '20px' }}>
              Après démarche préalable écrite des consommateurs vis-à-vis d'Opulune, le Service 
              du Médiateur peut être saisi pour tout litige de consommation dont le règlement 
              n'aurait pas abouti. Pour connaître les modalités de saisine du Médiateur, 
              cliquez{' '}
              <a href="https://www.mediateurfevad.fr/index.php/espace-consommateur-2/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 style={{ textDecoration: 'underline' }}>
                ici
              </a>.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>10. Crédits</h2>
            <p className={styles.storyText}>
              <strong>Conception et réalisation :</strong> [Nom de l'agence ou du développeur - À compléter]<br/>
              <strong>Photographies :</strong> [Source des photos - À compléter]<br/>
              <strong>Illustrations :</strong> [Source des illustrations - À compléter]
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>11. Modifications</h2>
            <p className={styles.storyText}>
              Opulune se réserve le droit de modifier les présentes mentions légales à tout 
              moment. L'utilisateur s'engage donc à les consulter régulièrement. Ces mentions 
              légales ont été mises à jour le <strong>Décembre 2025</strong>.
            </p>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 className={styles.sectionTitle}>12. Contact</h2>
            <p className={styles.storyText}>
              Pour toute question ou demande d'information concernant le site, ou tout 
              signalement de contenu ou d'activités illicites, l'utilisateur peut contacter 
              l'éditeur à l'adresse suivante :
            </p>
            <div style={{ marginLeft: '20px', marginTop: '20px' }}>
              <p className={styles.storyText}>
                <strong>Opulune</strong><br/>
                [Adresse complète]<br/>
                <strong>Email :</strong> contact@opulune.com<br/>
                <strong>Téléphone :</strong> +33 (0)1 XX XX XX XX
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Besoin de Plus d'Informations?</h2>
          <p className={styles.ctaDescription}>
            Consultez nos autres pages légales ou contactez-nous pour toute question.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/pages/cgv-opulune" className={styles.ctaButton}>CGV</Link>
            <Link href="/pages/politique-de-confidentialite" className={styles.ctaButton}>Confidentialité</Link>
            <Link href="/contact" className={styles.ctaButton}>Contact</Link>
          </div>
        </div>
      </section>

    </div>
  );
}