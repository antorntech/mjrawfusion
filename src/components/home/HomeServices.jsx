import React from "react";

const HomeServices = () => {
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
    <div className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          className="mb-5 md:mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
            Services
          </h2>
          <div className="flex items-center justify-center">
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
            <div className="w-[50px] h-[5px] bg-[#04cafb]"></div>
            <div className="w-[60px] h-[1px] bg-gray-300"></div>
          </div>
          <p className="text-gray-500 text-center mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            debitis eligendi, aliquam ea maxime facere velit officiis, tenetur
            eveniet itaque suscipit accusamus numquam quibusdam doloremque atque
            blanditiis molestiae? Alias, et?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
  );
};

export default HomeServices;
