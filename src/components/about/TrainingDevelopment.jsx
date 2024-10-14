import React from "react";

const TrainingDevelopment = () => {
  return (
    <div
      className="px-5 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-2 md:gap-12">
          <div className="w-full md:w-1/2 mb-5">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-3 uppercase text-[#162C40]">
              Training & Development
            </h2>
            <p className="text-[#162C40] leading-relaxed mb-5">
              We believe in continuous improvement. Our team participates in
              regular training and development programs to enhance their skills
              and knowledge. This commitment to professional growth ensures that
              we remain at the forefront of industry trends and best practices.
            </p>
            <p className="text-[#162C40] leading-relaxed">
              Our dedicated team is our great asset. Together, we strive to
              provide our clients with the highest quality and exceptional
              service. Our collaborative approach, combined with our expertise,
              positions us as a trusted partner in the pharmaceutical industry.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/training-development.jpg"
              alt="Training Development"
              className="w-full rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDevelopment;
