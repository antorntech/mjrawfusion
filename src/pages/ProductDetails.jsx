import React from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";

const ProductDetails = () => {
  const location = useLocation();
  // Access the id from location state
  const { id } = location.state || {};

  const products = [
    {
      id: 1,
      name: "APIs & Blended Pellets",
      image: "images/clients/sponsor-1.png",
      related_products: [
        "Products 1",
        "Products 2",
        "Products 3",
        "Products 4",
        "Products 5",
      ],
    },
    {
      id: 2,
      name: "Pharmaceutical Coatings",
      image: "images/clients/sponsor-2.png",
      related_products: [
        "Products 1",
        "Products 2",
        "Products 3",
        "Products 4",
        "Products 5",
      ],
    },
    {
      id: 3,
      name: "Fragrances & Essential Oils",
      image: "images/clients/sponsor-3.png",
      related_products: [
        "Products 1",
        "Products 2",
        "Products 3",
        "Products 4",
        "Products 5",
      ],
    },
    {
      id: 4,
      name: "Herbal Extracts & Vitamins",
      image: "images/clients/sponsor-4.png",
      related_products: [
        "Products 1",
        "Products 2",
        "Products 3",
        "Products 4",
        "Products 5",
      ],
    },
  ];
  const product = products.find((p) => p.id === id);

  return (
    <>
      <PageHeader title={location.pathname.split("/").pop()} />
      <div className="px-5 md:px-0 py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl md:text-3xl font-bold text-[#04CAFB]">
            {product.name}
          </h1>
          <hr className="text-gray-300 my-2 md:my-5" />
          <p className="mb-3 text-lg md:text-2xl">Related Products: </p>
          <ul>
            {product.related_products.map((p, i) => (
              <li key={i} className="text-lg">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB] text-xl"></i>
                {product.name} {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
