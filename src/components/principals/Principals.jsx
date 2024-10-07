import React from "react";

const Principals = () => {
  const logos = [
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
  ];
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-full h-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="item group relative w-full h-[200px] hexagon bg-white p-2 overflow-hidden flex items-center justify-center"
          >
            <img
              src={logo.logo}
              alt=""
              className="w-full h-full absolute top-0 left-0 group-hover:translate-y-[-53%] group-hover:translate-x-[-70%] group-hover:-rotate-90 transition-transform duration-1000"
            />
            <div className="w-full h-full bg-gray-500 flex items-center justify-center">
              <p className="text-white w-2/3 text-center">{logo.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principals;
