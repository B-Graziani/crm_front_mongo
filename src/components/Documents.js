import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDocument from "./CardDocument";

const Documents = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sheltered-taiga-45699.herokuapp.com/document/documents")
      .then((res) => setData(res.data.data));
  }, []);
  return (
    <div className="documents">
      <h2>DOCUMENTS</h2>
      <ul>
        {data.map((document, index) => (
          // <li key={index}>
          //   {document.type}, {document.contactId.agencyName}
          // </li>
          <CardDocument key={index} document={document} />
        ))}
      </ul>
    </div>
  );
};

export default Documents;
