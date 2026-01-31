"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Card from "../components/produits/card.jsx";
import Feature from "../components/navbar/features.jsx";
import Slider from "../components/produits/productslider.jsx";
import {  useEffect, useState } from "react";
/*
export const metadata = {
  title: 'Nos Produits - Nom de votre boutique',
  description: 'Explorez notre catalogue complet de produits. Trouvez ce dont vous avez besoin avec des prix compétitifs et une qualité garantie.',
  keywords: ['produits', 'catalogue', 'acheter', 'e-commerce'],
  openGraph: {
    title: 'Nos Produits - Nom de votre boutique',
    description: 'Explorez notre catalogue complet de produits.',
    type: 'website',
    url: 'https://opulune.netlify.app/produits',
    images: ['/images/og-products.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Produits',
    description: 'Explorez notre catalogue complet de produits.',
    images: ['/images/og-products.jpg'],
  },
  alternates: {
    canonical: 'https://opulune.netlify.app/produits',
  },
}*/
export default function BasicGrid() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://opulune-4.onrender.com/api/products/getallproducts");
        const data = await res.json();
        setProducts(data);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  
  
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#faf7f2",
        padding: "50px",
        width: "100%",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{display:"flex", flexDirection:"column"}} >
        <Grid item xs={12} sx={{ marginBottom: "50px" }}>
          <Slider products={Products.slice(0, 3)} />

        </Grid>

        <Grid
          size={12}
          sx={{
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "column", md: "row" },
            marginLeft: { xs: "0", md: "auto" },
            marginRight: "auto",
            width: "50%",
          }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{
              fontWeight: "bold",
              textAlign: "left",
              fontFamily: "var(--font-playfair)",
              width: { xs: "80vw", md: "100%" },
            }}
          >
            Les nouveautés sont arrivées
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontWeight: "400",
              textAlign: "left",
              fontFamily: "var(--font-montserrat)",
              width: { xs: "80vw", md: "100%" },
            }}
          >
            Découvrez nos dernières créations parfumées, faites main avec
            passion et délicatesse, pour une ambiance douce et élégante à la
            maison.
          </Typography>
        </Grid>

        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {Products.map((product) => (
            <Card key={product.id} product={product} />
          ))}

        </Grid>
        <Feature />
      </Grid>
    </Box>
  );
}
