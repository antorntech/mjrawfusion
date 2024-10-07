import React from "react";

const OurStrength = () => {
  return (
    <div
      className="px-5 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="col-span-1 order-2 md:order-1">
            <img
              src="/images/strength.jpg"
              alt="strength"
              className="shadow-lg rounded-md"
            />
          </div>
          <div className="col-span-1 order-1 md:order-2">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-5 uppercase">
              Our Strength
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              modi assumenda ea voluptates nihil est!
            </p>
            <ul className="text-gray-800 leading-relaxed mt-5">
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Working with good manufacturers Worldwide.
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Best Quality Products across the pharmaceutical domain
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Flexible Contract Engagements
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Primary Focus on Quality
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Shipment / Delivery in time
              </li>
              <li className="text-xl mb-2">
                <i class="fa-solid fa-square-check me-2 text-[#04CAFB]"></i>
                Focused and Personalized Customer relationship
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
