import React from "react";

const WhyChooseUs = () => {
  const whyChooseUs = [
    {
      id: 1,
      title:
        "A team of dedicated Professionals (Graduate Pharmacist, Chemist, Engineers, MBA)",
    },
    {
      id: 2,
      title: "In depth Industry Knowledge",
    },
    {
      id: 3,
      title: "Working Experience in Multinational and Local pharmaceuticals",
    },
    {
      id: 4,
      title:
        "One of the Top tier Manufacturer’s Representatives in Bangladesh with Trust and Reliability",
    },
    {
      id: 5,
      title: "Offer Finest Quality of Product",
    },
    {
      id: 6,
      title: "Comply with Laws, Regulations and Social Norms",
    },
    {
      id: 7,
      title: "Outstanding Service",
    },
    {
      id: 8,
      title: "Corporate Social Responsibilities",
    },
  ];
  return (
    <div
      className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 md:gap-12">
          <div className="col-span-1">
            <h2 className="text-xl md:text-3xl font-bold mb-5 uppercase text-[#162C40]">
              Why Choose Us
            </h2>
            <ul className="text-gray-800 leading-relaxed">
              {whyChooseUs?.map((item) => (
                <li
                  className="text-xl flex items-start gap-2 mb-2"
                  key={item.id}
                >
                  <i class="fa-solid fa-square-check text-[#04CAFB] mt-1"></i>
                  <span className="text-[#162C40]"> {item.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <img
              src="/images/why-choose-us.jpg"
              alt="why-choose-us"
              className="shadow-lg rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
