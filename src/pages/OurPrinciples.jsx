import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Principals from "../components/principals/Principals";

const OurPrinciples = () => {
  return (
    <>
      <PageHeader title="Principals" />
      <div className="py-[20px] md:py-[80px] lg:py-[150px] principals-bg">
        <Principals />
      </div>
    </>
  );
};

export default OurPrinciples;
