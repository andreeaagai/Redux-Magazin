import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions/Actions";
import { Link } from "react-router-dom";
import "./CartComponent.css";

function CartComponent() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

 const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Coșul Meu</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Coșul este gol.</p>
          <img
            src="../images/shopping-cart.png"
            alt="Coș gol"
            className="empty-cart-img"
          />
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name} x {item.quantity}</span>
                <span>{item.price * item.quantity} RON</span>
                <button onClick={() => handleRemove(item.id)} className="remove-btn">Elimină</button>
              </li>
            ))}
          </ul>
          <h3 className="total-container">Total: {total} RON</h3>
        </>
      )}
      <Link to="/">
        <button className="back-home">Înapoi la magazin</button>
      </Link>
    </div>
  );
}

export default CartComponent;
