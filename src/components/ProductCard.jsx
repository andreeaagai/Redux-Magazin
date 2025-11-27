import React from "react";
import {useDispatch} from "react-redux";
import { addToCart } from "../actions/Actions";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCard = () => {
        dispatch(addToCart(product));
    };

    return(
        <div className="product-card">
            <img src={product.url} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product.price">{product.price} RON</p>
            <button onClick={handleAddToCard} className="add-btn">
                Adaugă în coș
            </button>
        </div>
    );
};

export default ProductCard

