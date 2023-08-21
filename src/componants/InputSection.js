import React from "react";
import DiscountInput from "./DiscountInput";
import PriceInput from "./PriceInput";
import DiscountPill from "./DiscountPill";
import DiscountedPrice from "./DiscountedPrice";

const InputSection = () => {
  const NUMBER_PILLS = 8;
  const discountPills = [];

  for (let i = 1; i < NUMBER_PILLS; i++) {
    discountPills.push(<DiscountPill key={i} />);
  }

  return (
    <div>
      <PriceInput />
      <DiscountInput />
      {discountPills}
      <DiscountedPrice />
    </div>
  );
};

export default InputSection;
