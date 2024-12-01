import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Pharmaceutical Raw Material (RM)",
      link: "/products/Raw-Material-(RM)",
    },
    {
      id: 2,
      name: "Pharmaceutical Packaging Material (PM)",
      link: "/products/Packaging-Material-(PM)",
    },
    {
      id: 3,
      name: "Reference Standard (RS), Working Standard (WS), Impurities and Degradation Impurities",
      link: "/products/Reference-Standard-(RS)",
    },
    {
      id: 4,
      name: "Drug Intermediate",
      link: "/products/drug-intermediate",
    },
    {
      id: 5,
      name: "Analytical Chemical (Reagent, Solvent, Fine and Specialty Chemicals)",
      link: "/products/analytical-chemical",
    },
    {
      id: 6,
      name: "Lab Instruments/Equipment",
      link: "/products/lab-instruments",
    },
  ];

  const services = [
    {
      id: 1,
      name: "API Micronization/Lyophilization",
      link: "/services/api-micronization",
    },
    {
      id: 2,
      name: "Contract Research Service (CRO)",
      link: "/services/contract-research-service",
    },
    {
      id: 3,
      name: "CDMO (Regular API and HPAPI)",
      link: "/services/contract-development-and-manufacturing-organization",
    },
    {
      id: 4,
      name: "Technology Development and Transfer Services",
      link: "/services/technology-development-and-transfer-services",
    },
    {
      id: 5,
      name: "Drug Synthesis",
      link: "/services/drug-synthesis",
    },
    {
      id: 6,
      name: "Bioequivalence Studies",
      link: "/services/bioequivalence-studies",
    },
    {
      id: 7,
      name: "Fixed Dose Combination",
      link: "/services/fixed-dose-combination",
    },
    {
      id: 8,
      name: "Pharmacovigilance",
      link: "/services/pharmacovigilance",
    },
    {
      id: 9,
      name: "DMF Preparation, Filing and Dossier Service",
      link: "/services/dmf-preparation-filing-and-dossier-service",
    },
  ];
  return (
    <>
      <PageHeader title="Products" imageUrl="/images/pageheader.jpg" />
      <div className="px-5 md:px-0 py-[50px] md:py-[80px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="col-span-1 new-shadow p-5 pb-12 rounded-3xl"
            >
              <div>
                <h2 className="text-2xl md:text-4xl text-[#162C40] font-bold text-center mb-8 uppercase">
                  Products
                </h2>
              </div>
              <div>
                {products.map((product, index) => (
                  <Link
                    to={{
                      pathname: `${product.link
                        .replace(/\s+/g, "-")
                        .toString()}`,
                    }}
                    state={{
                      id: product.id,
                    }}
                    key={index}
                    className="relative group flex items-center text-start transition-all duration-500 ease-in-out overflow-hidden rounded-md p-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-[#04cafb] to-[#039dda] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="relative underline text-lg text-[#162C40] group-hover:text-white transition-all duration-500 group-hover:no-underline z-10">
                      {product.name}
                      <i class="fa-solid fa-arrow-right -rotate-45 ml-2 group-hover:hidden"></i>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-center">
              <p className="text-center text-xl font-semibold text-red-500 cursor-pointer underline">
                <i class="fa-solid fa-download"></i> Download Catalogue
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 flex items-center justify-center">
              <p className="text-center text-xl font-semibold text-red-500 cursor-pointer underline">
                <i class="fa-solid fa-download"></i> Download Catalogue
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1500"
              className="col-span-1 new-shadow p-5 rounded-3xl"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 uppercase text-[#162C40]">
                  Services
                </h2>
                <p className="text-md md:text-xl text-[#162C40] text-center leading-relaxed">
                  Advance Pharmaceutical Technology and Regulatory Support
                </p>
              </div>
              <div>
                {services.map((service, index) => (
                  <Link
                    to={{
                      pathname: `${service.link
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`,
                    }}
                    state={{
                      id: service.id,
                    }}
                    key={index}
                    className="relative group flex items-center text-start transition-all duration-500 ease-in-out overflow-hidden rounded-md p-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-[#04cafb] to-[#039dda] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <p className="relative underline group-hover:no-underline text-lg text-[#162C40] group-hover:text-white transition-all duration-500 z-10">
                      {service.name}
                      <i class="fa-solid fa-arrow-right -rotate-45 ml-2 group-hover:hidden"></i>
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
