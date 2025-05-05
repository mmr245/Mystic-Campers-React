import { useState } from 'react';
import ProductGrid from '../components/Products/ProductGrid.jsx';
import FilterPanel from '../components/Products/FilterPanel.jsx';


export default function ShopPage() {
 const [filters, setFilters] = useState({
   category: '',
   priceRange: [0, 1000],
   availableOnly: false,
 });


 const [products, setProducts] = useState(() => {
   return JSON.parse(localStorage.getItem('products') || '[]');
 });


 const filteredProducts = products.filter(product => {
   const inCategory = filters.category ? product.category === filters.category : true;
   const inPriceRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
   const isAvailable = filters.availableOnly ? product.available : true;
   return inCategory && inPriceRange && isAvailable;
 });


 function handleFilterChange(updatedFilters) {
       setFilters(updatedFilters);
   }


 const handleAddToCart = (product) => {
   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
   const existing = cart.find(item => item.id === product.id);
   if (existing) {
     existing.quantity += 1;
   } else {
     cart.push({ ...product, quantity: 1 });
   }
   localStorage.setItem('cart', JSON.stringify(cart));
 };


 return (
   <section className="products-page">
     <h1>Shop</h1>
     <div className="products-layout">
       <FilterPanel filters={filters} onFilterChange={handleFilterChange} />
       <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
     </div>
   </section>
 );
}
