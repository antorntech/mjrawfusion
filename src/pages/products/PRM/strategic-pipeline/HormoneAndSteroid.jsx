import React from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";

const HormoneAndSteroid = () => {
  const corticosteroids = [
    "Betamethasone Acetate",
    "Fluorometholone",
    "Hydrocortisone Acetate",
    "Methylprednisolone Acetate",
    "Prednisolone Acetate",
    "Triamcinolone Acetonide",
  ];

  const medications = [
    "Abiraterone Acetate",
    "Beclometasone Dipropionate",
    "Betamethasone",
    "Betamethasone Dipropionate",
    "Betamethasone Sodium Phosphate",
    "Betamethasone Valerate",
    "Budesonide",
    "Clobetasone Butyrate",
    "Clobetasol Propionate",
    "Cloprednol",
    "Clocortolone Pivalate",
    "Deflazacort",
    "Desonide",
    "Desoximethasone",
    "Dexamethasone",
    "Dexamethasone Sodium Phosphate",
    "Difluprednate",
  ];

  const corticosteroidMedications = [
    "Fluocinolone Acetonide",
    "Flumethasone",
    "Flurandrenolide",
    "Fluticasone Furoate",
    "Fluticasone Propionate",
    "Halobetasol Propionate",
    "Halometasone Monohydrate",
    "Hydrocortisone",
    "Hydrocortisone Butyrate",
    "Hydrocortisone Hemisuccinate",
    "Hydrocortisone Sodium Succinate (Buffered 5%)",
    "Hydrocortisone Valerate",
    "Methyl prednisolone",
    "Methylprednisolone Aceponate",
    "Methylprednisolone Hemisuccinate",
    "Methylprednisolone Sodium Succinate (Buffered 3%)",
    "Mometasone Furoate",
    "Mometasone Furoate Monohydrate",
    "Prednisone",
    "Prednisolone",
    "Prednisolone Hemisuccinate",
    "Prednisolone Sodium Phosphate",
    "Clascoterone",
  ];

  const hormoneMedications = [
    "Boldenone",
    "Conjugated Estrogens",
    "Desogestrel",
    "Dihydrotestosterone (Stanolone)",
    "Drospirenone",
    "Esterified Estrogens",
    "Estradiol",
    "Estradiol Hemihydrate",
    "Ethinyl Estradiol",
    "Ethisterone",
    "Ethynodiol Diacetate",
    "Gestodene",
    "Hydroxyprogesterone Caproate",
  ];

  const additionalHormoneMedications = [
    "Levonorgestrel",
    "Nandrolone",
    "Nandrolone Decanoate",
    "Nandrolone Phenyl Propionate",
    "Norethindrone Base & Acetate",
    "Progesterone",
    "Testosterone",
    "Testosterone Cypionate",
    "Testosterone Decanoate",
    "Testosterone Enanthate",
    "Testosterone Isocaproate",
    "Testosterone Phenylpropionate",
    "Testosterone Propionate",
    "Testosterone Undecanoate",
    "Mifepristone",
  ];

  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/hormone-and-steroid.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-center">
            Several people throughout the world do not have access to good
            health as they can&#39;t afford expensive medicines. We address this
            urgent need by offering expensive innovative medicines—at a fraction
            of the cost for all of our customers. Cortico-Steroids, both Sterile
            &amp; Non-Sterile, and Steroid Hormone APIs are the most significant
            parts of our business portfolio, making our products valued across
            the major therapeutic areas.
          </p>

          <h2 className="text-2xl md:text-3xl mt-5 md:mt-10 font-bold text-center text-[#162c40]">
            Cortico-Steroids API
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 md:mt-8">
            <div className="w-full md:col-span-1">
              <h2 className="text-lg md:text-xl font-bold text-center text-[#2c78be]">
                Sterile
              </h2>
              <ul>
                {corticosteroids.map((item, index) => (
                  <li key={index} className="my-2 text-center">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:col-span-2">
              <h2 className="text-lg md:text-xl font-bold text-center text-[#2c78be]">
                Non-Sterile
              </h2>
              <div className="flex flex-col text-center md:flex-row md:justify-between">
                <ul>
                  {medications.map((item, index) => (
                    <li key={index} className="my-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <ul>
                  {corticosteroidMedications.map((item, index) => (
                    <li key={index} className="my-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#162c40] mt-5">
            Hormones (Steroid) API
          </h2>
          <div className="w-full md:w-1/2 mx-auto mt-5 flex flex-col text-center md:flex-row md:justify-between">
            <ul>
              {hormoneMedications?.map((item, index) => (
                <li key={index} className="my-2">
                  {item}
                </li>
              ))}
            </ul>
            <ul>
              {additionalHormoneMedications?.map((item, index) => (
                <li key={index} className="my-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HormoneAndSteroid;
