import { useState, useEffect } from 'react';
import CartSummary from '../components/Cart/CartSummary';
import CartList    from '../components/Cart/CartList';

export default function CartPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const handleQtyChange = (id, qty) => {
    const updated = items.map(i => i.id === id ? { ...i, quantity: qty } : i);
    setItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleRemove = id => {
    const updated = items.filter(i => i.id !== id);
    setItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <section>
      <h1>Your Cart</h1>
      <CartList
        items={items}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
      />
      <CartSummary total={total} />
    </section>
  );
}