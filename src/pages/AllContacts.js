import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="add-element" to={"/contact"}>
          ADD Contact
        </Link>
      </div>
      <div className="div3">
        <Chiffres />
        <Strategies />
      </div>
    </div>
  );
};

export default allContacts;
