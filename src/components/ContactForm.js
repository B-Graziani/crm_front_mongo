import React from "react";
import { Link } from "react-router-dom";

// import ContactService from "../services/contact";

const ContactForm = () => {
  return (
    <div className="form">
      <h1>Formulaire</h1>
      <div className="champA">ZKGEFGZUYERFUOZ</div>
      <div className="champB">DGRETTR</div>
      <div className="champc">RTHERTYH</div>
      <div className="champD">RTHERTYHERT</div>
      <div className="retour">
        <Link to={"/contacts"}>Retour</Link>
      </div>
    </div>
  );
};

export default ContactForm;
