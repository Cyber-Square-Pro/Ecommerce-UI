import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Banners() {
  const [images] = useState([
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4bf002075e411d4e.jpg?q=20",
      title: "first"
    },
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa97d7809ad44d08.jpg?q=20",
      title: "second"
    },
    {
      image: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/db75690ef0205dc2.jpg?q=20",
      title: "third"
    }
  ]);

  // Settings for the image carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div style={{marginTop:'10px',marginBottom:'30px'}}>
      <Slider {...carouselSettings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={image.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
