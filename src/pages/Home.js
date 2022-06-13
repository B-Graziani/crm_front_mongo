import React from "react";
import Chiffres from "../components/Chiffres";
import Navigation from "../components/Navigation";
import Strategies from "../components/Strategies";

const Home = () => {
  return (
    <div className="container">
      <div className="div1">
        <Navigation />
      </div>
      <div className="div2"> Home Content</div>
      <div className="div3">
        <Chiffres />
        <Strategies />
      </div>
    </div>
  );
};

export default Home;
