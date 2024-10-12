import React from "react";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const products = [
    {
      id: 1,
      name: "Raw Materials",
      image: "images/products1.jpeg",
    },
    {
      id: 2,
      name: "Packaging Materials ",
      image: "images/products2.jpg",
    },
    {
      id: 3,
      name: "Reference Standards/Impurities",
      image: "images/products3.jpg",
    },
    {
      id: 4,
      name: "Drug Intermediate",
      image: "images/products4.jpg",
    },
    {
      id: 5,
      name: "Analytical Chemical",
      image: "images/products5.png",
    },
    {
      id: 6,
      name: "QC Instruments/Equipments",
      image: "images/products6.jpg",
    },
  ];

  return (
    <div className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]">
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
            Our Products
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#04cafb]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              to={{
                pathname: `/products/${product.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`,
              }}
              state={{
                id: product.id,
              }}
              key={index}
            >
              <div className="overflow-hidden rounded-md w-full h-[300px] shadow-md">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-md md:text-lg uppercase text-[#0498fb] hover:text-[#162C40] transition-all duration-500 mt-3">
                  {product.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
