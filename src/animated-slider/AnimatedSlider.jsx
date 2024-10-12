import React, { useState, useEffect } from "react";
import "./AnimatedSlider.css";
import { Link } from "react-router-dom";

// Sample slider images and texts
const sliderData = [
  {
    image: "/images/1.jpg",
    heading: "Sourcing Excellence",
    description: "Get The Best Service From MJ RAW FUSION",
  },
  {
    image: "/images/2.jpg",
    heading: "Sourcing Excellence",
    description: "Get The Best Service From MJ RAW FUSION",
  },
  {
    image: "/images/3.jpg",
    heading: "Sourcing Excellence",
    description: "Get The Best Service From MJ RAW FUSION",
  },
];

// Adjust this value to extend slide duration
const AUTO_SLIDE_INTERVAL = 5000;

const AnimatedSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  useEffect(() => {
    // Set up auto-slide interval
    const intervalId = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container">
      <div className="slides-wrapper">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentIndex ? "active" : "inactive"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div
              className={`slide-content ${
                index === currentIndex ? "show" : ""
              }`}
            >
              <p className="slide-description">{slide.description}</p>
              <h2 className="slide-heading banner-heading">{slide.heading}</h2>
            </div>
          </div>
        ))}
      </div>
      <button className="swiper-button-prev" onClick={prevSlide}>
        <i className="fa fa-angle-left"></i>
      </button>
      <button className="swiper-button-next" onClick={nextSlide}>
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );
};

export default AnimatedSlider;
