import React from "react";
import Contact from "../components/Contacts";
import Navigation from "../components/Navigation";

const allContacts = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">
        <Contact />
      </div>
      <div className="div3"> </div>
    </div>
  );
};

export default allContacts;
