import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    const cards=[
        {title:"🏡 Retrait à l’atelier",description:"Retirez gratuitement votre commande à l’atelier, sur rendez-vous."},
        {title:"🚚 Livraison offerte",description:"Dès 100 TND d’achat en France métropolitaine, la livraison est gratuite."},
        {title:"📦 Expédition rapide",description:"Commandes expédiées sous 48h ouvrées si les articles sont en stock."},
    ]
  return (

    <Box sx={{ backgroundColor: '#fdf6ee', width: '100%',marginTop:'50px',marginBottom:'50px',display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center' }}>
    
        <Card sx={{ maxWidth: 345,margin: '50px 20px',height:'200px',backgroundColor:'#f4ede5' }}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold',textAlign:'center' }}>
            { cards[0].title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'center',fontSize:'16px',marginTop:'10px',fontFamily:'var(--font-montserrat)'}}>  
            { cards[1].description}
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345,margin: '50px 20px',height:'200px',backgroundColor:'#f4ede5' }}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold',textAlign:'center' }}>
            { cards[1].title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'center',fontSize:'16px',marginTop:'10px',fontFamily:'var(--font-montserrat)'}}>  
           Dès <strong>100 TND</strong>  d’achat en Tunisie métropolitaine, la livraison est gratuite.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 345,margin: '50px 20px',height:'200px',backgroundColor:'#f4ede5' }}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold',textAlign:'center' }}>
            { cards[2].title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign:'center',fontSize:'16px',marginTop:'10px',fontFamily:'var(--font-montserrat)'}}>  
           Commandes expédiées sous <strong>48h</strong> ouvrées si les articles sont en stock.
        </Typography>
      </CardContent>
    </Card>

  
    </Box>

  );
}
