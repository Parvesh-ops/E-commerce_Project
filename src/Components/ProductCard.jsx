import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../Context/CartContext";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(cartContext);

  // Find quantity in cart
  const cartItem = cartItems.find((item) => item.id === products.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  return (
    <div className="border rounded-lg border-gray-200 hover:shadow-xl transition-transform duration-300 bg-white overflow-hidden">
      {/* Product Image */}
      <div
        className="bg-gray-100 aspect-square w-full flex items-center justify-center p-2 sm:p-4 cursor-pointer min-h-[160px] sm:min-h-[220px]"
        onClick={() => navigate(`/products/${products.id}`)}
      >
        <img
          src={products.image}
          alt={products.title}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h1 className="line-clamp-2 font-semibold text-gray-800 text-base mb-2">
          {products.title}
        </h1>
        <p className="text-lg font-bold text-gray-900 mb-3">
          ${products.price.toFixed(2)}
        </p>

        {/* Add to Cart Button: navigate to cart-details so we can collect user info */}
        <button
          onClick={() => navigate('/cart-details', { state: { product: products, quantity: 1 } })}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 text-base rounded-md text-white w-full flex items-center justify-center gap-2 font-semibold transition-colors duration-200"
        >
          <FaShoppingCart className="w-5 h-5" />
          Add to Cart {quantityInCart > 0 && `(${quantityInCart})`}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
