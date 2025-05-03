import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

// Example product prop shape: { id, name, price, category, imageUrl }
export default function ShoppingPage({ products }) {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 });

  // Derive list of unique categories
  const categories = useMemo(() => [
    'All',
    ...Array.from(new Set(products.map((p) => p.category)))
  ], [products]);

  // Filter products by category and price
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        categoryFilter === 'All' || product.category === categoryFilter;
      const matchesPrice =
        product.price >= priceFilter.min && product.price <= priceFilter.max;
      return matchesCategory && matchesPrice;
    });
  }, [products, categoryFilter, priceFilter]);

  // Handler for price inputs
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceFilter((prev) => ({
      ...prev,
      [name]: Number(value)
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
              value={priceFilter.min}
              onChange={handlePriceChange}
              placeholder="Min"
              className="w-20 p-2 border rounded"
            />
            <span>-</span>
            <input
              type="number"
              name="max"
              value={priceFilter.max}
              onChange={handlePriceChange}
              placeholder="Max"
              className="w-20 p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products match your filters.</p>
        )}
      </div>
    </div>
  );
}