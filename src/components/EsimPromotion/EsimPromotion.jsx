import React from "react";
import esimpromo from "../../assets/TravelEsim/esimpromo.jpg";
import { FaWifi, FaClock } from "react-icons/fa";

const EsimPromotion = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-cyan-400">Fast</span> data for your apps
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              Enjoy music, movies, and games with high-speed 4G LTE international
              data, and stay connected to work and family anywhere you go with a
              Europe Travel eSIM from Connectra eSIM.
            </p>

            {/* App Icons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <img
                  src="https://img.icons8.com/color/32/whatsapp.png"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
                <h3 className="font-bold text-sm">WhatsApp</h3>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <img
                  src="https://img.icons8.com/color/32/instagram-new.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
                <h3 className="font-bold text-sm">Instagram</h3>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <img
                  src="https://img.icons8.com/color/32/spotify.png"
                  alt="Spotify"
                  className="w-8 h-8"
                />
                <h3 className="font-bold text-sm">Spotify</h3>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <img
                  src="https://img.icons8.com/color/32/zoom.png"
                  alt="Zoom"
                  className="w-8 h-8"
                />
                <h3 className="font-bold text-sm">Zoom</h3>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-2xl backdrop-blur-sm border border-cyan-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <FaWifi className="text-cyan-400 text-2xl" />
                  <p className="text-gray-400 text-sm">Up to</p>
                </div>
                <p className="text-3xl font-bold text-cyan-400 mb-1">100 Mbit/s</p>
                <p className="text-gray-300 text-sm">5G Download Speed</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/30">
                <div className="flex items-center space-x-3 mb-2">
                  <FaClock className="text-purple-400 text-2xl" />
                  <p className="text-gray-400 text-sm">As low as</p>
                </div>
                <p className="text-3xl font-bold text-purple-400 mb-1">20ms</p>
                <p className="text-gray-300 text-sm">Internet Latency</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={esimpromo}
                alt="eSIM Promotion"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsimPromotion;
