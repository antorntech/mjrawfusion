import React from "react";

const HomeAbout = () => {
  return (
    <div className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w1/2 order-2 md:order-1">
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-md md:text-lg text-[#04cafb] uppercase mt-5 md:mt-0"
            >
              Who we are
            </p>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-2xl md:text-5xl font-bold my-2 md:my-5"
            >
              With us, expect more than just a pharmacy.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="text-gray-500 mb-32"
            >
              Erat litora dignissim consectetur sit mollis. Placerat gravida
              dolor integer mollis habitant felis consectetur lorem platea ac
              hendrerit. Vitae platea massa consectetuer tristique vivamus
              vulputate suspendisse blandit.
            </p>
            <div className="w-full relative">
              <div className="w-full absolute -bottom-5 left-0 md:-bottom-8 md:left-0 z-40 ">
                <div
                  data-aos="fade-in"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                  className="w-full flex items-center justify-center gap-3 md:gap-12 my-5 custom-shadow bg-white border-[1px] border-[#04cafba1] p-5 rounded-md"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-[#04cafb]">
                      14K+
                    </h2>
                    <p className="text-gray-500">Happy Customer</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-gray-400"></div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                  >
                    <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-[#04cafb]">
                      27K+
                    </h2>
                    <p className="text-gray-500">Product Sold</p>
                  </div>
                  <div className="w-[1px] h-[60px] bg-gray-400"></div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                  >
                    <h2 className="text-xl md:text-2xl lg:text-5xl font-bold text-[#04cafb]">
                      15+
                    </h2>
                    <p className="text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w1/2 order-1 md:order-2">
            <img
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              src="/images/home-about-bg.jpg"
              alt="home-about-bg.jpg"
              className="w-full object-contain rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
