import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Offers() {
    const [images] = useState([
        {
            image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a86809ac8658be03.png?q=20",
            
        },
        {
            image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/eebd82419c605b36.png?q=20",
            
        },
        {
            image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/ef1fd1d98a436959.png?q=20",
            
        },
        {
            image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/7a4697c697c9307c.png?q=20",
            
        },
      
    ]);

    return (
        <div style={{marginBottom:'50px'}}>
            <Card sx={{ minWidth: 800 }}>
            <h2>Offers</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {images.map((image, index) => (
                <Card key={index} sx={{ maxWidth: 300, margin: '16px' }}>
                    <CardMedia
                        component="img"
                        sx={{ height: 200, objectFit: 'cover' }}
                        image={image.image} 
                        alt={image.title}
                    />
                   
                   
                </Card>
            ))}
        </div></Card></div>
    );
}
