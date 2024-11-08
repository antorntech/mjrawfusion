import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const RSCRS = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />
    </>
  );
};

export default RSCRS;
