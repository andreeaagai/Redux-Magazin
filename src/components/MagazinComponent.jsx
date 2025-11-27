import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import Header from './Header';
import './MagazinComponent.css'; 

const categories = [
  "Toate Produsele",
  "Lactate",
  "Ouă",
  "Fructe",
  "Legume",
  "Pâine",
  "Pasta & Orez",
  "Carne",
  "Pește",
  "Cafea & Ceai",
];

const MagazinComponent = () => {
  const [activeCategory, setActiveCategory] = useState("Toate Produsele");

  const filteredProducts =
    activeCategory === "Toate Produsele"
      ? products
      : products.filter((p) => p.category === activeCategory);



      return (
        <>
          <Header />
          <div className="categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      );
};

export default MagazinComponent;
