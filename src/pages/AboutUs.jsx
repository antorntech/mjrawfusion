import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import MissionVision from "../components/about/MissionVision";
import DiscoverMore from "../components/home/DiscoverMore";
import WhyChoose from "../components/about/WhyChoose";
import WhatWeDo from "../components/about/WhatWeDo";
import OurStrength from "../components/about/OurStrength";
import OurTeam from "../components/about/OurTeam";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <div className="px-5 md:px-0 pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-md lg:text-lg">
            Welcome to MJ Raw Fusion, a leading and comprehensive indenting
            house and trading company specializing in pharmaceutical raw
            materials and Instruments. With a commitment to quality and
            reliability, we connect Pharmaceutical manufacturers with top-tier
            raw suppliers globally.
          </p>
          <p className="text-md lg:text-lg mt-3">
            Our expertise lies in sourcing and supplying a wide range of active
            pharmaceutical ingredients (APIs and excipients) from trusted
            manufacturers globally. We pride ourselves on our strong
            relationships with suppliers and customers, ensuring timely delivery
            and competitive pricing.
          </p>
          <p className="text-md lg:text-lg mt-3">
            Our dedicated team of professionals is focused on providing
            exceptional service and support, helping our clients to navigate the
            complexities of the pharmaceutical supply chain. We are driven by a
            commitment to quality, compliance and innovation, making us a
            reliable partner in your pharmaceutical development needs.
          </p>
          <p className="text-md lg:text-lg mt-3">
            Choose MJ Raw Fusion for your pharmaceutical raw material
            requirements and experience excellence in every interaction.
          </p>
        </div>
      </div>
      <div>
        <MissionVision />
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <WhatWeDo />
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <OurStrength />
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <OurTeam />
      </div>
    </>
  );
};

export default AboutUs;
