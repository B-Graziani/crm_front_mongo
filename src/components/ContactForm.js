import React from "react";
import { Link } from "react-router-dom";
// import Contact from "../models/contact";

const ContactForm = () => {
  return (
    <div className="form">
      <h1>Formulaire</h1>
      <div className="form-group">
        <label htmlFor="agencyName">AgencyName</label>
        <input id="agencyName" type="text" className="form-control"></input>
      </div>
      <div className="form-group">
        <label htmlFor="name">name</label>
        <input id="name" type="text" className="form-control"></input>
      </div>
      <div className="form-group">
        <label htmlFor="surname">Surname</label>
        <input id="surname" type="text" className="form-control"></input>
      </div>
      <div className="form-group">
        <label htmlFor="mail">Mail</label>
        <input id="mail" type="text" className="form-control"></input>
      </div>
      <div className="card-action center">
        {/* Submit button */}
        <button type="submit" className="btn">
          Valider
        </button>
      </div>
      <div className="retour">
        <Link to={"/contacts"}>Retour</Link>
      </div>
    </div>
  );
};

export default ContactForm;
