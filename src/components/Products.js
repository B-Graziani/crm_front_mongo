import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sheltered-taiga-45699.herokuapp.com/product/products")
      .then((res) => setData(res.data.data));
  }, []);

  return (
    <div className="products">
      <h2>PRODUCTS</h2>
      <ul>
        {data.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
