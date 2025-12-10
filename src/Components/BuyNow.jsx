import React, { useState, useContext } from "react";
import { cartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const BuyNow = () => {
  const { cartItems, clearCart } = useContext(cartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    country: "",
    paymentMethod: "card",
    cardNumber: "",
  });
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [errors, setErrors] = useState({});
  const [placing, setPlacing] = useState(false);

  const subtotal = cartItems.reduce((s, it) => s + (it.price || 0) * (it.quantity || 1), 0);
  const tax = +(subtotal * 0.05).toFixed(2);
  const shipping = subtotal > 100 ? 0 : subtotal === 0 ? 0 : 5;
  const total = +(subtotal + tax + shipping - discount).toFixed(2);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const applyPromo = () => {
    // simple promo example
    if (promo.trim().toUpperCase() === "SAVE10") {
      setDiscount(+(subtotal * 0.1).toFixed(2));
      alert("Promo applied: 10% off");
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.address.trim()) errs.address = "Address is required";
    return errs;
  };

  const placeOrder = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return navigate('/products');
    }

    setPlacing(true);
    // Simulate order placement
    setTimeout(() => {
      setPlacing(false);
      clearCart();
      alert("Order placed successfully! 🎉");
      navigate('/');
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Shipping & Payment Form */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Shipping Details</h2>
          <form onSubmit={placeOrder} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Full Name</label>
                <input name="fullName" value={form.fullName} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input name="email" value={form.email} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input name="phone" value={form.phone} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium">City</label>
                <input name="city" value={form.city} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Address</label>
              <input name="address" value={form.address} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Postal Code</label>
                <input name="postal" value={form.postal} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
              </div>
              <div>
                <label className="text-sm font-medium">Country</label>
                <input name="country" value={form.country} onChange={change} className="w-full mt-1 border rounded px-3 py-2" />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-4">Payment</h3>
            <div className="flex gap-3 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value="card" checked={form.paymentMethod === 'card'} onChange={change} />
                Card
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value="esewa" checked={form.paymentMethod === 'esewa'} onChange={change} />
                E-sewa
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value="khalti" checked={form.paymentMethod === 'khalti'} onChange={change} />
                Khalti
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="paymentMethod" value="cod" checked={form.paymentMethod === 'cod'} onChange={change} />
                Cash on Delivery
              </label>
            </div>

            {form.paymentMethod === 'esewa' && (
              <div className="mt-3">
                <label className="text-sm font-medium">Esewa Number</label>
                <input name="esewaNumber" value={form.cardNumber} onChange={change} placeholder="9824336431" className="w-full mt-1 border rounded px-3 py-2" />
              </div>
            )}

            {form.paymentMethod === 'khalti' && (
              <div className="mt-3">
                <label className="text-sm font-medium">Card Number</label>
                <input name="khaltiNumber" value={form.cardNumber} onChange={change} placeholder="4242 4242 4242 4242" className="w-full mt-1 border rounded px-3 py-2" />
              </div>
            )}

            {form.paymentMethod === 'card' && (
              <div className="mt-3">
                <label className="text-sm font-medium">Card Number</label>
                <input name="cardNumber" value={form.cardNumber} onChange={change} placeholder="4242 4242 4242 4242" className="w-full mt-1 border rounded px-3 py-2" />
              </div>
            )}

            <div className="flex justify-between items-center mt-6">
              <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Back</button>
              <button type="submit" disabled={placing} className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600">{placing ? 'Placing...' : 'Place Order'}</button>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <aside className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3 max-h-64 overflow-auto">
            {cartItems.length > 0 ? (
              cartItems.map((it) => (
                <div key={it.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={it.image} alt={it.title} className="w-14 h-14 object-contain rounded" />
                    <div>
                      <p className="text-sm font-medium">{it.title}</p>
                      <p className="text-xs text-gray-500">Qty: {it.quantity}</p>
                    </div>
                  </div>
                  <div className="text-sm font-semibold">${(it.price * it.quantity).toFixed(2)}</div>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No items in cart.</p>
            )}
          </div>

          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm text-gray-600"><span>Tax (5%)</span><span>${tax.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm text-gray-600"><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            {discount > 0 && <div className="flex justify-between text-sm text-green-600"><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
            <div className="flex justify-between font-semibold text-lg mt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Promo code</label>
            <div className="flex gap-2 mt-2">
              <input value={promo} onChange={(e) => setPromo(e.target.value)} className="flex-1 border rounded px-3 py-2" placeholder="Enter code" />
              <button onClick={applyPromo} className="px-3 py-2 bg-gray-200 rounded">Apply</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BuyNow;
