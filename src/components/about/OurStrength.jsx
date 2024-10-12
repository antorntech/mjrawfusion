import React from "react";

const OurStrength = () => {
  const strengths = [
    "WORKING WITH GOOD MANUFACTURERS WORLDWIDE.",
    "BEST QUALITY PRODUCTS ACROSS THE PHARMACEUTICAL DOMAIN",
    "FLEXIBLE CONTRACT ENGAGEMENTS",
    "PRIMARY FOCUS ON QUALITY",
    "SHIPMENT / DELIVERY IN TIME",
    "FOCUSED AND PERSONALIZED CUSTOMER RELATIONSHIP",
  ];
  return (
    <div
      className="px-5 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-12">
          <div className="col-span-1 order-2 md:order-1">
            <img
              src="/images/strength.jpg"
              alt="strength"
              className="shadow-lg rounded-md"
            />
          </div>
          <div className="col-span-1 order-1 md:order-2">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
              Our Strength
            </h2>
            <p className="text-[#162C40] leading-relaxed">
              We are one of the top Indenting Agents and Traders of
              Pharmaceutical Ingredients in Dhaka, Bangladesh catering to many A
              listed companies.
            </p>
            <ul className="text-gray-800 leading-relaxed mt-5">
              {strengths.map((strength, index) => (
                <li
                  key={index}
                  className="text-md flex items-start gap-2 mb-2 leading-relaxed"
                >
                  <i class="fa-solid fa-square-check mt-1 text-[#04CAFB]"></i>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
