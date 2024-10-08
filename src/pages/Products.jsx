import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
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
      name: "Fragrances & Essential Oils",
      image: "images/clients/sponsor-3.png",
    },
    {
      id: 4,
      name: "Herbal Extracts & Vitamins",
      image: "images/clients/sponsor-4.png",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Turn Key Pharmaceuticals projects",
      description:
        "Conceptual design, Basic Engineering, detailed Engineering, Validation Master Plan, Supply, Installation and commissioning of HVAC, Clean room, Floor and all utilities",
      icon: <i class="fa-solid fa-chart-pie text-[50px] text-[#04cafb]"></i>,
    },
    {
      id: 2,
      title: "Technological support",
      description:
        "We provide technological support for all Pharmaceutical discipline including biotechnology",
      icon: (
        <i class="fa-solid fa-book-bookmark text-[50px] text-[#04cafb]"></i>
      ),
    },
    {
      id: 3,
      title: "Installation & commissioning",
      description:
        "Supply Installation & commissioning of process & Packaging Machineries for all discipline of Pharmaceuticals, Food & Cosmetics production facility",
      icon: <i class="fa-solid fa-gauge text-[50px] text-[#04cafb]"></i>,
    },
    {
      id: 4,
      title: "Installation & validation",
      description:
        "Supply installation & validation of all kind of Laboratory instrument,inspection & security system required for Pharmaceutical industry",
      icon: <i class="fa-solid fa-barcode text-[50px] text-[#04cafb]"></i>,
    },
    {
      id: 5,
      title: "Supply of Specialized devices",
      description:
        "For unit dose delivery/dispensing systems for pulmonary and Ear, Nose and Eye product. All kind of packaging materials required for pharmaceutical industry and also Raw materials and Excipient",
      icon: <i class="fa-solid fa-people-group text-[50px] text-[#04cafb]"></i>,
    },
    {
      id: 6,
      title: "API & PVC",
      description: "Turn Key API,PVC & Synthetic Leather Projects.",
      icon: <i class="fa-brands fa-quinscape text-[50px] text-[#04cafb]"></i>,
    },
  ];
  return (
    <>
      <PageHeader title="Products" />
      <div className="px-5 md:px-0 py-[50px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8">
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
                className="relative group flex items-center justify-center text-center border border-gray-300 transition-all duration-500 ease-in-out py-12 px-5 overflow-hidden rounded-md"
              >
                <div className="absolute inset-0 bg-gradient-to-l from-[#04cafb] to-[#039dda] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <p className="relative text-lg group-hover:text-white transition-all duration-500 z-10">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-20">
            {services.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                key={service.id}
                className="p-0 md:p-5 bg-white rounded-xl hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-lg md:text-xl font-bold">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-500 mt-3">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
