import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';

const CartDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(cartContext);

  const [product, setProduct] = useState(state?.product || null);
  const [quantity, setQuantity] = useState(state?.quantity || 1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // If no product was passed, redirect back to products
    if (!product) {
      navigate('/products');
    }
  }, [product, navigate]);

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!product) return;

    const productWithQty = { ...product, quantity };
    addToCart(productWithQty);

    // TODO: persist or use user info for checkout flow; for now navigate to cart
    navigate('/cart');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>

      {product && (
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="flex gap-4 items-center">
            <img src={product.image} alt={product.title} className="w-24 h-24 object-contain" />
            <div>
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-gray-600">Price: ${product.price}</p>
            </div>
          </div>

          <form onSubmit={handleConfirm} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="mt-1 w-28 border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full border rounded px-2 py-1" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
              <textarea required value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full border rounded px-2 py-1" rows={3} />
            </div>

            <div className="sm:col-span-2 flex gap-3 justify-end mt-2">
              <button type="button" onClick={handleCancel} className="px-4 py-2 rounded border">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">Confirm & Add to Cart</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
