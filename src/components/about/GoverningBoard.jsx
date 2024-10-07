import React from "react";
import { Link } from "react-router-dom";

const GoverningBoard = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 md:px-0">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-5 uppercase">
          Governing Board
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat modi
          assumenda ea voluptates nihil est!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10">
          <div className="col-span-1">
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
              <div className="col-span-1 relative bg-cyan-400 rounded-md">
                <img
                  src="/images/gboard2.jpg"
                  alt="gboard2.jpg"
                  className="w-full rounded-md md:absolute md:top-3 md:left-3"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center mt-2 md:mt-0 mb-5 md:mb-0">
                <h1 className="text-2xl font-semibold">Maria Jahan</h1>
                <p className="text-gray-500">CEO & Founder</p>
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, excepturi.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Link className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                    <i class="fa-brands fa-facebook-f text-[#04cafb] group-hover:text-white  text-lg"></i>
                  </Link>
                  <Link className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                    <i class="fa-brands fa-linkedin-in text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                  <Link className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
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
                  className="w-full rounded-md md:absolute md:top-3 md:left-3"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center mt-2 md:mt-0 mb-5 md:mb-0">
                <h1 className="text-2xl font-semibold">Jobair Abedin </h1>
                <p className="text-gray-500">Director</p>
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis, culpa.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Link className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                    <i class="fa-brands fa-facebook-f text-[#04cafb] group-hover:text-white  text-lg"></i>
                  </Link>
                  <Link className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                    <i class="fa-brands fa-linkedin-in text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                  <Link className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
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
