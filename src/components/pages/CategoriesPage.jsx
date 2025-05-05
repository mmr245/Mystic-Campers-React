import { useState } from 'react';
import CategoryList from '../components/Categories/CategoryList.jsx';


export default function CategoriesPage() {
 const [categories, setCategories] = useState(() => {
   return JSON.parse(localStorage.getItem('categories') || '[]');
 });


 const handleSelectCategory = (categoryName) => {
   console.log('Selected category:', categoryName);
 };


 return (
   <section className="categories-page">
     <h1>Categories</h1>
     <CategoryList categories={categories} onSelectCategory={handleSelectCategory} />
   </section>
 );
}
