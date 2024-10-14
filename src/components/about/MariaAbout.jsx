import React from "react";
import PageHeader from "../PageHeader/PageHeader";

const MariaAbout = () => {
  return (
    <>
      <PageHeader title="About Maria" imageUrl="/images/pageheader.jpg" />
      <div className="w-full py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto px-5 md:px-0">
          <div className="mt-2">
            <h4 className="text-[#162C40] text-md md:text-xl font-semibold italic">
              Educational Qualification
            </h4>
            <p className="text-[#162C40] italic">Graduate Pharmacist</p>
            <p className="text-[#162C40] italic">
              Registration No.: <strong>A-14321</strong> (Registered by the
              Pharmacy Council of Bangladesh)
            </p>
          </div>
          <div className="mt-2">
            <h4 className="text-[#162C40] text-md md:text-xl font-semibold italic">
              Industry Knowledge in Manufacturing Plant (Pharmaceutical)
            </h4>
            <p className="text-[#162C40] italic">
              Experienced professional in pharmaceutical manufacturing plant
              specializing in various stages of Production, Quality Control and
              Compliance with regulatory standards. Proven track record in
              operating of all QC lab instruments, ensuring adherence to cGMP,
              GLP ,GCP, GDP,GSP ensuring product integrity in a fast-paced
              environment and conducting routine inspections to maintain product
              quality. This experience enhanced the understanding of
              pharmaceutical operations and reinforced the commitment to safety
              and quality in healthcare.
            </p>
          </div>
          <div className="mt-2">
            <h4 className="text-[#162C40] text-md md:text-xl font-semibold italic">
              Operational Excellence in Indenting House (Pharmaceutical)
            </h4>
            <p className="text-[#162C40] italic">
              Skilled in pharmaceutical raw materials sourcing and procurement,
              vendor management, quality assurance and ensuring compliance with
              industry regulations. Professional in market structure analysis,
              screening and development of new product, Demand and sales
              analysis for existing product. Well-versed with range of molecules
              and product management data base, portfolio within the industry
              both local and global market.
            </p>
          </div>
          <div className="mt-2">
            <h4 className="text-[#162C40] text-md md:text-xl font-semibold italic">
              Entrepreneurial Vision
            </h4>
            <p className="text-[#162C40] italic">
              Passionate About Contributing to the Pharmaceutical Industry by
              Delivering Reliable Solutions and Enhancing Operational
              Efficiency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MariaAbout;
