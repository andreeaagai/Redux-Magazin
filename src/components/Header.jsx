import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const cart = useSelector(state => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Magazin Alimentar</h1>
      <Link to="/cart">
        <button className="cart-btn">
          Coș ({totalItems})
        </button>
      </Link>
    </header>
  );
};

export default Header;
