import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/ProductDetails/ProductDetails'; // Import the new component for product details
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from './Components/Carousal/Carousal';
// import AddBanner from './Components/Banner/AddBanner';
import Banners from './Components/Banners/Banners';
import Offers from './Components/Offers/Offers';
function App() {
  return (
    
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> 
          <Route path="/carousal" element={<UncontrolledExample/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          {/* <Route path="/banner" element={<AddBanner/>} /> */}
          <Route path='/banners' element={<Banners/>}></Route>
          <Route path='/offers' element={<Offers/>}></Route>
        </Routes>
        <Footer />
      </>
    
  );
}

export default App;
