import React from "react";
import Chiffres from "../components/Chiffres";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Strategies from "../components/Strategies";

const AllProducts = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">
        <Products />
      </div>

      <div className="div3">
        <Chiffres />
        <Strategies />
      </div>
    </div>
  );
};

export default AllProducts;
