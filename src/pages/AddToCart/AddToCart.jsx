import { useCart } from '../../CartContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { 
  FaCcVisa, FaCcMastercard, FaCcAmex, FaApple, FaGoogle,
  FaShieldAlt, FaTrash, FaCopy, FaPlus
} from 'react-icons/fa';

const AddToCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  // Calculate subtotal dynamically from cart items
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const paymentMethods = [
    { icon: <FaCcVisa size={45} color='orange' />, name: 'Visa' },
    { icon: <FaCcMastercard size={45} color='blue' />, name: 'MasterCard' },
    { icon: <FaCcAmex size={45} color='blue' />, name: 'American Express' },
    { icon: <FaApple size={45} color='black' />, name: 'Apple Pay' },
    { icon: <FaGoogle size={45} color='black' />, name: 'Google Pay' },
  ];

  // Calculate discounts dynamically based on business rules
  const calculateDiscounts = () => {
    const subtotal = calculateSubtotal();
    const discount = cartItems.length >= 2 ? subtotal * 0.1 : 0;
    const bundleDiscount = cartItems.length >= 3 ? subtotal * 0.05 : 0;
    return {
      discount,
      bundleDiscount,
      subtotal,
      total: subtotal - discount - bundleDiscount
    };
  };

  const { discount, bundleDiscount, subtotal, total } = calculateDiscounts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="ml-2 text-blue-600 dark:text-blue-400 font-medium">{t('addToCart.step1')}</span>
            </div>
            <div className="w-12 h-1 bg-blue-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-blue-600 dark:text-blue-400 font-medium">{t('addToCart.step2')}</span>
            </div>
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-gray-500 dark:text-gray-400 font-medium">{t('addToCart.step3')}</span>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">{t('addToCart.title')}</h1>
          <p className="text-gray-600 dark:text-gray-300">{t('addToCart.subtitle')}</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-12 text-center transition-colors duration-300">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaPlus className="text-gray-400 dark:text-gray-500 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{t('addToCart.emptyTitle')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{t('addToCart.emptySubtitle')}</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaPlus className="mr-2" />
              {t('addToCart.browsePlans')}
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  {/* Item Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      {item.img && (
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-8 h-6 rounded object-cover border dark:border-gray-600"
                        />
                      )}
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.title}</h3>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.price}</div>
                  </div>

                  {/* Item Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{t('addToCart.dataAllowance')}</span>
                        <span className="font-semibold text-gray-800 dark:text-white">{item.data}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{t('addToCart.validity')}</span>
                        <span className="font-semibold text-gray-800 dark:text-white">{item.validity || '10 Days'}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{t('addToCart.startingDate')}</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {item.startDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{t('addToCart.itemTotal')}</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">{item.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Item Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <FaCopy className="mr-2" />
                      {t('common.copy')}
                    </button>
                    <button 
                      onClick={() => removeFromCart(index)}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-medium rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                    >
                      <FaTrash className="mr-2" />
                      {t('common.delete')}
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Add New eSIM Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border-2 border-dashed border-blue-300 dark:border-blue-600">
                <div className="text-center">
                  <Link 
                    to="/" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <FaPlus className="mr-2" />
                    {t('addToCart.addNewEsim')}
                  </Link>
                  {cartItems.length >= 2 && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <p className="text-green-800 dark:text-green-300 font-medium text-sm">
                        {t('addToCart.multipleDiscount')}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-8 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('addToCart.orderSummary')}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 dark:text-gray-300">{t('addToCart.subtotal')}</span>
                    <span className="font-semibold text-gray-800 dark:text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center py-2 text-green-600 dark:text-green-400">
                      <span>{t('addToCart.discount')}</span>
                      <span className="font-semibold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {bundleDiscount > 0 && (
                    <div className="flex justify-between items-center py-2 text-green-600 dark:text-green-400">
                      <span>{t('addToCart.bundleDiscount')}</span>
                      <span className="font-semibold">-${bundleDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 dark:text-gray-300">{t('addToCart.taxesFees')}</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{t('addToCart.included')}</span>
                  </div>
                  
                  <div className="border-t dark:border-gray-600 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800 dark:text-white">{t('common.total')}</span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${total.toFixed(2)} USD</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                  {t('addToCart.paymentCharged')}
                </p>

                {/* Trustpilot Section */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-green-600 dark:text-green-400 font-semibold">{t('addToCart.excellent')}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{t('addToCart.trustpilot')}</span>
                  </div>
                </div>

                {/* Terms Notice */}
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-6">
                  {t('addToCart.termsNotice')}{' '}
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">{t('addToCart.termsOfService')}</a>
                  {' '}{t('addToCart.and')}{' '}
                  <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">{t('addToCart.privacyPolicy')}</a>
                </p>

                {/* Checkout Button */}
                <Link 
                  to="/Checkout" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center text-lg"
                >
                  {t('addToCart.proceedCheckout')}
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Secure Checkout Section */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="text-green-600 dark:text-green-400 text-2xl mr-2" />
            <span className="text-lg font-semibold text-gray-800 dark:text-white">{t('addToCart.secureCheckout')}</span>
          </div>
          <div className="flex justify-center items-center space-x-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-w-2xl mx-auto transition-colors duration-300">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                {method.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;