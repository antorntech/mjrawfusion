import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";
import DiscoverMore from "../components/home/DiscoverMore";
import HomeGrid from "../components/home/HomeGrid";
import HomeClients from "../components/home/HomeClients";
import HomeContactForm from "../components/home/HomeContactForm";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeDivisions from "../components/home/HomeDivisions";
import AnimatedSlider from "../animated-slider/AnimatedSlider";
import WelcomeText from "../components/home/WelcomeText";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurAchievements from "../components/home/OurAchievements";

const Home = () => {
  return (
    <div>
      <AnimatedSlider />
      <WelcomeText />
      <WhyChooseUs />
      <OurAchievements />
      <HomeAbout />
      <HomeServices />
      <DiscoverMore />
      <HomeGrid />
      <HomeIndustries />
      <HomeDivisions />
      <HomeClients />
      <HomeContactForm />
    </div>
  );
};

export default Home;
