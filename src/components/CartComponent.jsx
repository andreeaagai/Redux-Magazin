import React, { useEffect } from "react";
import BackToTopButton from "./BackToTopButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, removeFromCart } from "../actions/Actions";
import { Link } from "react-router-dom";
import "./CartComponent.css";

function CartComponent() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleRemove = (_id) => {
    dispatch(removeFromCart(_id));
  };

 const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

 const formatter = new Intl.NumberFormat("ro-RO", {
  style: "currency",
  currency: "RON",
  minimumFractionDigits: 2,
 });

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
            <li key={item._id} className="cart-item">
              <span>{item.name} x {item.quantity}</span>
              <span>{formatter.format(item.price * item.quantity)}</span>
              <button onClick={() => handleRemove(item._id)} className="remove-btn">
                Elimină
              </button>
            </li>
          ))}

          </ul>
          <h3 className="total-container">Total: {formatter.format(total)}</h3>
        </>
      )}
      <Link to="/">
        <button className="back-home">Înapoi la magazin</button>
      </Link>
      <BackToTopButton />
    </div>
  );
}

export default CartComponent;
