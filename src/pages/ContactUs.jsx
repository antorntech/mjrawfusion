import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import ContactSectionOne from "../components/contact/ContactSectionOne";
import ContactMap from "../components/contact/ContactMap";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const location = useLocation();

  const path = location.pathname.split("/").pop();
  return (
    <>
      <PageHeader title="Contact Us" imageUrl={`/images/${path}.jpg`} />
      <ContactSectionOne />
      <ContactMap />
    </>
  );
};

export default ContactUs;
