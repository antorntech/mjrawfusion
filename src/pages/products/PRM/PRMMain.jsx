import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";

const PRMMain = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <p className="text-md lg:text-lg text-[#162C40] text-center leading-relaxed">
              We have an offer of a highly effective range of active
              pharmaceutical ingredients, which are extensively used for making
              formulations. We follow all GMP certified manufacturer worldwide
              to formulate this range which are accepted across the Bangladesh
              and overseas market. In order to meet the diverse requirements of
              our clients.
            </p>
          </div>
          <div class="pt-12 space-y-4">
            {/* <!-- APIs Section --> */}
            <div>
              <h2 class="text-xl md:text-2xl font-bold text-[#162C40]">
                APIs (Active Pharmaceutical Ingredients)
              </h2>

              {/* <!-- Innovative Molecules Section --> */}
              <div class="ml-4 mt-2">
                <h3 class="font-semibold text-[#162C40]">
                  Innovative Molecules
                </h3>
                <p class="ml-16 mt-2">
                  <a href="#" class="text-blue-600 hover:underline">
                    Novel Drug Approvals | FDA
                  </a>
                </p>
              </div>

              {/* <!-- Existing Molecule Section --> */}
              <div class="ml-4 mt-4">
                <h3 class="font-semibold text-[#162C40]">Existing Molecule</h3>

                {/* <!-- Molecule Table without Borders --> */}
                <div class="mt-2 overflow-x-auto">
                  <table class="w-full md:w-1/2 ml-12">
                    <tbody>
                      <tr>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Antibiotics
                          </a>
                        </td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Anticoagulant
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Antidiabetic
                          </a>
                        </td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Antifungal
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Anti-inflammatory
                          </a>
                        </td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Bronchodilator & COPD
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Antihypertensive
                          </a>
                        </td>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Blended Pellets and Granules
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-4 py-2">
                          <a href="#" class="text-blue-600 hover:underline">
                            Antipsychotic
                          </a>
                        </td>
                        <td class="px-4 py-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* <!-- Strategic Pipeline Section --> */}
            <div class="ml-4">
              <h3 class="font-semibold text-[#162C40]">Strategic Pipeline</h3>
              <ul class="list-none ml-16 mt-2">
                <li>
                  <a href="#" class="text-blue-600 hover:underline">
                    Oncology
                  </a>
                </li>
                <li>
                  <a href="#" class="text-blue-600 hover:underline">
                    Hormone and Steroid
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Additional Categories as Links --> */}
            <div class="space-y-2 ml-4 flex flex-col">
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Excipients
              </a>
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Herbal and Plant Extract
              </a>
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Colors and Coatings
              </a>
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Flavors and Essential Oils
              </a>
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Animal Health
              </a>
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Vitamin and Minerals
              </a>
              <a href="#" class="font-semibold text-[#162C40] hover:underline">
                Nutraceuticals
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PRMMain;
