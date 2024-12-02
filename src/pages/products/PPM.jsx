import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const PPM = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/packaging-materials.jpg"
      />

      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="p-6 space-y-4 text-gray-800">
            {/* Header Text */}
            <p className="text-md lg:text-lg text-[#162C40] text-center leading-relaxed">
              We offer conventional, economic, and dependable primary packaging
              materials for pharmaceuticals <br /> from ISO 9001:2015, UKAS, US
              FDA, Mah FDA plants.
            </p>
            {/* Scroll-style container */}
            <div className="w-full md:w-3/4 mx-auto relative bg-white rounded-lg p-6 pb-10 shadow-lg">
              {/* Packaging Materials Grid */}
              <div className="grid grid-cols-3 gap-4 text-gray-700 mt-4">
                {/* Column 1 */}
                <ul className="space-y-2">
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Glass Vial
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Rubber Stopper
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Rubber Disc
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Glass Ampoules
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> PVC and PVDC Film
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> PVC Bag
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> DPI and MDI Device
                  </li>
                </ul>
                {/* Column 2 */}
                <ul className="space-y-2">
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Eye Drop Container
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Shampoo Bottles
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Airless Bottles
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Capsule Shell
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Plastic Container
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Nozzle Spray
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Tubes
                  </li>
                </ul>
                {/* Column 3 */}
                <ul className="space-y-2">
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> High Barrier Proof
                    Film for U.V., Moisture and Oxidation Protection
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Tested in easy
                    release and quick sealing on Aluminium Foils
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Alu Alu Cold
                    Forming Laminates
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Foil Laminates for
                    Effervescent
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Plasticizer-Free
                    Calendered Rigid P.V.C Film
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Alu Alu bottom
                    foil and printing foil
                  </li>
                  <li className="text-[#162C40]">
                    <span className="text-[#162C40]">◆</span> Alu Alu Flip of
                    Seal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PPM;
