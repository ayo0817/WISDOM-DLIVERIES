import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { CreditCard, Truck, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setIsOrdered(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (isOrdered) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle2 className="text-green-600 w-12 h-12" />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Thank you for your order. We've received it and our riders are getting ready to deliver your delicious meal.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    navigate('/menu');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/cart" className="inline-flex items-center text-gray-500 hover:text-red-600 mb-8 font-medium">
        <ArrowLeft className="mr-2 w-5 h-5" /> Back to Cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold flex items-center">
                <Truck className="mr-2 w-6 h-6 text-red-600" /> Delivery Information
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Wisdom Obanor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="wisdom@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Address</label>
                  <textarea
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="Enter your full delivery address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold flex items-center">
                <CreditCard className="mr-2 w-6 h-6 text-red-600" /> Payment Method
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'card' ? 'border-red-600 bg-red-50' : 'border-gray-100'}`}>
                  <input
                    type="radio"
                    name="payment"
                    className="hidden"
                    checked={formData.paymentMethod === 'card'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                  />
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.paymentMethod === 'card' ? 'border-red-600' : 'border-gray-300'}`}>
                      {formData.paymentMethod === 'card' && <div className="w-2 h-2 bg-red-600 rounded-full" />}
                    </div>
                    <span className="font-bold">Online Payment</span>
                  </div>
                </label>
                <label className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'pos' ? 'border-red-600 bg-red-50' : 'border-gray-100'}`}>
                  <input
                    type="radio"
                    name="payment"
                    className="hidden"
                    checked={formData.paymentMethod === 'pos'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'pos' })}
                  />
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${formData.paymentMethod === 'pos' ? 'border-red-600' : 'border-gray-300'}`}>
                      {formData.paymentMethod === 'pos' && <div className="w-2 h-2 bg-red-600 rounded-full" />}
                    </div>
                    <span className="font-bold">POS on Delivery</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-colors shadow-xl shadow-red-100"
            >
              Complete Order
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="bg-gray-100 text-gray-600 w-6 h-6 rounded flex items-center justify-center text-xs font-bold mr-3">{item.quantity}x</span>
                    <span className="text-gray-700 font-medium">{item.name}</span>
                  </div>
                  <span className="text-gray-900 font-bold">₦{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₦1,000</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2">
                <span>Total</span>
                <span>₦{(totalPrice + 1000).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
