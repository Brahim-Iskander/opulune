"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import { motion } from 'framer-motion';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProduitCard() {
  const [quantity, setQuantity] = React.useState(1);

  // Define your product object
  const product = {
    name: "Bougie Peearfumése",
    price: 45,
    quantity: quantity,
    url: "https://images.pexels.com/photos/1721096/pexels-photo-1721096.jpeg"
  };

  // Function to add product to localStorage
  const addToLocal = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.findIndex(item => item.name === product.name);
    if (index !== -1) {
      // Increase quantity if exists
      cart[index].quantity += product.quantity;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity(1);

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Card
        sx={{
          maxWidth: 450,
          margin: '20px',
          borderRadius: '10px',
          backgroundColor: '#e9d8ce',
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <CardMedia
          component="img"
          sx={{ display: 'block', width: '95%', margin: 'auto', marginTop: '10px' }}
          height="350"
          image={product.url}
          alt={product.name}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ fontFamily: 'var(--font-montserrat)', fontSize: '16px', textAlign: 'center' }}
          >
            {product.name}
          </Typography>

          <Typography
            variant="body2"
            color="text.primary"
            sx={{ marginTop: '10px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}
          >
            Prix: {product.price} TND
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton
              aria-label="add to favorites"
              sx={{ borderRadius: '5px', backgroundColor: '#f4ede5' }}
              onClick={() => addToLocal(product)}
            >
              <FavoriteIcon sx={{ color: '#8d5e5eff' }} />
               <Typography variant="body2" sx={{ fontFamily: 'var(--font-montserrat)' }}>
              Panier
            </Typography>
            </IconButton>
           

            {/* Number input for quantity */}
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              max={100}
              style={{
                width: '80px',
                padding: '5px 10px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                textAlign: 'center',
              }}
            />
          </div>
        </CardActions>
      </Card>
    </motion.div>
  );
}
