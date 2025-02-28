import React from "react";
import PageHeader from "../../../components/PageHeader/PageHeader";
import { Link } from "react-router-dom";

const PRMMain = () => {
  const tableData = [
    { id: 1, name: "Antibiotics", link: "/existing-molecule/antibiotics" },
    {
      id: 1,
      name: "Antidepressant",
      link: "/existing-molecule/antidepressant",
    },
    { id: 2, name: "Antiviral", link: "/existing-molecule/antiviral" },
    { id: 2, name: "Anticoagulant", link: "/existing-molecule/anticoagulant" },
    { id: 3, name: "Antidiabetic", link: "/existing-molecule/antidiabetic" },
    { id: 4, name: "Antifungal", link: "/existing-molecule/antifungal" },
    {
      id: 5,
      name: "Anti-inflammatory",
      link: "/existing-molecule/anti-inflammatory",
    },
    {
      id: 6,
      name: "Bronchodilator & COPD",
      link: "/existing-molecule/bronchodilator-and-copd",
    },
    {
      id: 7,
      name: "Antihypertensive",
      link: "/existing-molecule/antihypertensive",
    },
    {
      id: 8,
      name: "Blended Pellets and Granules",
      link: "/existing-molecule/blended-pellets-and-granules",
    },
    { id: 9, name: "Antipsychotic", link: "/existing-molecule/antipsychotic" },
  ];

  const extraroutes = [
    { name: "Excipients", path: "/excipients" },
    { name: "Herbal and Plant Extract", path: "/herbal-and-plant-extract" },
    { name: "Colors and Coatings", path: "/colors-and-coatings" },
    { name: "Flavors and Essential Oils", path: "/flavors-and-essential-oils" },
    { name: "Animal Health", path: "/animal-health" },
    { name: "Vitamin and Minerals", path: "/vitamin-and-minerals" },
    { name: "Nutraceuticals", path: "/nutraceuticals" },
  ];
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/prm-main.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div style={{ padding: "5px" }}>
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
            <div style={{ padding: "5px" }}>
              <h2 class="text-xl md:text-2xl font-bold text-[#162C40]">
                APIs (Active Pharmaceutical Ingredients)
              </h2>

              {/* <!-- Innovative Molecules Section --> */}
              <div class="ml-4 mt-2">
                <h3 class="font-semibold text-[#162C40]">
                  Innovative Molecules
                </h3>
                <p class="ml-16 mt-2">
                  <Link
                    to="/novel-drug-approvals"
                    class="text-blue-600 hover:underline"
                  >
                    Novel Drug Approvals | FDA
                  </Link>
                </p>
              </div>

              {/* <!-- Existing Molecule Section --> */}
              <div class="ml-4 mt-4">
                <h3 class="font-semibold text-[#162C40]">Existing Molecule</h3>

                {/* <!-- Molecule Table without Borders --> */}
                <div class="mt-2 overflow-x-auto">
                  <table class="w-full md:w-1/2 ml-12">
                    <tbody>
                      {tableData.map((item, index) => {
                        // Check if the index is even to create rows in pairs
                        if (index % 2 === 0) {
                          return (
                            <tr key={item.id}>
                              <td className="px-4 py-2">
                                <Link
                                  to={tableData[index].link}
                                  className="text-blue-600 hover:underline"
                                >
                                  {tableData[index].name}
                                </Link>
                              </td>
                              <td className="px-4 py-2">
                                {tableData[index + 1] ? (
                                  <Link
                                    to={tableData[index + 1].link}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {tableData[index + 1].name}
                                  </Link>
                                ) : null}
                              </td>
                            </tr>
                          );
                        }
                        return null;
                      })}
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
                  <Link to="/oncology" class="text-blue-600 hover:underline">
                    Oncology
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hormone-and-steroid"
                    class="text-blue-600 hover:underline"
                  >
                    Hormone and Steroid
                  </Link>
                </li>
              </ul>
            </div>

            {/* <!-- Additional Categories as Links --> */}
            <div className="space-y-2 ml-4 flex flex-col">
              {extraroutes.map((route, index) => (
                <Link
                  key={index}
                  to={route.path}
                  className="font-semibold text-[#162C40] hover:underline"
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PRMMain;
