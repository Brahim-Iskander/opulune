
import Home from "./accueil/page.js"

export const metadata = {
  title: 'Accueil - Nom de votre boutique',
  description: 'Découvrez notre boutique en ligne avec une large sélection de produits de qualité. Livraison rapide et service client exceptionnel.',
  keywords: ['boutique en ligne', 'achats', 'produits', 'e-commerce'],
  openGraph: {
    title: 'Accueil - Nom de votre boutique',
    description: 'Découvrez notre boutique en ligne avec une large sélection de produits de qualité.',
    type: 'website',
    url: 'https://opulune.netlify.app',
    images: ['/images/og-home.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accueil - Nom de votre boutique',
    description: 'Découvrez notre boutique en ligne avec une large sélection de produits de qualité.',
    images: ['/images/og-home.jpg'],
  },
  alternates: {
    canonical: 'https://opulune.netlify.app/',
  },
};


export default function Hsome() {
  return (
    <div >
      <Home />
      
    </div>
  );
}
