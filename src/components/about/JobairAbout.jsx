import React from "react";
import PageHeader from "../PageHeader/PageHeader";

const JobairAbout = () => {
  return (
    <>
      <PageHeader title="About Jobair" />
      <div className="w-full py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <div className="w-full">
              <p className="text-[#162C40] mt-2 italic">
                S. M. Jobair Abedin holds a Master's degree in Pharmacy with a
                specialization in Technology and is a{" "}
                <strong>registered pharmacist (A-5357).</strong> He has built a
                distinguished career in the pharmaceutical industry, working
                across various sectors from quality assurance to research,
                healthcare and marketing.
              </p>
              <p className="text-[#162C40] mt-2 italic">
                His professional journey began at ACME Laboratories, where he
                served as a Quality Assurance Officer, ensuring that products
                met the highest standards of quality and compliance. He then
                contributed to significant research efforts as a Research Fellow
                at the Bangladesh Council of Scientific and Industrial Research
                (BCSIR).
              </p>
              <p className="text-[#162C40] mt-2 italic">
                He further developed his expertise at ONE Pharma Ltd., where he
                worked as an Executive in the Product Management Department,
                playing a pivotal role in product strategy and marketing
                management. He later transitioned to SIBL Hospital, where he
                provided patient-centered care as a Model Pharmacist, ensuring
                the safe and effective use of medications.
              </p>
              <p className="text-[#162C40] mt-2 italic">
                Currently, he serves as the Executive Director of MJ Raw Fusion
                Indenting House Business, overseeing the company’s operations in
                the pharmaceutical raw materials supply chain, driving growth,
                marketing and ensuring excellence in service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobairAbout;
