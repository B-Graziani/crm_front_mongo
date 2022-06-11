import React from "react";
import Navigation from "../components/Navigation";
import Products from "../components/Products";

const AllProducts = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2">
        <Products />
      </div>

      <div className="div3"> </div>
    </div>
  );
};

export default AllProducts;
