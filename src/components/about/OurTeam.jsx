import React from "react";

const OurTeam = () => {
  return (
    <div
      className="px-5 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-12">
          <div className="col-span-1">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
              Our Team
            </h2>
            <p className="text-[#162C40] leading-relaxed">
              MJ Raw Fusion team is highly regarded in the industry for its
              global pharmaceutical expertise. Our team is the backbone of our
              success. We pride ourselves on having a diverse group of highly
              skilled professionals dedicated to delivering exceptional service
              and quality products to our client. Here’s a look at the key
              components of our team, their responsibilities and skills:
            </p>
          </div>
          <div className="col-span-1">
            <img
              src="/images/team.jpg"
              alt="team"
              className="shadow-lg rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
