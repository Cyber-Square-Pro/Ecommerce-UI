// admin.js
import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
 
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('image', product.image);

    try {
      const response = await axios.post('http://localhost:2000/addBanner', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
     
      setProduct({
       
        image: null
      });
    } catch (error) {
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Add New Product</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" className="form-control-file" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
