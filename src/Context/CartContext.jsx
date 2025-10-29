import React, { createContext, useState } from 'react'

export const cartContext = createContext(null)

const CartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // ✅ Function to add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if product already exists in cart
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        // If exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      // Otherwise, add a new product with quantity 1
      return [...prevItems, { ...product, quantity: 1 }]
    })

    // Optional: show small alert (temporary feedback)
    alert(`🛍️ ${product.title} added to cart!`)
  }

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // ✅ Clear all
  const clearCart = () => setCartItems([])

  return (
    <cartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  )
}

export default CartContext
