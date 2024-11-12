import React, { useEffect } from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";
import { useLocation } from "react-router-dom";

const ExtraDetails = () => {
  const location = useLocation();

  const path = location.pathname.split("/").pop();

  const [htmlText, setHtmlText] = React.useState("");
  useEffect(() => {
    fetch(`/pdfs/${path}.html`)
      .then((res) => res.text())
      .then((data) => setHtmlText(data));
  }, []);
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
        </div>
      </div>
    </>
  );
};

export default ExtraDetails;
