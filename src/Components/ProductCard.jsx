import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
 const navigate =  useNavigate()
  return (
    <div className="border rounded-lg border-gray-200 cursor-pointer hover:scale-105 hover:shadow-xl transition-transform duration-300 bg-white overflow-hidden">
      {/* Product Image */}
      <img
        src={products.image}
        alt={products.title}
        className="bg-gray-100 aspect-square w-full object-contain p-4"
        onClick={()=>navigate(`/products/${products.id}`)}
      />

      {/* Product Info */}
      <div className="p-3">
        <h1 className="line-clamp-2 font-semibold text-gray-800 text-base mb-2">
          {products.title}
        </h1>
        <p className="text-lg font-bold text-gray-900 mb-3">
          ${products.price}
        </p>

        {/* Add to Cart Button */}
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 text-base rounded-md text-white w-full flex items-center justify-center gap-2 font-semibold transition-colors duration-200">
          <FaShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
