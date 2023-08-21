import React from "react";

const DiscountedPrice = () => {
  return (
    <div>
      <label htmlFor="discounted-price">Prix soldé</label>
      <input
        type="text"
        name="discounted-price"
        id="discounted-price"
        readOnly
      />
    </div>
  );
};

export default DiscountedPrice;
