import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <>
      <PageHeader title="Career" />

      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-md lg:text-lg">
            We are always looking for talented and creative individuals to join
            our team. If you are interested in working with us, please apply
            through our{" "}
            <Link to="/contactus" className="text-[#039dda]">
              Contact Us
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </>
  );
};

export default Career;
