import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "APIs & Blended Pellets",
      image: "images/clients/sponsor-1.png",
    },
    {
      id: 2,
      name: "Pharmaceutical Coatings",
      image: "images/clients/sponsor-2.png",
    },
    {
      id: 3,
      name: "Flavors, Fragrances & Essential Oils",
      image: "images/clients/sponsor-3.png",
    },
    {
      id: 4,
      name: "Herbal Extracts & Vitamins",
      image: "images/clients/sponsor-4.png",
    },
    {
      id: 5,
      name: "More Products",
      image: "images/clients/sponsor-5.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-5 py-[20px] md:py-[80px] lg:py-[100px]">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-screen-xl mx-auto"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="mb-3 md:mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
            Our Products
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#04cafb]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
          <p className="text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            debitis eligendi, aliquam ea maxime facere velit officiis, tenetur
            eveniet itaque suscipit accusamus numquam quibusdam doloremque atque
            blanditiis molestiae? Alias, et?
          </p>
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className="flex items-center justify-center text-center border-2 border-gray-300 p-3 w-full md:w-5/6 h-[150px] mx-auto">
                <h3 className="text-lg md:text-[30px] leading-10">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurProducts;
