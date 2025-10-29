import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom' // ✅ Import useNavigate
import axios from 'axios'
import Loading from "../assets/Loading4.webm"
import Breadcrums from '../Components/Breadcrums'
import { FaShoppingCart } from "react-icons/fa"
import { cartContext } from '../Context/CartContext'

const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  const { addToCart } = useContext(cartContext)
  const navigate = useNavigate() // ✅ Initialize navigation

  // ✅ Fetch single product
  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(response.data)
    } catch (error) {
      console.error("Error fetching product:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [id])

  // ✅ Loading screen
  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <video muted autoPlay loop className="w-32 md:w-48">
          <source src={Loading} type='video/webm' />
        </video>
      </div>
    )
  }

  // ✅ Handle if no product found
  if (!product) {
    return (
      <div className='flex items-center justify-center h-screen text-xl text-gray-600'>
        Product not found 😔
      </div>
    )
  }

  // ✅ Handle optional discount
  const discount = product.discount || 0
  const originalPrice = Math.round(product.price + (product.price * discount / 100))

  // ✅ Add to cart handler
  const handleAddToCart = () => {
    const productWithQty = { ...product, quantity }
    addToCart(productWithQty)
  }

  // ✅ Handle Buy Now button
  const handleBuyNow = () => {

    // Navigate to BuyNow page
    navigate('/buynow')
  }

  return (
    <div className='px-4 pb-4 md:px-0'>
      <Breadcrums title={product.title} />

      <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* 🖼️ Product Image */}
        <div className='w-full flex justify-center'>
          <img
            src={product.image}
            alt={product.title}
            className='rounded-2xl w-full max-w-sm object-contain'
          />
        </div>

        {/* 🛍️ Product Details */}
        <div className='flex flex-col gap-6'>
          <h1 className='md:text-3xl text-xl font-bold text-gray-800'>{product.title}</h1>
          <div className='text-gray-700 uppercase text-sm tracking-wide'>
            {product.category}
          </div>

          {/* 💰 Price Section */}
          <p className='text-xl font-bold text-red-500'>
            ${product.price}
            {discount > 0 && (
              <>
                {' '}
                <span className='line-through text-gray-600 ml-2'>${originalPrice}</span>{' '}
                <span className='bg-red-500 text-white px-3 py-1 rounded-full text-sm ml-2'>
                  {discount}% OFF
                </span>
              </>
            )}
          </p>

          <p className='text-gray-600 leading-relaxed'>{product.description}</p>

          {/* 🔢 Quantity Selector */}
          <div className='flex items-center gap-4'>
            <label className='text-sm font-medium text-gray-700'>Quantity:</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500'
            />
          </div>

          {/* 🛒 Action Buttons */}
          <div className='flex gap-4 mt-4'>
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className='px-6 flex items-center gap-2 py-2 text-lg bg-red-500 hover:bg-red-600 transition text-white rounded-md shadow-md'
            >
              <FaShoppingCart /> Add to Cart
            </button>

            {/* Buy Now */}
            <button
              onClick={handleBuyNow}
              className='px-6 flex items-center gap-2 py-2 text-lg bg-red-500 hover:bg-red-600 transition text-white rounded-md shadow-md'
            >
              💳 Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
