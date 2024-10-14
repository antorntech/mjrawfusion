import React from "react";

const OurTeamLatest = () => {
  const teams = [
    {
      title: "Team Leader/Manager",
      responsibilities: [
        "Oversee Operations",
        "Strategic Planning",
        "Team Management",
      ],
      skills: ["Leadership", "Communication", "Industry Knowledge"],
    },
    {
      title: "Technical Expert",
      responsibilities: [
        "Ensure compliance with regulatory standards",
        "Conduct Quality Checks",
        "Manage Documentation",
      ],
      skills: [
        "Attention to detail",
        "Knowledge of Regulations",
        "Analytical Skills",
      ],
    },
    {
      title: "Business Development Expert",
      responsibilities: [
        "Product Knowledge",
        "Identify and Sourcing of Raw Materials",
        "Negotiate with Suppliers",
        "Manage Contracts",
      ],
      skills: [
        "Communication skills",
        "Negotiation and Analytical Skills",
        "Supplier Management",
        "Strategic Thinking",
      ],
    },
    {
      title: "Regulatory Affairs Specialist",
      responsibilities: [
        "Monitor regulatory changes",
        "Ensure compliance of products",
        "Manage submissions to regulatory bodies",
      ],
      skills: ["Regulatory knowledge", "Attention to detail", "Communication"],
    },
    {
      title: "Sales and Marketing Representatives",
      responsibilities: [
        "Develop and implement marketing strategies",
        "Communicate with clients",
        "Manage customer relationships",
      ],
      skills: ["Sales expertise", "Communication", "Market analysis"],
    },
    {
      title: "Logistics Coordinator",
      responsibilities: [
        "Manage the supply chain",
        "Coordinate shipments",
        "Ensure timely delivery of materials",
      ],
      skills: [
        "Organizational skills",
        "Problem-solving",
        "Knowledge of logistics",
      ],
    },
    {
      title: "Research and Development Division ",
      responsibilities: [
        "Compound Selection and Evaluation",
        "Principal Development",
        "Innovation process and new product ventures",
      ],
      skills: [
        "Problem-solving Abilities",
        "Project Management",
        "Attention to Detail",
      ],
    },
  ];
  return (
    <div
      className="px-5 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-5">
          <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
            Our Team
          </h2>
          <p className="text-[#162C40] leading-relaxed">
            MJ Raw Fusion team is highly regarded in the industry for its global
            pharmaceutical expertise. Our team is the backbone of our success.
            We pride ourselves on having a diverse group of highly skilled
            professionals dedicated to delivering exceptional service and
            quality products to our client. Here’s a look at the key components
            of our team, their responsibilities and skills:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
          {teams.map((team, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 shadow-md p-5 rounded-md"
            >
              <div className="w-full">
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
                  {team.title}
                </h2>
              </div>
              <div className="w-full md:w-2/3">
                <ul className="text-[#162C40] leading-relaxed">
                  <li className="mb-2 text-md md:text-xl font-semibold">
                    Responsibilities:
                  </li>
                  {team.responsibilities.map((responsibility, index) => (
                    <li key={index}>
                      <i class="fa-solid fa-angles-right me-1"></i>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-2/3">
                <ul className="text-[#162C40] leading-relaxed">
                  <li className="mb-2 mt-5 text-md md:text-xl font-semibold">
                    Skills:
                  </li>
                  {team.skills.map((skill, index) => (
                    <li key={index}>
                      <i class="fa-solid fa-angles-right me-1"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeamLatest;
