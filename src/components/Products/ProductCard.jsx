import React from 'react';
import './Products.css'; //

export default function ProductCard({ product, onAddToCart }) {
 const handleAdd = () => {
   onAddToCart(product);
 };


 return (
   <div className="product-card">
     <img src={product.image} alt={product.name} />
     <h3>{product.name}</h3>
     <p>${product.price.toFixed(2)}</p>
     {!product.available && <span className="out-of-stock">Out of Stock</span>}
     <button
       className="add-to-cart-btn"
       onClick={handleAdd}
       disabled={!product.available}
     >
       {product.available ? 'Add to Cart' : 'Unavailable'}
     </button>
   </div>
 );
}
