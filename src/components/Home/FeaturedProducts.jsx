import React from 'react';

const products = [
  {
    id: 1,
    name: 'Camper Tent',
    image: '../../assets/images/products/tent.jpg',
    description: 'A durable tent for all weather conditions.',
  },
  {
    id: 2,
    name: 'Camping Stove',
    image: '../../assets/images/products/stove.jpg',
    description: 'Portable stove for cooking outdoors.',
  },
  {
    id: 3,
    name: 'Sleeping Bag',
    image: '../../assets/images/products/sleeping_bag.jpg',
    description: 'Stay warm on cold nights.',
  },
];

const FeaturedProducts = () => (
  <div className="featured-products">
    <h2>Featured Products</h2>
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedProducts;
