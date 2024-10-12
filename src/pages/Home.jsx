import React from "react";
import AnimatedSlider from "../animated-slider/AnimatedSlider";
import WelcomeText from "../components/home/WelcomeText";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurAchievements from "../components/home/OurAchievements";
import OurProducts from "../components/home/OurProducts";
import Principals from "../components/principals/Principals";

const Home = () => {
  return (
    <div>
      <AnimatedSlider />
      <WelcomeText />
      <WhyChooseUs />
      <OurAchievements />
      <OurProducts />
      <div className="pb-[40px] md:pb-[100px] lg:pb-[150px]">
        <div className="max-w-screen-xl mx-auto pb-[20px] md:pb-[50px] lg:pb-[70px]">
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="mb-3 md:mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 uppercase">
              Our Principals
            </h2>
            <div className="flex items-center justify-center">
              <div className="w-[60px] h-[1px] bg-gray-300"></div>
              <div className="w-[50px] h-[5px] bg-[#04cafb]"></div>
              <div className="w-[60px] h-[1px] bg-gray-300"></div>
            </div>
          </div>
        </div>
        <Principals />
      </div>
    </div>
  );
};

export default Home;
