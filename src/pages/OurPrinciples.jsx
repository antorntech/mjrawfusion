import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Principals from "../components/principals/Principals";

const OurPrinciples = () => {
  return (
    <>
      <PageHeader title="Principals" />
      <div className="pb-[20px] md:pb-[80px] lg:pb-[100px] principals-bg">
        <Principals />
      </div>
    </>
  );
};

export default OurPrinciples;
