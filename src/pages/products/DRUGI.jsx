import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const DRUGI = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />
    </>
  );
};

export default DRUGI;
