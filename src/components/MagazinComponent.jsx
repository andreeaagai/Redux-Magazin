import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/Actions'; 
import { Link } from 'react-router-dom'; 
import './MagazinComponent.css'; 

const MagazinComponent = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');

  const handleAddToCart = () => {
    const newProduct = {
      id: Date.now(), // Folosim un id unic pentru fiecare produs
      name: productName,
      price: Math.floor(Math.random() * 100), 
    };
    dispatch(addToCart(newProduct)); // Trimitem acțiunea de adăugare în coș
    setProductName(''); // Resetăm câmpul de input după adăugarea produsului
  };

  return (
    <div className="magazin-container">
    <Link to="/cart" className="cart-link">
        <button className="cart-btn">Coșul Meu</button>
    </Link>
      <h1>Magazin Online</h1>
      <div className="add-product-container">
        <input
          type="text"
          placeholder="Nume produs"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="product-input"
        />
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Adaugă în coș
        </button>
      </div>
    </div>
  );
};

export default MagazinComponent;
