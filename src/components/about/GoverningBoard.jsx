import React from "react";
import { Link } from "react-router-dom";

const GoverningBoard = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-5 md:px-0"
    >
      <div>
        <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
          Governing Board
        </h2>
        <p>
          Our team is highly regarded in the industry for its global
          pharmaceutical.
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
                  Maria Jahan is honorable CEO and Founder of the company.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    to="#"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-facebook-f text-[#04cafb] group-hover:text-white  text-lg"></i>
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-linkedin-in text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                  <Link
                    to="#"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
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
                <h1 className="text-2xl font-semibold">S M Jobair Abedin</h1>
                <p className="text-gray-500">Director</p>
                <p className="mt-3 text-gray-700">
                  S M Jobair Abedin is honorable Director of the company.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <Link
                    to="https://www.facebook.com/s.m.jobair.abedin"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-facebook-f text-[#04cafb] group-hover:text-white  text-lg"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/s-m-jobair-abedin-a833bb256/?trk=opento_sprofile_topcard"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-linkedin-in text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                  <Link
                    to="https://x.com/jobairabedin"
                    target="_blank"
                    className="group border-2 border-[#04cafb] rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500"
                  >
                    <i class="fa-brands fa-x-twitter text-[#04cafb] group-hover:text-white text-lg"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-5">
        <div className="mt-10 w-full md:w-1/2">
          <div className="mt-2">
            <h4 className="text-[#162C40] text-md md:text-xl font-semibold italic">
              Educational Qualification
            </h4>
            <p className="text-[#162C40] italic">
              Graduate Pharmacist Registration No.: A-14321 (Registered by the
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
        <div className="mt-10 w-full md:w-1/2">
          <p className="text-[#162C40] mt-2 italic">
            S. M. Jobair Abedin holds a Master's degree in Pharmacy with a
            specialization in Technology and is a{" "}
            <strong>registered pharmacist (A-5357).</strong> He has built a
            distinguished career in the pharmaceutical industry, working across
            various sectors from quality assurance to research, healthcare and
            marketing.
          </p>
          <p className="text-[#162C40] mt-2 italic">
            His professional journey began at ACME Laboratories, where he served
            as a Quality Assurance Officer, ensuring that products met the
            highest standards of quality and compliance. He then contributed to
            significant research efforts as a Research Fellow at the Bangladesh
            Council of Scientific and Industrial Research (BCSIR).
          </p>
          <p className="text-[#162C40] mt-2 italic">
            He further developed his expertise at ONE Pharma Ltd., where he
            worked as an Executive in the Product Management Department, playing
            a pivotal role in product strategy and marketing management. He
            later transitioned to SIBL Hospital, where he provided
            patient-centered care as a Model Pharmacist, ensuring the safe and
            effective use of medications.
          </p>
          <p className="text-[#162C40] mt-2 italic">
            Currently, he serves as the Executive Director of MJ Raw Fusion
            Indenting House Business, overseeing the company’s operations in the
            pharmaceutical raw materials supply chain, driving growth, marketing
            and ensuring excellence in service delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoverningBoard;
