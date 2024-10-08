import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import OurPrinciples from "../pages/OurPrinciples";
import OurCustomers from "../pages/OurCustomers";
import NewsLetter from "../pages/NewsLetter";
import Career from "../pages/Career";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/principals" element={<OurPrinciples />} />
        <Route path="/customers" element={<OurCustomers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/news-letter" element={<NewsLetter />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
