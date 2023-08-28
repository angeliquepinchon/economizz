import React, { useState } from "react";
import DiscountInput from "./DiscountInput";
import PriceInput from "./PriceInput";
import DiscountPill from "./DiscountPill";
import DiscountedPrice from "./DiscountedPrice";

const InputSection = () => {
  const NUMBER_PILLS = 8;
  const discountPills = [];
  const [selectedDiscount, setSelectedDiscount] = useState(0);

  const handleDiscounteClick = (percentage) => {
    setSelectedDiscount(percentage);
    console.log(percentage);
  };

  for (let i = 1; i <= NUMBER_PILLS; i++) {
    discountPills.push(
      <DiscountPill key={i} index={i * 10} onClick={handleDiscounteClick} />
    );
  }

  return (
    <div>
      <PriceInput />
      <DiscountInput selectedDiscount={selectedDiscount} />
      {discountPills}
      <DiscountedPrice selectedDiscount={selectedDiscount} />
    </div>
  );
};

export default InputSection;
