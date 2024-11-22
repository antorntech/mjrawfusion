import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const ANC = () => {
  const [htmlText, setHtmlText] = React.useState("");
  useEffect(() => {
    fetch("/pdfs/chemicalregent.html")
      .then((res) => res.text())
      .then((data) => setHtmlText(data));
  }, []);
  return (
    <>
      <PageHeader
        title={"Pharmaceutical Raw Material (RM)"}
        imageUrl="/images/analytical-chemical.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div dangerouslySetInnerHTML={{ __html: htmlText }}></div>
        </div>
      </div>
    </>
  );
};

export default ANC;
