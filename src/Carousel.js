// src/components/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import des icônes
import './Carousel1.scss'; // Créez ce fichier pour ajouter des styles personnalisés si nécessaire

const Carousel = ({ images }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setSelectedImageIndex(next);
    },
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setFullscreen(true);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleCloseFullscreen = () => {
    setSelectedImageIndex(null);
    setFullscreen(false);
  };

  return (
    <div className={`carousel ${fullscreen ? 'fullscreen' : ''}`}>
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${fullscreen && selectedImageIndex === index ? 'large-image' : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {fullscreen && (
        <div className="fullscreen-overlay">
          <div className="close-icon" onClick={handleCloseFullscreen}>
            <FaTimes />
          </div>
          <div className="prev-icon" onClick={handlePrevClick}>
            <FaChevronLeft />
          </div>
          <div className="next-icon" onClick={handleNextClick}>
            <FaChevronRight />
          </div>
          <img src={images[selectedImageIndex]} alt={`Slide ${selectedImageIndex + 1}`} />
        </div>
      )}
    </div>
  );
};

export default Carousel;
