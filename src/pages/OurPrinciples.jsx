import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";

const OurPrinciples = () => {
  const principles = [
    {
      id: 1,
      logo: "https://unclenephew.com/img/principals/01.jpg",
    },
    {
      id: 2,
      logo: "https://unclenephew.com/img/principals/02.jpg",
    },
    {
      id: 3,
      logo: "https://unclenephew.com/img/principals/03.jpg",
    },
    {
      id: 4,
      logo: "https://unclenephew.com/img/principals/04.jpg",
    },
    {
      id: 5,
      logo: "https://unclenephew.com/img/principals/05.jpg",
    },
    {
      id: 6,
      logo: "https://unclenephew.com/img/principals/06.jpg",
    },
    {
      id: 7,
      logo: "https://unclenephew.com/img/principals/07.jpg",
    },
    {
      id: 8,
      logo: "https://unclenephew.com/img/principals/08.jpg",
    },
    {
      id: 9,
      logo: "https://unclenephew.com/img/principals/09.jpg",
    },
    {
      id: 10,
      logo: "https://unclenephew.com/img/principals/10.jpg",
    },
    {
      id: 11,
      logo: "https://unclenephew.com/img/principals/11.jpg",
    },
    {
      id: 12,
      logo: "https://unclenephew.com/img/principals/12.jpg",
    },
  ];
  return (
    <>
      <PageHeader title="Principals" />
      <div className="px-5 py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {principles.map((principle) => (
              <div
                key={principle.id}
                className="w-full rounded-[10px] overflow-hidden "
              >
                <img
                  src={principle.logo}
                  alt="principle"
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

export default OurPrinciples;
