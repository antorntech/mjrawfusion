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
import ProductDetails from "../pages/ProductDetails";
import MariaAbout from "../components/about/MariaAbout";
import JobairAbout from "../components/about/JobairAbout";
import Products from "../pages/products/Products";
import PRMMain from "../pages/products/PRM/PRMMain";
import PPM from "../pages/products/PPM";
import RSCRS from "../pages/products/RSCRS";
import DRUGI from "../pages/products/DRUGI";
import ANC from "../pages/products/ANC";
import LIE from "../pages/products/LIE";
import ServiceDetails from "../pages/services/ServiceDetails";
import NovelDrugApprovals from "../pages/products/PRM/NovelDrugApprovals";
import ExistingMoleculeDetails from "../pages/products/PRM/existing-molecule/ExistingMoleculeDetails";
import Oncology from "../pages/products/PRM/strategic-pipeline/Oncology";
import HormoneAndSteroid from "../pages/products/PRM/strategic-pipeline/HormoneAndSteroid";
import ExtraDetails from "../pages/products/PRM/extra/ExtraDetails";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-maria" element={<MariaAbout />} />
        <Route path="/about-jobair" element={<JobairAbout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/Raw-Material-(RM)" element={<PRMMain />} />
        <Route path="/products/Packaging-Material-(PM)" element={<PPM />} />
        <Route path="/products/Reference-Standard-(RS)" element={<RSCRS />} />
        <Route path="/products/drug-intermediate" element={<DRUGI />} />
        <Route path="/products/analytical-chemical" element={<ANC />} />
        <Route path="/products/lab-instruments" element={<LIE />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/principals" element={<OurPrinciples />} />
        <Route path="/customers" element={<OurCustomers />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
        <Route path="/novel-drug-approvals" element={<NovelDrugApprovals />} />
        <Route
          path="/existing-molecule/:slug"
          element={<ExistingMoleculeDetails />}
        />
        <Route path="/news-letter" element={<NewsLetter />} />
        <Route path="/oncology" element={<Oncology />} />
        <Route path="/hormone-and-steroid" element={<HormoneAndSteroid />} />
        <Route path="/career" element={<Career />} />
        <Route path="/:slug" element={<ExtraDetails />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
