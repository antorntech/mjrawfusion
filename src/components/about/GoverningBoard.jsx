import React from "react";
import { Link } from "react-router-dom";

const GoverningBoard = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-5 md:px-0"
    >
      <div>
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
          Management
        </h2>
        <p className="text-[#162C40] leading-relaxed">
          Our team is highly regarded in the industry for its global
          pharmaceutical.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
          <div className="col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
              <div className="col-span-1 relative bg-cyan-400 rounded-md">
                <img
                  src="/images/gboard2.jpg"
                  alt="gboard2.jpg"
                  className="w-full md:w-[300px] md:h-[200px] rounded-md md:absolute md:top-3 md:left-3"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center mt-2 md:mt-0 mb-5 md:mb-0">
                <h1 className="text-2xl font-semibold">Maria Jahan</h1>
                <Link to="/about-maria" className="text-[#04cafb] underline">
                  CEO & Founder
                </Link>
                <p className="mt-3 text-gray-700">
                  Maria Jahan is honorable CEO and Founder of the company.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    to="https://www.facebook.com/shuchi.maria23?mibextid=ZbWKwL"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-facebook-f text-[#04cafb] group-hover:text-white  text-lg"></i>
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-linkedin-in text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-x-twitter text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
              <div className="col-span-1 relative bg-cyan-400 rounded-md">
                <img
                  src="/images/gboard1.jpg"
                  alt="gboard1.jpg"
                  className="w-full md:w-[300px] md:h-[200px] rounded-md md:absolute md:top-3 md:left-3"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center mt-2 md:mt-0 mb-5 md:mb-0">
                <h1 className="text-2xl font-semibold">S M Jobair Abedin</h1>
                <Link to="/about-jobair" className="text-[#04cafb] underline">
                  Executive Director
                </Link>
                <p className="mt-3 text-gray-700">
                  S. M. Jobair Abedin is honorable Director of the company.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    to="https://www.facebook.com/s.m.jobair.abedin"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-facebook-f text-[#04cafb] group-hover:text-white  text-lg"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/s-m-jobair-abedin-a833bb256/?trk=opento_sprofile_topcard"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-linkedin-in text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                  <Link
                    to="https://x.com/jobairabedin"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-x-twitter text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoverningBoard;
