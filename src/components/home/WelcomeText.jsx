import React from "react";

const WelcomeText = () => {
  return (
    <div
      className="px-5 py-[20px] md:py-[80px] lg:py-[100px]"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <img
          src="/images/welcome-text.png"
          alt="welcome-text"
          className="mx-auto"
        />
        <p className="text-md md:text-lg text-center mt-5">
          MJ Raw Fusion is one of the fast growing organizations in Bangladesh
          to represent world renowned manufacturers of pharmaceutical
          ingredients since its establishment. With a commitment to excellence,
          we bridge the gap between manufacturers and pharmaceutical industry,
          ensuring access to high quality materials that meet stringent
          regulatory standards. Our core objective is to satisfy our customers
          by collaborating closely with our principals who share common visions
          and strengths to achieve mutual goals.
        </p>
      </div>
    </div>
  );
};

export default WelcomeText;
