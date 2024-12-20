import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const WorkingArea = () => {
  const products = [
    {
      id: 1,
      link: "/services/api-micronization",
      name: "API Micronization/Lyophilization",
      image: "images/clients/sponsor-1.png",
    },
    {
      id: 2,
      link: "/services/contract-development-and-manufacturing-organization",
      name: "CDMO (Regular API and HPAPI)",
      image: "images/clients/sponsor-2.png",
    },
    {
      id: 3,
      link: "/services/technology-development-and-transfer-services",
      name: "Technology Development and Transfer Services",
      image: "images/clients/sponsor-3.png",
    },
    {
      id: 4,
      link: "/services/drug-synthesis",
      name: "Drug Synthesis",
      image: "images/clients/sponsor-5.png",
    },
    {
      id: 5,
      link: "/services/bioequivalence-studies",
      name: "Bioequivalence Studies",
      image: "images/clients/sponsor-6.png",
    },
    {
      id: 6,
      link: "/services/fixed-dose-combination",
      name: "Fixed Dose Combination",
      image: "images/clients/sponsor-7.png",
    },
    {
      id: 7,
      link: "/services/pharmacovigilance",
      name: "Pharmacovigilence",
      image: "images/clients/sponsor-8.png",
    },
    {
      id: 8,
      link: "/services/dmf-preparation-filing-and-dossier-service",
      name: "DMF Preparation, Filling and Dossier Service",
      image: "images/clients/sponsor-9.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 uppercase text-[#162C40]">
            Our Working Area
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#04cafb]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
        </div>
        <Slider {...settings}>
          {products.map((product, index) => (
            <Link
              to={product.link}
              key={index}
              className="relative group flex items-center justify-center text-center transition-all duration-500 ease-in-out py-12 px-5 overflow-hidden rounded-md"
            >
              <div className="absolute inset-0 bg-gradient-to-l from-[#04cafb] to-[#039dda] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img
                src={product.image}
                alt=""
                className="relative mx-auto z-10 mb-2"
              />
              <p className="relative text-lg group-hover:text-white transition-all duration-500 z-10">
                {product.name}
              </p>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkingArea;
