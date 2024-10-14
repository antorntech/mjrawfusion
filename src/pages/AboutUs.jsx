import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import MissionVision from "../components/about/MissionVision";
import DiscoverMore from "../components/home/DiscoverMore";
import WhyChoose from "../components/about/WhyChoose";
import WhatWeDo from "../components/about/WhatWeDo";
import OurStrength from "../components/about/OurStrength";
import OurTeam from "../components/about/OurTeam";
import GoverningBoard from "../components/about/GoverningBoard";
import CompanyInformation from "../components/about/CompanyInformation";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="About Us" imageUrl="/images/pageheader.jpg" />
      <div className="px-5 md:px-0 pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-md lg:text-lg text-[#162C40] text-center leading-relaxed">
            MJ Raw Fusion is the fastest growing Indenting House, Importer and
            Distributor in Bangladesh specializing in all Pharmaceutical
            Ingredients including{" "}
            <strong>
              Raw Materials, Packaging Materials and Lab Instruments.
            </strong>{" "}
            With years of industry experience, we have established strong
            relationships with our manufacturers and suppliers to ensure that
            our clients receive the best products tailored to their needs.
          </p>
          <p className="text-md lg:text-lg mt-3 text-[#162C40] text-center leading-relaxed">
            Our expertise lies in sourcing and offering a wide range of highest
            quality products to our customers from trusted top tier
            manufacturers globally. We are one step ahead to provide innovative
            <strong>
              Advance Pharmaceutical Technology and Regulatory Support
            </strong>{" "}
            namely API Micronization (Particle Size reduction) and
            Lyophilization, CDMO for regular API and HPAPI, Technology
            Development and Transfer Services, Customized APIs, Pellets, Taste
            Masked Granules, Bioequivalence Studies, Fixed Dose Combination, DMF
            Preparation, Filling and Dossier Service towards our clients.
          </p>
          <p className="text-md lg:text-lg mt-3 text-[#162C40] text-center leading-relaxed">
            Our dedicated team of professionals is focused on providing
            exceptional service and support, helping our clients navigates the
            complexities of the pharmaceutical supply chain. Given the
            increasing demands of pharmaceutical industry in Bangladesh, we are
            providing distinct platform to our principals for promoting their
            products effectively with our market understanding, expertise and
            experience.
          </p>
          <p className="text-md lg:text-lg mt-3 text-[#162C40] text-center leading-relaxed">
            To this end, as a prominent, trusted and respected associate in the
            industry, we are open to all sorts of business opportunities and
            alliances with pharmaceutical projects with our principals and
            customers.
          </p>
        </div>
      </div>
      <div>
        <MissionVision />
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <OurStrength />
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <OurTeam />
      </div>
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <GoverningBoard />
      </div>
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <CompanyInformation />
      </div>
    </>
  );
};

export default AboutUs;
