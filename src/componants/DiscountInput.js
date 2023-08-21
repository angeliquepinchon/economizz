import React from "react";

const DiscountInput = () => {
  return (
    <div className="product">
      <label htmlFor="discount">Solde</label>
      <input type="text" name="discount" id="discount" placeholder="20%" />
    </div>
  );
};

export default DiscountInput;
