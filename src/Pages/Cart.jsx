import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(cartContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20 text-xl text-gray-600">
        🛒 Your cart is empty
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
        Shopping Cart
      </h2>

      <ul className="space-y-6">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b pb-4"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain rounded"
            />

            {/* DETAILS */}
            <div className="flex-1 w-full">
              <h3 className="font-semibold text-lg sm:text-xl">{item.title}</h3>
              <p className="text-gray-500">Quantity: {item.quantity}</p>
              <p className="text-red-600 font-bold mt-1">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>

            {/* REMOVE BUTTON */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* TOTAL + CLEAR CART */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h3 className="text-xl sm:text-2xl font-bold">
          Total: ${total.toFixed(2)}
        </h3>

        <button
          onClick={clearCart}
          className="bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-900 transition-colors"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
