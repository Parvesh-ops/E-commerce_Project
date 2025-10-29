import React, { useContext } from 'react'
import { cartContext } from '../Context/CartContext'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(cartContext)

  if (cartItems.length === 0) {
    return <div className="text-center mt-20 text-xl text-gray-600">🛒 Your cart is empty</div>
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b pb-3">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>Qty: {item.quantity}</p>
              <p className="text-red-500 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
        <button
          onClick={clearCart}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Clear Cart
        </button>
      </div>
    </div>
  )
}

export default Cart
