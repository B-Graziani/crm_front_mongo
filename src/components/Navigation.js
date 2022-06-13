import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to={"/"}>
          <li>LOGO-CRM</li>
        </NavLink>
        <NavLink to={"/contacts"}>
          <li>CONTACT</li>
        </NavLink>
        <NavLink to={"/products"}>
          <li>PRODUCT</li>
        </NavLink>
        <NavLink to={"/documents"}>
          <li>DOCUMENT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
