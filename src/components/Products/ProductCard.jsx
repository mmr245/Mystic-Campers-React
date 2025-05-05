// src/components/ProductCard.jsx
// initialized, by Rachel. Edited by Aj to merge the two existing ProductCard.jsx 
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Products.css';

export default function ProductCard({ product, id, name, price, imgSrc, onAddToCart }) {
  // Support both product prop and individual props
  const p = product || { id, name, price, image: imgSrc, available: true };
  const { id: productId, name: productName, price: productPrice, image, available } = p;

  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart(p);
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={productName} />
      <h3>{productName}</h3>
      <p>${productPrice.toFixed(2)}</p>
      {available === false && <span className="out-of-stock">Out of Stock</span>}
      {onAddToCart ? (
        <button
          className="add-to-cart-btn"
          onClick={handleAdd}
          disabled={!available}
        >
          {available ? 'Add to Cart' : 'Unavailable'}
        </button>
      ) : (
        <NavLink to={`/shop/${productId}`} className="btn">
          View Details
        </NavLink>
      )}
    </div>
  );
}
