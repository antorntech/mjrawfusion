import React from "react";

const HomeDivisions = () => {
  const divisions = [
    {
      id: 1,
      title: "Process and Packaging Machinery Division",
      image: "/images/machine.jpg",
    },
    {
      id: 2,
      title: "Laboratory Instrument Division",
      image: "/images/lab-div.jpg",
    },
    {
      id: 3,
      title: "Raw Materials(Pharma) Division",
      image: "/images/raw-mat.jpg",
    },
    {
      id: 4,
      title: "Industrial Flooring Division",
      image: "/images/flooring.jpg",
    },
    {
      id: 5,
      title: "Packaging Materials Division",
      image: "/images/pack.jpg",
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
            Divisions
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {divisions.map((division) => (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              key={division.id}
              className="p-2 md:p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-[#04cafb] hover:shadow-xl transition-all duration-500"
            >
              <div className="group">
                <div className="w-full overflow-hidden">
                  <img
                    src={division.image}
                    alt=""
                    className="w-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mt-3">
                  {division.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDivisions;
