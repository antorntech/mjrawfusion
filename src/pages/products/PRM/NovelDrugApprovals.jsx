import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const NovelDrugApprovals = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div class="w-full max-w-2xl mx-auto bg-white ">
            <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
              Novel Drugs
            </h1>
            <div class="grid grid-cols-2 gap-4 text-left">
              <div>
                <h2 class="font-semibold text-blue-800 mb-2">
                  Name of Compound
                </h2>
                <ul class="space-y-2 text-[#162C40]">
                  <li>Xanomeline-Trospium chloride</li>
                  <li>Sotatercept</li>
                  <li>Acoramidis</li>
                  <li>Ensifentrine</li>
                  <li>Ensifentrine</li>
                  <li>Sotatercept</li>
                  <li>Aprocitentan</li>
                  <li>Bexagliflozin</li>
                  <li>Daprodustat</li>
                  <li>Zavegepant</li>
                  <li>Rezafungin</li>
                  <li>Sotagliflozin</li>
                  <li>Ritlecitinib</li>
                </ul>
              </div>
              <div>
                <h2 class="font-semibold text-blue-800 mb-2">
                  Therapeutic Category
                </h2>
                <ul class="space-y-2 text-[#162C40]">
                  <li>Antipsychotic</li>
                  <li>Antihypertensive</li>
                  <li>Cardiomyopathy</li>
                  <li>COPD</li>
                  <li>COPD</li>
                  <li>Antihypertensive</li>
                  <li>Antihypertensive</li>
                  <li>Antidiabetic</li>
                  <li>To treat Anemia</li>
                  <li>To treat Migraine</li>
                  <li>Antifungal</li>
                  <li>To treat Heart Failure</li>
                  <li>To treat Alopecia Areata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovelDrugApprovals;
