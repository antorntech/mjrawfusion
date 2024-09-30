import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

const OurCustomers = () => {
  const customers = [
    {
      id: 1,
      logo: "https://unclenephew.com/img/customers/01.jpg",
    },
    {
      id: 2,
      logo: "https://unclenephew.com/img/customers/02.jpg",
    },
    {
      id: 3,
      logo: "https://unclenephew.com/img/customers/03.jpg",
    },
    {
      id: 4,
      logo: "https://unclenephew.com/img/customers/04.jpg",
    },
    {
      id: 5,
      logo: "https://unclenephew.com/img/customers/05.jpg",
    },
    {
      id: 6,
      logo: "https://unclenephew.com/img/customers/06.jpg",
    },
    {
      id: 7,
      logo: "https://unclenephew.com/img/customers/07.jpg",
    },
    {
      id: 8,
      logo: "https://unclenephew.com/img/customers/08.jpg",
    },
    {
      id: 9,
      logo: "https://unclenephew.com/img/customers/09.jpg",
    },
    {
      id: 10,
      logo: "https://unclenephew.com/img/customers/10.jpg",
    },
    {
      id: 11,
      logo: "https://unclenephew.com/img/customers/11.jpg",
    },
    {
      id: 12,
      logo: "https://unclenephew.com/img/customers/12.jpg",
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
                className="w-full rounded-[10px] overflow-hidden "
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
