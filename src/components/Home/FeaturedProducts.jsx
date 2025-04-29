import React from 'react';
// Import images
import babaYaga from '../../assets/images/catalog_images/baba-yaga-cookset.png';
import banshee from '../../assets/images/catalog_images/banshee-repel.png';
import cerberus from '../../assets/images/catalog_images/cerberus-flashlight.png';
import chup from '../../assets/images/catalog_images/chup-repel.png';

const featured = [
  { id: 1, name: 'Baba Yaga Cookset', price: '$45.00', image: babaYaga },
  { id: 2, name: 'Banshee Reppel', price: '$24.00', image: banshee },
  { id: 3, name: 'Cerberus Flashlight', price: '$35.00', image: cerberus },
  { id: 4, name: 'Chup Reppel', price: '$22.00', image: chup },
];

const FeaturedProducts = () => (
  <>
    {featured.map((p) => (
      <div key={p.id} className="product-card">
        <img src={p.image} alt={p.name} />
        <h3>{p.name}</h3>
        <p>{p.price}</p>
      </div>
    ))}
  </>
);

export default FeaturedProducts;
