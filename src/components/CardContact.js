import React from "react";

const CardContact = ({ contact }) => {
  let contactId;

  return (
    <li className="card-contact">
      <h3>{contact.agencyName}</h3>
      <div className="fullname">
        <p>{contact.name}</p>
        <p>{contact.surname}</p>
      </div>
      <p>{contact.mail}</p>
      <div className="card-contact-action">
        <input
          type="button"
          value="select"
          onClick={(e) => console.log(contact._id)}
        />
      </div>
    </li>
  );
};

export default CardContact;
