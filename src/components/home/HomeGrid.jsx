import React from "react";

const HomeGrid = () => {
  return (
    <div className="w-full px-5 py-[20px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-6 gap-4">
          <div className="w-full md:col-span-2 row-span-6">
            <div
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="bg-[#31c5ff70] p-8 rounded-md"
            >
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-2xl font-semibold"
              >
                Save up to $15 on select Digital Thermometers
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
                className="text-gray-500 py-8"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <img
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1000"
                src="/images/grid-img1.png"
                alt="grid-img1.png"
                className="w-2/3 md:w-2/4 mx-auto"
              />
            </div>
          </div>
          <div className="w-full md:col-span-2 row-span-3 md:col-start-5 md:row-start-1">
            <div
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="bg-[url('/images/grid-img3.jpg')] bg-no-repeat bg-cover bg-bottom h-full rounded-md"
            >
              <div className="bg-[#b4382870] w-full h-full flex flex-col justify-center items-center p-5 text-center rounded-md">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="text-xl md:text-2xl font-semibold text-white"
                >
                  Daily Routine for Good Health
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                  className="text-gray-200"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:col-span-2 row-span-3 md:col-start-3 md:row-start-1">
            <div
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="bg-[url('/images/grid-img2.jpg')] bg-no-repeat bg-cover bg-bottom h-full rounded-md"
            >
              <div className="bg-[#18718b70] w-full h-full flex flex-col justify-center items-center p-5 text-center rounded-md">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="text-xl md:text-2xl font-semibold text-white"
                >
                  N95 Face Mask
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                  className="text-gray-200"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:col-span-4 row-span-3 md:col-start-3 md:row-start-4">
            <div
              data-aos="fade-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="bg-[url('/images/grid-img4.png')] bg-no-repeat bg-cover bg-bottom h-full rounded-md"
            >
              <div className="bg-[#32630a70] w-full h-full flex flex-col justify-center items-center p-5 text-center rounded-md">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="text-xl md:text-2xl font-semibold text-white"
                >
                  Natural Anti-age skin foam
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="1000"
                  className="text-gray-200"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGrid;
