import React from "react";
import Hero from "../components/home/Hero";
import FeaturedServices from "../components/home/FeaturedServices";
import HomeAbout from "../components/home/HomeAbout";
import HomeServices from "../components/home/HomeServices";
import DiscoverMore from "../components/home/DiscoverMore";
import HomeGrid from "../components/home/HomeGrid";
import HomeClients from "../components/home/HomeClients";
import HomeContactForm from "../components/home/HomeContactForm";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeDivisions from "../components/home/HomeDivisions";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedServices />
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
