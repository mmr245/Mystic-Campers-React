// src/components/ProductCard.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCard({ id, name, price, imgSrc }) {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <NavLink to={`/shop/${id}`} className="btn">
        View Details
      </NavLink>
    </div>
  );
}
