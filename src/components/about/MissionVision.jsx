import React from "react";

const MissionVision = () => {
  return (
    <div className="px-5 md:px-0 pt-[20px] md:pt-[50px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="group shadow-lg"
          >
            <div>
              <img
                src="/images/mission.jpg"
                alt="mission.jpg"
                className="w-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex justify-center items-center rounded-full bg-white">
                <div className="bg-[#04cafb] group-hover:bg-white rounded-full w-16 h-16 flex justify-center items-center transition-all duration-500">
                  <i class="fa-solid fa-crosshairs text-[40px] text-white group-hover:text-[#04cafb] transition-all duration-500"></i>
                </div>
              </div>
              <div className="p-5 mt-5">
                <h2 className="mt-5 md:mt-[20px] text-2xl md:text-4xl font-semibold text-center mb-2 uppercase">
                  Our Mission
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quaerat iusto numquam, nobis aspernatur dolore
                  recusandae laborum ducimus maxime amet expedita totam nesciunt
                  voluptates quas odit aperiam nisi facilis autem?
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            className="group shadow-lg"
          >
            <div>
              <img
                src="/images/vision.jpg"
                alt="vision.jpg"
                className="w-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex justify-center items-center rounded-full bg-white">
                <div className="bg-[#04cafb] group-hover:bg-white rounded-full w-16 h-16 flex justify-center items-center transition-all duration-500">
                  <i class="fa-regular fa-eye text-[40px] text-white group-hover:text-[#04cafb] transition-all duration-500"></i>
                </div>
              </div>
              <div className="p-5 mt-5">
                <h2 className="mt-5 md:mt-[20px] text-2xl md:text-4xl font-semibold text-center mb-2 uppercase">
                  Our Vision
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quaerat iusto numquam, nobis aspernatur dolore
                  recusandae laborum ducimus maxime amet expedita totam nesciunt
                  voluptates quas odit aperiam nisi facilis autem?
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="group shadow-lg"
          >
            <div>
              <img
                src="/images/about-plan.jpg"
                alt="about-plan.jpg"
                className="w-full rounded-tl-lg rounded-tr-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex justify-center items-center rounded-full bg-white">
                <div className="bg-[#04cafb] group-hover:bg-white rounded-full w-16 h-16 flex justify-center items-center transition-all duration-500">
                  <i class="fa-regular fa-map text-[40px] text-white group-hover:text-[#04cafb] transition-all duration-500"></i>
                </div>
              </div>
              <div className="p-5 mt-5">
                <h2 className="mt-5 md:mt-[20px] text-2xl md:text-4xl font-semibold text-center mb-2 uppercase">
                  Our Values
                </h2>
                <p className="text-gray-500 text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptas quaerat iusto numquam, nobis aspernatur dolore
                  recusandae laborum ducimus maxime amet expedita totam nesciunt
                  voluptates quas odit aperiam nisi facilis autem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
