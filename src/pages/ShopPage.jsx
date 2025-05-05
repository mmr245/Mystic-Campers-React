import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/Products/ProductCard';

export default function ShoppingPage() {
  const allProducts = products;
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity });

  const categories = useMemo(
    () => ['All', ...new Set(allProducts.map((p) => p.category))],
    [allProducts]
  );

  const filteredProducts = useMemo(
    () =>
      allProducts.filter(({ price, category }) => {
        const matchesCategory = categoryFilter === 'All' || category === categoryFilter;
        return typeof price === 'number' && price >= priceFilter.min && price <= priceFilter.max && matchesCategory;
      }),
    [allProducts, categoryFilter, priceFilter]
  );

  const handlePriceChange = ({ target: { name, value } }) => {
    setPriceFilter((prev) => ({
      ...prev,
      [name]: value === '' ? (name === 'min' ? 0 : Infinity) : Number(value)
    }));
  };

  return (
    <div className="shopping-page p-4">
      <div className="filters flex gap-4 mb-6">
        <div>
          <label htmlFor="category" className="block font-medium">Category</label>
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="mt-1 p-2 border rounded"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Price Range</label>
          <div className="flex items-center gap-2 mt-1">
            <input
              type="number"
              name="min"
              value={priceFilter.min === 0 ? '' : priceFilter.min}
              onChange={handlePriceChange}
              placeholder="Min"
              className="w-20 p-2 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              name="max"
              value={priceFilter.max === Infinity ? '' : priceFilter.max}
              onChange={handlePriceChange}
              placeholder="Max"
              className="w-20 p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imgSrc={product.image}
            />
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
}