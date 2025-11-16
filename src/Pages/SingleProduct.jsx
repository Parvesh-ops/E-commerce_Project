import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from "../assets/Loading4.webm";
import Breadcrums from '../Components/Breadcrums';
import { FaShoppingCart } from "react-icons/fa";
import { cartContext } from '../Context/CartContext';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(cartContext);
  const navigate = useNavigate();

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <video muted autoPlay loop className="w-32 sm:w-48">
          <source src={Loading} type='video/webm' />
        </video>
      </div>
    );
  }

  if (!product) {
    return (
      <div className='flex items-center justify-center h-screen text-xl text-gray-600'>
        Product not found 😔
      </div>
    );
  }

  const discount = product.discount || 0;
  const originalPrice = Math.round(product.price + (product.price * discount / 100));

  const handleAddToCart = () => {
    // Navigate to details page so we can collect user info before adding to cart
    navigate('/cart-details', { state: { product, quantity } });
  };

  const handleBuyNow = () => {
    navigate('/buynow');
  };

  return (
    <div className='px-4 sm:px-6 md:px-0 pb-8'>
      <Breadcrums title={product.title} />

      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
        {/* Product Image */}
        <div className='flex justify-center'>
          <img
            src={product.image}
            alt={product.title}
            className='rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md object-contain'
          />
        </div>

        {/* Product Details */}
        <div className='flex flex-col gap-4 sm:gap-6'>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>{product.title}</h1>
          <p className='text-gray-700 uppercase text-sm tracking-wide'>{product.category}</p>

          {/* Price */}
          <p className='text-lg sm:text-xl md:text-2xl font-bold text-red-500'>
            ${product.price}
            {discount > 0 && (
              <>
                <span className='line-through text-gray-600 ml-2'>${originalPrice}</span>
                <span className='bg-red-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm ml-2'>
                  {discount}% OFF
                </span>
              </>
            )}
          </p>

          <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>{product.description}</p>

          {/* Quantity */}
          <div className='flex items-center gap-3'>
            <label className='text-sm sm:text-base font-medium text-gray-700'>Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className='w-16 sm:w-20 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 mt-4'>
            <button
              onClick={handleAddToCart}
              className='w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition'
            >
              <FaShoppingCart /> Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className='w-full sm:w-auto px-6 py-2 flex items-center justify-center gap-2 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md transition'
            >
              💳 Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
