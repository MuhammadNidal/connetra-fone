import vodafone from "../../assets/LogoImages/vodafone.png";
import att from "../../assets/LogoImages/att.png";
import bellMobility from "../../assets/LogoImages/bellMobility.png";
import movistar from "../../assets/LogoImages/Movistar.png";
import orangetm from "../../assets/LogoImages/orangeTm.png";
import Otwo from "../../assets/LogoImages/Otwo.png";
import skTelecom from "../../assets/LogoImages/skTelecom.png";
import telefonica from "../../assets/LogoImages/telefonica.png";
import dataRomaing from "../../assets/HeroImages/dataRefinding.jpg";
import { FaGlobe, FaNetworkWired, FaSignal } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const DataRoaming = () => {
  const networkLogos = [vodafone, att, orangetm, telefonica, skTelecom, Otwo, movistar, bellMobility];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
              <img
                src={dataRomaing}
                alt="Data Roaming Technology"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                <FaSignal className="text-white text-2xl" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                <FaNetworkWired className="text-white text-2xl" />
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-2xl -z-10"></div>
            <div className="absolute bottom-8 right-8 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-full filter blur-2xl -z-10"></div>
          </div>

          {/* Right Content Section */}
          <div className="order-1 lg:order-2">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
                <FaGlobe className="mr-2" />
                International Roaming
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Redefining</span>
              </h1>
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Data <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Roaming</span>.
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We aggregate connectivity from <span className="font-bold text-blue-600">400+ networks</span> around the world to 
              give you the best connection quality, and the best pricing, in every destination. When you install an eSIM, 
              you automatically connect to the best network available.
            </p>

            {/* Network Logos Section */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">
                Trusted by Leading Networks Worldwide
              </h3>
              
              <div className="grid grid-cols-4 md:grid-cols-4 gap-6">
                {networkLogos.map((logo, index) => (
                  <div 
                    key={index} 
                    className="group bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                  >
                    <img 
                      src={logo} 
                      alt="Network Partner" 
                      className="w-full h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">400+</div>
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Networks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">200+</div>
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">5G</div>
                <div className="text-gray-600 text-sm font-medium uppercase tracking-wider">Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataRoaming;
