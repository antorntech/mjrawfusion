import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="px-5 pb-[20px] md:pb-[80px] lg:pb-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-5 uppercase">
              Why Choose Us
            </h2>
            <ul className="text-gray-800 leading-relaxed">
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                61 years of experience
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                One of the first manufacturer’s representatives in Bangladesh
                with trust & reliability
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                In depth Industry knowledge
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Representing world renowned companies from Europe, India, USA,
                Japan, China, and many more
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Offer finest quality of products
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                1st preference of local pharmaceutical manufacturers
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Trusted partner of principals
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Comply with laws and regulations and social norms
              </li>
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
