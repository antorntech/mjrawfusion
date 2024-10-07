import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

const OurCustomers = () => {
  const customers = [
    {
      id: 1,
      logo: "/images/principals/1.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 2,
      logo: "/images/principals/2.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 3,
      logo: "/images/principals/3.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 4,
      logo: "/images/principals/4.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 5,
      logo: "/images/principals/5.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 6,
      logo: "/images/principals/6.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 7,
      logo: "/images/principals/7.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 8,
      logo: "/images/principals/8.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 9,
      logo: "/images/principals/9.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 10,
      logo: "/images/principals/10.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 11,
      logo: "/images/principals/11.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 12,
      logo: "/images/principals/12.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 13,
      logo: "/images/principals/1.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 14,
      logo: "/images/principals/2.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 15,
      logo: "/images/principals/3.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 16,
      logo: "/images/principals/4.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 1,
      logo: "/images/principals/1.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 2,
      logo: "/images/principals/2.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 3,
      logo: "/images/principals/3.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 4,
      logo: "/images/principals/4.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 5,
      logo: "/images/principals/5.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 6,
      logo: "/images/principals/6.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 7,
      logo: "/images/principals/7.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 8,
      logo: "/images/principals/8.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 9,
      logo: "/images/principals/9.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 10,
      logo: "/images/principals/10.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 11,
      logo: "/images/principals/11.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
    {
      id: 12,
      logo: "/images/principals/12.png",
      name: "Leading international supplier for soy proteins and soy health-care foods",
    },
  ];
  return (
    <>
      <PageHeader title="Customers" />
      <div className="px-5 py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="w-full rounded-[10px] overflow-hidden"
              >
                <img
                  src={customer.logo}
                  alt="customer"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCustomers;
