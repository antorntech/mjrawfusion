import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeServices from "../components/home/HomeServices";
import { Link } from "react-router-dom";

const Products = () => {
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
  ];
  return (
    <>
      <PageHeader title="Products" />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
            {products.map((product, index) => (
              <Link
                to={`/products/${product.id}`}
                key={index}
                className="relative group flex items-center justify-center text-center border border-gray-300 transition-all duration-500 ease-in-out py-12 px-5 overflow-hidden rounded-md"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-[#04cafb] to-[#039dda] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="relative text-lg group-hover:text-white transition-all duration-500 z-10">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
