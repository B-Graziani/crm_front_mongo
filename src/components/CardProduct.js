import React from "react";

const CardProduct = ({ product }) => {
  return (
    <li className="card-product">
      <div className="default-image">image-default</div>
      <div className="card-product-infos">
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
      </div>
      <div className="card-product-actions">
        <div className="update-delete">
          <h3>update</h3>
          <h3>delete</h3>
        </div>
        <div className="add">
          <h2>AJOUTER</h2>
        </div>
      </div>
    </li>
  );
};

export default CardProduct;
