import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const cart = useSelector(state => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  }
  return (
    <header className="header">
      <h1>Magazin Online</h1>
      <Link to="/cart">
        <button className="cart-btn">
          Coș ({totalItems})
        </button>
      </Link>
      <button className="dark-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
