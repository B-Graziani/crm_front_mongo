import React from "react";

const CardDocument = ({ document }) => {
  return (
    <li className="card-document">
      <h2>{document.type}</h2>
      <h2>{document.contactId.agencyName}</h2>
      <p>{document.status}</p>
    </li>
  );
};

export default CardDocument;
