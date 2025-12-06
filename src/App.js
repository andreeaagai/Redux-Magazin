import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MagazinComponent from './components/MagazinComponent.jsx';
import CartComponent from './components/CartComponent.jsx';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./actions/Actions.jsx";
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MagazinComponent />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
    </Router> 
  );
}

export default App;
