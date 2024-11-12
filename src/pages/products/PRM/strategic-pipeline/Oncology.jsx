import React from "react";
import PageHeader from "../../../../components/PageHeader/PageHeader";

const Oncology = () => {
  return (
    <>
      <PageHeader
        title={location.pathname.split("/").pop()}
        imageUrl="/images/pageheader.jpg"
      />
      <div className="py-[20px] md:py-[80px] lg:py-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <p
            style={{
              color: "#162c40",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              Anti-cancer APIs
            </span>{" "}
            are compounds possessing anticancer properties incorporated into
            medications to prevent, treat, or manage different cancer types.
            They function via diverse mechanisms like impeding cancer cell
            growth, triggering apoptosis, or halting cancer spread. These APIs
            are pivotal in crafting cancer therapies and are indispensable
            components of cancer treatment protocols. <br /> We offer various
            types of anti-cancer APIs utilized in cancer treatments, serving as
            essential elements of cancer therapy protocols.
          </p>
          <div className="mt-12">
            <ul className="w-full md:w-1/2 mx-auto">
              <li className="flex items-center justify-between gap-12">
                <p>Nintedanib Esylate</p>
                <p>Gefitinib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Imatinib Mesylate</p>
                <p>Dasatinib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Pazopanib HCL</p>
                <p>Sorafenib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Rucaparib Camsylate</p>
                <p>Sunitinib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Temozolomide</p>
                <p>Tofacitinib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Irinotecan HCl</p>
                <p>Regorafenib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>10-Hydroxy-CPT</p>
                <p>Cabozantinib</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Topotecan HCl</p>
                <p>Ingenol Mebutate</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Erlotinib</p>
                <p>Cabazitaxel</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Nilotinib</p>
                <p>Anastrozole</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Capecitabine</p>
                <p>Cyclophosphamide</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Cytaranibe</p>
                <p>Gemcitabine</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Enzalutamide</p>
                <p>Pemetrexed Disodium</p>
              </li>
              <li className="flex items-center justify-between gap-12">
                <p>Vinorelbine Tartrate</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Oncology;
