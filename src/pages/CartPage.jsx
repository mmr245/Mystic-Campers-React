import { useCart, useDispatchCart } from '../context/CartContext'

export default function CartPage() {
  const { items } = useCart()
  const dispatch = useDispatchCart()

  const updateQty = (id, qty) => {
    if (qty < 1) return
    dispatch({ type: 'UPDATE_QTY', payload: { id, qty } })
  }

  const removeItem = id => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  if (items.length === 0) {
    return <p>Your cart is empty.</p>
  }

  return (
    <div className="cart-page">
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={e => updateQty(item.id, parseInt(e.target.value, 10))}
          />
          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <hr />

      <p>
        Total:{' '}
        {items
          .reduce((sum, i) => sum + i.price * i.qty, 0)
          .toFixed(2)}
      </p>
    </div>
  )
}