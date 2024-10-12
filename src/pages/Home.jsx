import React from "react";
import AnimatedSlider from "../animated-slider/AnimatedSlider";
import WelcomeText from "../components/home/WelcomeText";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurAchievements from "../components/home/OurAchievements";
import OurProducts from "../components/home/OurProducts";
import Principals from "../components/principals/Principals";
import WorkingArea from "../components/home/WorkingArea";

const Home = () => {
  return (
    <div>
      <AnimatedSlider />
      <WelcomeText />
      <WhyChooseUs />
      <OurAchievements />
      <WorkingArea />
      <OurProducts />
    </div>
  );
};

export default Home;
