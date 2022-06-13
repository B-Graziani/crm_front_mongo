import React from "react";
import Chiffres from "../components/Chiffres";
// import Contact from "../components/Contacts";
import Navigation from "../components/Navigation";
import Strategies from "../components/Strategies";
import ContactForm from "../components/ContactForm";

const AddContact = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">
        <h2>Ajouter un contact</h2>
        <ContactForm />
      </div>

      <div className="div3">
        <Chiffres />
        <Strategies />
      </div>
    </div>
  );
};

export default AddContact;
