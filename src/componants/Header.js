import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1>Economizz</h1>
      <span>
        <Link to="/panier">
          <FaShoppingCart />
        </Link>
      </span>
    </div>
  );
};

export default Header;
