import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import HomeDivisions from "../components/home/HomeDivisions";

const Divisions = () => {
  return (
    <>
      <PageHeader title="Divisions" imageUrl="/images/pageheader.jpg" />
      <div className="pt-[20px] md:pt-[80px] lg:pt-[100px]">
        <HomeDivisions />
      </div>
    </>
  );
};

export default Divisions;
