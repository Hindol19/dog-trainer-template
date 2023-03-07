import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_container flexColCenter">
      <div id="Contact" className="bottom ">
        <h1 className="contact_head">CONTACT US</h1>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
