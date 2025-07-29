import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight, FaCheck, FaDownload, FaWifi, FaQrcode, FaMobileAlt } from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';
import mobile from '../../assets/TravelEsim/travelesim.jpg';  
const GetTravelSim = () => {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation("/how-it-work")
  }
  
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-pink-200/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-8 animate-fade-in-up">
              <HiLightningBolt className="mr-2" />
              Quick Setup
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Get your Travel eSIM in{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                5 Minutes
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Activate our Prepaid eSIM plans with your phone's onboard eSIM chip, alongside your existing phone plan.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8 animate-fade-in-up animation-delay-600">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaQrcode className="text-white text-xl" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                  QR Code delivery to your email
                </span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaDownload className="text-white text-xl" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-300">
                  Fast and easy installation
                </span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaWifi className="text-white text-xl" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-cyan-600 transition-colors duration-300">
                  Connect to mobile internet automatically
                </span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <FaMobileAlt className="text-white text-xl" />
                </div>
                <NavLink 
                  to="/esim-compatible-phone"
                  className="text-gray-700 font-medium hover:text-purple-600 transition-colors duration-300 border-b-2 border-transparent hover:border-purple-300"
                >
                  Check if your phone will work →
                </NavLink>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-800">
              <button
                onClick={handleNavigation}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <HiSparkles className="mr-3" />
                  See How It Works
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center mt-8 space-x-6 text-sm text-gray-600 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center">
                <FaCheck className="mr-2 text-green-500" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="mr-2 text-blue-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="mr-2 text-purple-500" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
          
          {/* Right Side Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <img
                  src={mobile}
                  alt="Travel eSIM Setup"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <FaQrcode className="text-white text-2xl" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <FaWifi className="text-white text-2xl" />
                </div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-2xl -z-10"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full filter blur-2xl -z-10"></div>
            </div>
            
            {/* Feature Cards */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <FaCheck className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">5 Minutes</div>
                  <div className="text-xs text-gray-600">Quick Setup</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg animate-float animation-delay-1000">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <FaWifi className="text-white text-sm" />
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Auto Connect</div>
                  <div className="text-xs text-gray-600">Instant Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default GetTravelSim;
