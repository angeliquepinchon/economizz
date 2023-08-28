import React from "react";

const DiscountPill = ({ index, onClick }) => {
  return (
    <div className="pill" onClick={() => onClick(index)}>
      <span>{index}%</span>
    </div>
  );
};

export default DiscountPill;
