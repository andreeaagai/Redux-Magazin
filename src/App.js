import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MagazinComponent from './components/MagazinComponent.jsx';
import CartComponent from './components/CartComponent.jsx';
import './App.css';

function App() {
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
