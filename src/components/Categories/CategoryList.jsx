import React from 'react';
import '../Products/Products.css'; //

export default function CategoryList({ categories, onSelectCategory }) {
 const handleClick = (categoryName) => {
   onSelectCategory(categoryName);
 };


 return (
   <div className="product-list">
     {categories.map((category) => (
       <div
         key={category.id}
         className="product-card"
         onClick={() => handleClick(category.name.toLowerCase())}
         style={{ cursor: 'pointer' }}
       >
         <img src={category.image} alt={category.name} />
         <h3>{category.name}</h3>
       </div>
     ))}
   </div>
 );
}
