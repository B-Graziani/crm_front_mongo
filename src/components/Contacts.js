import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sheltered-taiga-45699.herokuapp.com/contact/contacts")
      .then((res) => setData(res.data.data));
  }, []);
  return (
    <div className="contacts">
      <h2>CONTACTS</h2>
      <ul>
        {data.map((contact, index) => (
          <li key={index}>{contact.agencyName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
