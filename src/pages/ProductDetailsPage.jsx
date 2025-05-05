import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './ProductDetailsPage.css';

/**
 * Reads the `id` param from the URL, looks it up in the passed-in products array,
 * and renders all of its details.
 */
export default function ProductDetailPage({ products = [] }) {
  const { id } = useParams();
  // find the matching product (ids are numbers in data, so coerce to string)
  const product = products.find(p => String(p.id) === id);

  // If nothing matches, show a friendly message
  if (!product) {
    return (
      <section className="product-detail">
        <p>Sorry, that product can’t be found.</p>
        <NavLink to="/shop">← Back to Shop</NavLink>
      </section>
    );
  }

  // Destructure fields for clarity
  const { name, price, image, description, available } = product;

  return (
    <section className="product-detail">
      <NavLink to="/shop">← Back to Shop</NavLink>

      <div className="detail-content">
        <img src={image} alt={name} className="detail-image" />
        <div className="detail-info">
          <h2>{name}</h2>
          <p className="detail-price">${price.toFixed(2)}</p>
          {available === false && <p className="out-of-stock">Out of Stock</p>}
          {description && <p className="detail-desc">{description}</p>}
          {/* If you still want Add to Cart here: */}
          {available && (
            <button
              className="add-to-cart-btn"
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem('cart') || '[]')
                cart.push({ ...product, quantity: 1 })
                localStorage.setItem('cart', JSON.stringify(cart))
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </section>
  );
}