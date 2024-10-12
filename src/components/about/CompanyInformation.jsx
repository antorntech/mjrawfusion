import React from "react";

const CompanyInformation = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto px-5 md:px-0 text-[#162C40]"
    >
      <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
        Company Information
      </h2>
      <section style={{ marginBottom: "20px" }}>
        <h2 className="text-xl font-semibold mb-2">MJ Raw Fusion</h2>
        <p>
          <strong>Registered Address:</strong> 158/1, Rayerbazar (East),
          Hazaribagh, Dhaka -1209, Bangladesh.
        </p>
        <p>
          <strong>Tax Identification No. (E-TIN):</strong> 449804324049/Taxes
          Circle-253
        </p>
        <p>
          <strong>
            Bangladesh Indenting Agents' Association (Membership Certificate):
          </strong>
          Book No. 163, Serial No. 16286, Registration Sl. No. 2024/M12
        </p>
        <p>
          <strong>E-mail address:</strong> info@mjrf.com
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href="https://www.mjrawfusion.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.mjrawfusion.com
          </a>
        </p>
      </section>

      <section>
        <h3>Bank Details:</h3>
        <p>
          <strong>Bank A/C Name:</strong> MJ RAW FUSION
        </p>
        <p>
          <strong>A/C Number:</strong> 15039……..9001
        </p>
        <p>
          <strong>Bank Name:</strong> The City Bank PLC
        </p>
        <p>
          <strong>Branch Name:</strong> Kawran Bazar
        </p>
        <p>
          <strong>SWIFT CODE:</strong> [Enter SWIFT Code]
        </p>
        <p>
          <strong>Bank Address:</strong> UTC Building, 8 Panthapath, Kawran
          Bazar, Tejgaon, Dhaka-1215, Bangladesh.
        </p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h3>COMMISSION (FOREIGN REMITTANCE) COLLECTION:</h3>
        <p>MUST BE DONE ONLY BY USING THE BANK ACCOUNT OF MJ RAW FUSION.</p>
      </section>

      <section style={{ marginTop: "10px" }}>
        <p>
          All business communications of MJ RAW FUSION with the customers and
          principals will be done by using the official contact information.
        </p>
      </section>
    </div>
  );
};

export default CompanyInformation;
