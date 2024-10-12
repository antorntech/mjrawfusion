import React from "react";
import CountUp from "react-countup";

const OurAchievements = () => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/our-achievements.jpg')` }}
    >
      <div className="bg-black bg-opacity-60">
        <div
          className="max-w-screen-xl mx-auto py-16 md:py-28 px-5 md:px-0"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Section - Text */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 uppercase">
                Our Achievements
              </h2>
              <p className="mb-6 leading-relaxed">
                Our profound humanitarian concerns ensure the highest quality
                products from our principals in the healthcare sector. Our
                goodwill, knowledge and experience have extended our portfolio
                remarkably within the industry both local and global markets.
              </p>
            </div>

            {/* Right Section - Statistics */}
            <div className="flex justify-center md:justify-end items-center space-x-10">
              {/* Statistic 1 */}
              <div className="text-white text-center">
                <CountUp
                  className="text-2xl md:text-3xl lg:text-5xl font-bold"
                  start={0}
                  end={10}
                  duration={5}
                  suffix=" +"
                  delay={3}
                />
                <p className="mt-2 text-md md:text-lg">Years Of Experience</p>
              </div>

              {/* Statistic 2 */}
              <div className="text-white text-center">
                <CountUp
                  className="text-2xl md:text-3xl lg:text-5xl font-bold"
                  start={0}
                  end={70}
                  duration={5}
                  suffix=" +"
                  delay={3}
                />
                <p className="mt-2 text-md md:text-lg">Principals</p>
              </div>

              {/* Statistic 3 */}
              <div className="text-white text-center">
                <CountUp
                  className="text-2xl md:text-3xl lg:text-5xl font-bold"
                  start={0}
                  end={100}
                  duration={5}
                  suffix=" +"
                  delay={3}
                />
                <p className="mt-2 text-md md:text-lg">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
