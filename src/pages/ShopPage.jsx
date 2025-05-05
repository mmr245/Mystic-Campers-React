import React, { useState, useMemo } from 'react';
import ProductCard from '../components/Products/ProductCard';

export default function ShopPage({ products = [] }) {
  // Start with an empty cart
  const [cart, setCart] = useState([]);

  // Add chosen product into cart state
  const handleAddToCart = product => {
    setCart(prev => [...prev, product]);
  };

  // Track selected category and search input
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Build list of categories, including all those from products
  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(products.map(p => p.category)));
    return ['all', ...uniqueCats];
  }, [products]);

  // Derive products that match current filters
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => categoryFilter === 'all' || p.category === categoryFilter)
      .filter(p => {
        if (!searchTerm.trim()) return true;
        return p.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  }, [products, categoryFilter, searchTerm]);

  return (
    <div className="shop-page">
      {/* category and search controls */}
      <div className="filters">
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all'
                ? 'All Categories'
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <input
          type="search"
          placeholder="Search products…"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
    <div className="shopping-page p-4">
      <div className="filters flex gap-4 mb-6">
        <div>
          <label htmlFor="category" className="block font-medium">Category</label>
            <div className="px-4">
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

      {/* product grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(prod => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={handleAddToCart}  // enables the Add to Cart button
            />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
}