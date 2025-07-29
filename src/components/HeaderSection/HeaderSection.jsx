import mobile from "../../../public/images/mobile1.png";
import { FaApple, FaAndroid, FaCheck } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const HeaderSection = ({
  title,
  description,
  heading,
  buttons = [],
  backgroundColor = "#1e293b",
  backgroundImage,
  features1 = [],
}) => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden min-h-screen flex items-center">
      {/* Background Image Overlay */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-indigo-900/80"></div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
              <HiSparkles className="mr-2 text-yellow-400" />
              Next Generation Technology
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              {title.map((part, index) => (
                <span 
                  key={index} 
                  className={part.className === "orange-text" 
                    ? "bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" 
                    : "text-white"
                  }
                >
                  {part.text}
                </span>
              ))}
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
              {description}
            </p>
            
            {/* Features List */}
            {features1.length > 0 && (
              <div className="space-y-3 mb-8 animate-fade-in-up animation-delay-600">
                {features1.map((feature, index) => (
                  <div key={index} className="flex items-center text-blue-100">
                    <FaCheck className="mr-3 text-green-400" />
                    <span className="text-lg">
                      {feature.text} {feature.text2}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Heading */}
            {heading && (
              <h4 className="text-2xl font-bold text-white mb-6 animate-fade-in-up animation-delay-700">
                {heading}
              </h4>
            )}
            
            {/* Buttons */}
            {buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up animation-delay-800">
                {buttons.map((btn, index) => (
                  <button 
                    key={index} 
                    className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    {btn === "IOS" && <FaApple className="mr-2 text-xl" />}
                    {btn === "Android" && <FaAndroid className="mr-2 text-xl" />}
                    <span>{btn}</span>
                  </button>
                ))}
              </div>
            )}
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-blue-200 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center">
                <FaCheck className="mr-2 text-green-400" />
                <span className="text-sm">Instant Activation</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="mr-2 text-blue-400" />
                <span className="text-sm">200+ Countries</span>
              </div>
              <div className="flex items-center">
                <FaCheck className="mr-2 text-purple-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-4xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float">
                <img
                  src={mobile}
                  alt="Mobile eSIM Preview"
                  className="w-full h-90 max-w-md mx-auto"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                  <FaCheck className="text-white text-2xl" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <HiSparkles className="text-white text-2xl" />
                </div>
              </div>
              
              {/* Background Decorative Elements */}
              <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-2xl -z-10"></div>
              <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full filter blur-2xl -z-10"></div>
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
        
        .animation-delay-700 {
          animation-delay: 0.7s;
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
};

export default HeaderSection;
