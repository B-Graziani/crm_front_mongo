import React from "react";
import Chiffres from "../components/Chiffres";
import Contact from "../components/Contacts";
import Navigation from "../components/Navigation";
import Strategies from "../components/Strategies";

const allContacts = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">
        <Contact />
      </div>
      <div className="div3">
        <Chiffres />
        <Strategies />
      </div>
    </div>
  );
};

export default allContacts;
