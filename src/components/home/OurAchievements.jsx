import React from "react";
import CountUp from "react-countup";

const OurAchievements = () => {
  return (
    <section
      className="relative bg-cover bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/our-achievements.jpg')` }}
    >
      <div className="bg-black bg-opacity-60">
        <div className="max-w-screen-xl mx-auto py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Section - Text */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6 uppercase">
                Our Achievements
              </h2>
              <p className="mb-6 leading-relaxed">
                MJRAWFUSION has been associated with world-renowned APIs &
                Excipients manufacturers since its establishment. Our profound
                humanitarian concerns ensure the highest quality products from
                our principals in the healthcare sector. We share a significant
                alliance with our principals which helps them to learn about the
                healthcare sector in Bangladesh. Our goodwill, knowledge, and
                experience have extended our portfolio remarkably within the
                industry both local and global markets.
              </p>
            </div>

            {/* Right Section - Statistics */}
            <div className="flex justify-center md:justify-end items-center space-x-10">
              {/* Statistic 1 */}
              <div className="text-white text-center">
                <CountUp
                  className="text-5xl font-bold"
                  start={0}
                  end={10}
                  duration={5}
                  suffix=" +"
                  delay={3}
                />
                <p className="mt-2 text-lg">Years Of Experience</p>
              </div>

              {/* Statistic 2 */}
              <div className="text-white text-center">
                <CountUp
                  className="text-5xl font-bold"
                  start={0}
                  end={70}
                  duration={5}
                  suffix=" +"
                  delay={3}
                />
                <p className="mt-2 text-lg">Principals</p>
              </div>

              {/* Statistic 3 */}
              <div className="text-white text-center">
                <CountUp
                  className="text-5xl font-bold"
                  start={0}
                  end={100}
                  duration={5}
                  suffix=" +"
                  delay={3}
                />
                <p className="mt-2 text-lg">Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
