import React from "react";

const PriceInput = () => {
  return (
    <div className="product">
      <label htmlFor="price">Prix initial </label>
      <input type="text" name="price" id="price" placeholder="10€" />
    </div>
  );
};

export default PriceInput;
