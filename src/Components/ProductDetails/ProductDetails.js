import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/products/${productId}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', padding: '20px' }}>
      {product ? (
        <div style={{ maxWidth: '90%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', marginRight: '20px' }}>
            <Card style={{ width: '100%' }}>
              <CardMedia component="img" alt={product.title} image={`http://localhost:2000${product.images}`} />
            </Card>
          </div>
          <div style={{ flex: '2' }}>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {product.title}
                </Typography>
                <Rating name="read-only" value={product.rating} readOnly />
                <Typography color="text.secondary" gutterBottom>
                  {product.description}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  ₹{product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="success">Add To Cart</Button>
                <Button variant="contained" color='warning'>Buy Now</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
      
    </div>
  );
}

export default ProductDetails;
