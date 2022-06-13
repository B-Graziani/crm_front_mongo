import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "./CardProduct";

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
          // <li key={index}>{product.name}</li>
          <CardProduct key={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
