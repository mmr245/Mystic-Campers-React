import React from 'react';
import ProductCard from './ProductCard'; //


import './Products.css'; //

export default function ProductGrid({ products, onAddToCart }) {
 return (
   <div className="product-list">
     {products.map((product) => (
       <ProductCard
         key={product.id}
         product={product}
         onAddToCart={onAddToCart}
       />
     ))}
   </div>
 );
}
