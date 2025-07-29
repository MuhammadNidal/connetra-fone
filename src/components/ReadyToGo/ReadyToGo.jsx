import phone from "../../assets/HeroImages/phone.png";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaRocket, FaCheck, FaDownload } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const ReadyToGo = () => {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation("/signup")
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
              <FaRocket className="mr-2 text-yellow-400" />
              Ready To Go
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Ready To <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Go</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Install an eSIM now and get online in 5 minutes, or reserve your data plan for any future date. 
              We'll activate it automatically.
            </p>
            
            {/* Features */}
            <div className="space-y-4 mb-8 animate-fade-in-up animation-delay-600">
              <div className="flex items-center text-blue-100">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-lg">5-minute setup process</span>
              </div>
              <div className="flex items-center text-blue-100">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <FaDownload className="text-white text-sm" />
                </div>
                <span className="text-lg">Instant QR code delivery</span>
              </div>
              <div className="flex items-center text-blue-100">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <FaRocket className="text-white text-sm" />
                </div>
                <span className="text-lg">Automatic activation</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-800">
              <button
                onClick={handleNavigation}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <FaRocket className="mr-3" />
                  Get My eSIM
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center mt-8 space-x-6 text-sm text-blue-200 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center">
                <FaCheck className="mr-2 text-green-400" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="mr-2 text-blue-400" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="mr-2 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Phone Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
                <img
                  src={phone}
                  alt="Ready to Go Phone"
                  className="w-full h-auto max-w-sm mx-auto"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <FaCheck className="text-white text-2xl" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <FaRocket className="text-white text-2xl" />
                </div>
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
                    <FaDownload className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Instant</div>
                    <div className="text-xs text-gray-600">Delivery</div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full filter blur-2xl -z-10"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full filter blur-2xl -z-10"></div>
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
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default ReadyToGo