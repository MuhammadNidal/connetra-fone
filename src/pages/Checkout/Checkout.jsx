import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext';

const CheckoutScreen = () => {
  const { cartItems } = useCart();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const items = cartItems;

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
  };

  const calculateDiscounts = () => {
    const subtotal = calculateSubtotal();
    const discount = 3.08;
    return { subtotal, discount, total: subtotal - discount };
  };

  const { subtotal, discount, total } = calculateDiscounts();

  return (
    <div className="max-w-6xl mx-auto p-5 mt-28 font-sans">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Panel */}
        <div className="flex-1 space-y-6">
          {/* Account Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Create Account</h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-sm"
              />
              {email === '' && <p className="text-red-500 text-xs mt-1">An email address is required.</p>}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-sm"
              />
              {password === '' && <p className="text-red-500 text-xs mt-1">A password is required.</p>}
            </div>
            <p className="text-gray-500 text-xs mb-4">
              Your eSIM will be sent to your email address immediately after purchase.
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition-colors">
              Proceed to Payment
            </button>
            <p className="text-gray-500 text-xs text-center mt-4">
              Already have an account? <Link to="/login" className="text-blue-600">Log in</Link>
            </p>
          </div>

          {/* Payment Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Payment Details</h2>
            <div className="space-y-3 mb-4">
              <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="google"
                  checked={paymentMethod === 'google'}
                  onChange={() => setPaymentMethod('google')}
                  className="mr-3"
                />
                <span className="font-medium mr-2">G</span> Google Pay
              </label>
              <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="mr-3"
                />
                <span className="font-medium mr-2">P</span> PayPal
              </label>
              <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mr-3"
                />
                <span className="mr-2">💳</span> Credit or debit card
              </label>
            </div>
            <p className="text-gray-500 text-xs">
              By clicking Pay, you agree to the <a href="#" className="text-blue-600">Terms of Service</a>.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Payments are encrypted and processed by: <strong>Braintree</strong>
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 space-y-6">
          {/* Order Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Order</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="pb-4">
                  <h4 className="text-sm font-medium mb-2">{item.title}</h4>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data Allowance</span>
                      <span>{item.data}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Validity</span>
                      <span>{item.validity || '10 Days'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting Date</span>
                      <span>{item.startDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Item Total</span>
                      <span className="font-semibold text-red-500">{item.price}</span>
                    </div>
                  </div>
                  {index < items.length - 1 && <hr className="my-4 border-gray-200" />}
                </div>
              ))}
            </div>
            <Link to="/cart" className="block text-center text-blue-600 text-xs mt-4">Edit Cart</Link>
          </div>

          {/* Total Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-blue-600">
                <span>Discount</span>
                <span>(${discount.toFixed(2)})</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>Included</span>
              </div>
              <div className="flex justify-between font-semibold pt-3 mt-3 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toFixed(2)} USD</span>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-3">Your payment will be charged in USD.</p>
            <div className="flex items-center gap-1 text-xs mt-4">
              <span>Excellent</span>
              <span className="text-green-500">★★★★★</span>
              <span>Trustpilot</span>
            </div>
            <p className="text-gray-500 text-xs text-center mt-4">
              Our <a href="#" className="text-blue-600">Terms of Service</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;