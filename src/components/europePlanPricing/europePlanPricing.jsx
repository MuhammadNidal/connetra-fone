/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { useCart } from '../../CartContext';
import { useNavigate } from 'react-router-dom';
import EsimSpecificationsModal from "../EsimSpecificationsModal/EsimSpecificationsModal";
import { toast } from 'react-toastify';
import { FaArrowRight, FaShoppingCart, FaEye, FaCreditCard } from 'react-icons/fa';

const PricingCards = ({ 
  title = { main: '', sub: '' }, 
  features = [], 
  plans = [], 
  paymentMethods = [], 
  showAll = false 
}) => {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const processedPlans = useMemo(() => {
    if (!Array.isArray(plans)) return [];
    
    return plans
      .filter(plan => plan?.data && plan.data !== "N/A")
      .map(plan => {
        const dataValue = plan.data.split(' ')[0];
        const dataGB = dataValue ? parseFloat(dataValue) : 0;
        return { ...plan, dataGB };
      })
      .sort((a, b) => b.dataGB - a.dataGB)
      .filter((plan, index, self) => 
        index === self.findIndex(p => p.data === plan.data)
      )
      .slice(0, showAll ? plans.length : 6);
  }, [plans, showAll]);

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-orange-500">{title.main}</span>{" "}
            <span className="text-gray-900">{title.sub}</span>
          </h2>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-all duration-300">
                <div className="text-2xl">
                  {feature.icon}
                </div>
                <p className="font-semibold text-gray-700 text-center sm:text-left">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {processedPlans.length > 0 ? (
            processedPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 lg:p-6 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold truncate pr-2">{plan.title}</span>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <span className="text-lg lg:text-xl font-bold">{plan.data}</span>
                      {plan.img && (
                        <img src={plan.img} width={30} height={20} alt="" className="rounded border" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 lg:p-6">
                  {/* Specification */}
                  <div className="mb-6">
                    <button 
                      onClick={() => {
                        setSelectedPlan(plan);
                        setOpen(true);
                      }}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group-hover:scale-105 transition-all duration-300"
                    >
                      <span className="text-sm lg:text-base">{plan.subtitle}</span>
                      <FaEye className="group-hover:scale-110 transition-transform" />
                    </button>
                    <p className="text-gray-600 text-xs lg:text-sm mt-2 line-clamp-2">{plan.description}</p>
                  </div>

                  {/* Price Section */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-sm text-gray-500">{plan.perGB}</span>
                    </div>
                    
                    <button
                      onClick={() => {
                        addToCart(plan);
                        toast.success(`${plan.title} added to cart!`, {
                          position: "top-right",
                          autoClose: 2000,
                          style: {
                            backgroundColor: '#10b981',
                            color: '#fff',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            fontSize: '14px',
                            padding: '10px 16px',
                          },
                          icon: '🛒'
                        });
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 group"
                    >
                      <FaShoppingCart className="text-lg" />
                      <span>{plan.buttonText}</span>
                      <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">
                        Choose your start date and duration on the next step up to 180 days.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">{plan.coverage}</span>
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                        {plan.sim}
                      </span>
                    </div>
                  </div>

                  {/* Best Value Badge */}
                  {plan.note && (
                    <div className="mt-4 p-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center font-bold text-sm rounded-lg">
                      {plan.note}
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShoppingCart className="text-gray-400 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No plans available</h3>
              <p className="text-gray-600">Please check back later for available plans</p>
            </div>
          )}
        </div>

        {/* View All Plans Button */}
        {plans.length > 6 && (
          <div className="text-center mb-12">
            <button 
              onClick={() => navigate('/all-plans', { state: { plans, title } })}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 mx-auto"
            >
              <span>View All Plans</span>
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        )}

        {/* Modal */}
        {open && selectedPlan && (
          <EsimSpecificationsModal 
            onClose={() => setOpen(false)} 
            title={selectedPlan.title}
            details={selectedPlan.description}
          />
        )}

        {/* Payment Methods */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <FaCreditCard className="text-gray-600 text-2xl mr-3" />
            <h3 className="text-xl font-bold text-gray-800">PAYMENTS ACCEPTED</h3>
          </div>
          <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                {method.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;