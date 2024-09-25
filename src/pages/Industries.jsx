import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeIndustries from "../components/home/HomeIndustries";

const Industries = () => {
  return (
    <>
      <PageHeader title="Industries" />
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <HomeIndustries />
      </div>
    </>
  );
};

export default Industries;
