import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const LIE = () => {
  const [htmlText, setHtmlText] = React.useState("");
  useEffect(() => {
    fetch("/pdfs/labi.html")
      .then((res) => res.text())
      .then((data) => setHtmlText(data));
  }, []);
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/lab-instruments.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
        </div>
      </div>
    </>
  );
};

export default LIE;
