import React from "react";
import Documents from "../components/Documents";
import Navigation from "../components/Navigation";

const AllDocuments = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">
        <Documents />
      </div>
      <div className="div3"> </div>
    </div>
  );
};

export default AllDocuments;
