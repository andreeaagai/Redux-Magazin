import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/Actions";
import { Link } from "react-router-dom";
import "./CartComponent.css";

function CartComponent() {
  const cart = useSelector((state) => state.cart.cart || []);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + (product.price || 0), 0);
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Coșul tău este gol!</h2>
          <p>Adaugă produse pentru a le vedea aici.</p>
          <img
            src="../images/shopping-cart.png"
            alt="Coș gol"
            className="empty-cart-img"
          />
        </div>
      ) : (
        <>
          <h2>Produsele din Coș</h2>
          <ul className="cart-list">
            {cart.map((item) => (
              <li className="cart-item" key={item.id}>
                <span>{item.name}</span>
                <span>{item.price} RON</span>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Elimină
                </button>
              </li>
            ))}
          </ul>
          <div className="total-container">
            <span>Total:</span>
            <span>{calculateTotal} RON</span>
          </div>
        </>
      )}
      <Link to="/">
        <button className="cart-btn">Înapoi la magazin</button>
      </Link>
    </div>
  );
}

export default CartComponent;
