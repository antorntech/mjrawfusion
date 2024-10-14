import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import Principals from "../components/principals/Principals";

const OurPrinciples = () => {
  return (
    <>
      <PageHeader title="Principals" imageUrl="/images/pageheader.jpg" />
      <div className="pb-[150px] md:pb-[100px] principals-bg">
        <Principals />
      </div>
    </>
  );
};

export default OurPrinciples;
