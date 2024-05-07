import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './offers.css'; 

export default function Offers() {
  const images = [
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/a86809ac8658be03.png?q=20",
      title: "Offer 1",
    },
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/eebd82419c605b36.png?q=20",
      title: "Offer 2",
    },
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/ef1fd1d98a436959.png?q=20",
      title: "Offer 3",
    },
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/7a4697c697c9307c.png?q=20",
      title: "Offer 4",
    },
  ];

  return (
    <div className="offers-container">
      <Typography variant="h2" gutterBottom className="offers-heading">
        Offers
      </Typography>
      <div className="cards-container">
        {images.map((image, index) => (
          <Card key={index} className="offer-card">
            <CardMedia
              component="img"
              className="offer-image"
              image={image.image}
              alt={image.title}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
