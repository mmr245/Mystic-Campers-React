import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 


export default function ProductPage() {
 const { id } = useParams();
 const [product, setProduct] = useState(null);


 useEffect(() => {
   const products = JSON.parse(localStorage.getItem('products') || '[]');
   const found = products.find(p => p.id.toString() === id);
   setProduct(found);
 }, [id]);


 const handleAddToCart = () => {
   if (!product) return;
   const cart = JSON.parse(localStorage.getItem('cart') || '[]');
   const existing = cart.find(item => item.id === product.id);
   if (existing) {
     existing.quantity += 1;
   } else {
     cart.push({ ...product, quantity: 1 });
   }
   localStorage.setItem('cart', JSON.stringify(cart));
 };


 if (!product) {
   return <p>Loading product...</p>;
 }


 return (
   <section className="product-detail-page">
     <h1>{product.name}</h1>
     <img src={product.image} alt={product.name} />
     <p>${product.price.toFixed(2)}</p>
     <p>{product.description}</p>
     <button onClick={handleAddToCart}>Add to Cart</button>
   </section>
 );
}
