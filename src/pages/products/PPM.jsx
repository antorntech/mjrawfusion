import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const PPM = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />

      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <img src="/images/ppm.jpg" alt="ppmg.jpg" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default PPM;
