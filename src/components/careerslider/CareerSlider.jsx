import React from "react";
import Slider from "react-slick";

const CareerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    "/images/careerslider/1.jpg",
    "/images/careerslider/2.jpg",
    "/images/careerslider/3.jpg",
    "/images/careerslider/4.jpg",
    "/images/careerslider/5.jpg",
  ];
  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-[70vh]">
            <img
              src={image}
              alt="Carousel Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CareerSlider;
