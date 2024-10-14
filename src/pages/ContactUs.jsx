import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import ContactSectionOne from "../components/contact/ContactSectionOne";
import ContactMap from "../components/contact/ContactMap";

const ContactUs = () => {
  return (
    <>
      <PageHeader title="Contact Us" imageUrl="/images/pageheader.jpg" />
      <ContactSectionOne />
      <ContactMap />
    </>
  );
};

export default ContactUs;
