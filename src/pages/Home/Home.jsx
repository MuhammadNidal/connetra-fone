import Hero from '../../assets/HeroImages/heroslider.jpg';
import { FaWifi, FaDownload, FaArrowRight, FaPlay, FaGlobe, FaShieldAlt, FaBolt, FaRocket, FaStar, FaCheck } from 'react-icons/fa';
import { MdLocationPin, MdSignalCellularAlt, MdSpeed } from 'react-icons/md';
import { HiSparkles, HiDeviceMobile } from 'react-icons/hi';
import PopularCountries from "../../components/popularCountries/popularCountries";
import GetTravelSim from "../../components/getTravelSim/getTravelSim";
import { cardData } from "../../assets/data/data";
import Card from "../../components/Card/Card";
import FAQ from "../../components/FAQ/FAQ";
import { BiCalendar } from "react-icons/bi";
import { GiAutoRepair } from "react-icons/gi";
import Button from "../../components/buttton/button";
import { faqData } from '../../assets/data/FAQs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../../CartContext';

const Home = () => {
  const textContent = [
    'Unlock your World "get mobile data anywhere with our prepaid and unlimited eSIM plans for international travel',
  ];

  const [selectedCountry, setSelectedCountry] = useState('');
  const [showPlans, setShowPlans] = useState(false);
   const { addToCart } = useCart();
  

  // Sample data for eSIM plans
  const countryPlans = {
    Pakistan: [
      { data: '3 GB', duration: '10 Days', price: '$6.79 USD', discount: 'IBX OFF' },
      { data: '5 GB', duration: '10 Days', price: '$8.49 USD', discount: 'IBX OFF' },
      { data: '10 GB', duration: '10 Days', price: '$12.74 USD', discount: 'IBX OFF' },
      { data: '20 GB', duration: '10 Days', price: '$20.39 USD', discount: 'IBX OFF', recommended: true },
      { data: '40 GB', duration: '10 Days', price: '$30.59 USD', discount: 'IBX OFF' },
    ],
    Canada: [
      { data: '1 GB', duration: '7 Days', price: '$9.99 USD', discount: 'IBX OFF' },
      { data: '3 GB', duration: '14 Days', price: '$19.99 USD', discount: 'IBX OFF' },
      { data: '5 GB', duration: '30 Days', price: '$29.99 USD', discount: 'IBX OFF', recommended: true },
    ],
    UK: [
      { data: '5 GB', duration: '15 Days', price: '$15.50 USD', discount: 'IBX OFF' },
      { data: '10 GB', duration: '30 Days', price: '$25.00 USD', discount: 'IBX OFF', recommended: true },
      { data: '20 GB', duration: '30 Days', price: '$35.00 USD', discount: 'IBX OFF' },
    ],
    Australia: [
      { data: '3 GB', duration: '10 Days', price: '$12.00 USD', discount: 'IBX OFF' },
      { data: '7 GB', duration: '20 Days', price: '$20.00 USD', discount: 'IBX OFF', recommended: true },
      { data: '15 GB', duration: '30 Days', price: '$30.00 USD', discount: 'IBX OFF' },
    ],
  };

  const handleSearch = () => {
    if (selectedCountry) {
      setShowPlans(true);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Ultra Modern Hero Section with Tailwind */}
      <section className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
                <HiSparkles className="mr-2 text-yellow-400" />
                World's Most Advanced eSIM Platform
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Connect</span> to the
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">World Instantly</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
                Experience seamless global connectivity with our premium eSIM technology. 
                Get instant activation, blazing-fast speeds, and unparalleled coverage across 200+ destinations worldwide.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-12 animate-fade-in-up animation-delay-600">
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">200+</div>
                  <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">1M+</div>
                  <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Uptime</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-800">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started Now
                    <FaRocket className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {/* <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
                  <span className="flex items-center justify-center">
                    <FaPlay className="mr-2 group-hover:scale-110 transition-transform" />
                    Watch Demo
                  </span>
                </button> */}
              </div>
              
              <div className="flex flex-wrap gap-6 text-blue-200 animate-fade-in-up animation-delay-1000">
                <div className="flex items-center">
                  <FaShieldAlt className="mr-2 text-cyan-400" />
                  <span className="text-sm">Bank-grade Security</span>
                </div>
                <div className="flex items-center">
                  <FaBolt className="mr-2 text-yellow-400" />
                  <span className="text-sm">Instant Activation</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="mr-2 text-green-400" />
                  <span className="text-sm">Global Coverage</span>
                </div>
              </div>
            </div>
            
            {/* Hero Visual Cards */}
            <div className="relative lg:block hidden">
              <div className="relative w-full h-96">
                {/* Card 1 - Main eSIM Card */}
                <div className="absolute top-0 left-0 w-72 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 animate-float">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <FaGlobe className="text-white text-xl" />
                    </div>
                    <div className="flex items-center text-green-400 text-sm font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Active
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Global eSIM</h3>
                  <p className="text-blue-200 text-sm mb-4">20GB • 30 Days</p>
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full animate-pulse" style={{width: '65%'}}></div>
                  </div>
                  <p className="text-blue-200 text-xs">13GB used</p>
                </div>
                
                {/* Card 2 - Speed Test */}
                <div className="absolute top-20 right-0 w-64 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 animate-float animation-delay-1000">
                  <div className="flex items-center mb-4">
                    <MdSpeed className="text-yellow-400 text-xl mr-2" />
                    <span className="text-white font-medium">5G Ultra</span>
                  </div>
                  <div className="flex items-end space-x-1 mb-4 h-16">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className={`bg-gradient-to-t from-pink-500 to-purple-500 rounded-sm animate-pulse`} style={{
                        width: '8px',
                        height: `${20 + i * 8}px`,
                        animationDelay: `${i * 200}ms`
                      }}></div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-3xl font-black text-white">892</span>
                    <span className="text-blue-200 text-sm ml-1">Mbps</span>
                  </div>
                </div>
                
                {/* Card 3 - Locations */}
                <div className="absolute bottom-0 left-8 w-68 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 animate-float animation-delay-2000">
                  <div className="flex items-center mb-4">
                    <MdLocationPin className="text-red-400 text-xl mr-2" />
                    <span className="text-white font-medium">Connected Locations</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-blue-200 text-sm">🇺🇸 United States</div>
                    <div className="text-blue-200 text-sm">🇬🇧 United Kingdom</div>
                    <div className="text-blue-200 text-sm">🇯🇵 Japan</div>
                    <div className="text-blue-200 text-sm font-medium">+197 more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section with Tailwind */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <HiSparkles className="mr-2" />
              Premium Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Connectra eSim</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of mobile connectivity with our cutting-edge eSIM technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <FaBolt className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">Instant Activation</h3>
                <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                  Get connected in seconds with our one-click activation system. No waiting, no hassle.
                </p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:text-yellow-300 transition-colors">
                  <FaCheck className="mr-2" />
                  <span>Ready in 60 seconds</span>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <MdSignalCellularAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">5G Ultra Speed</h3>
                <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                  Experience blazing-fast internet with our premium 5G network partnerships worldwide.
                </p>
                <div className="flex items-center text-cyan-600 font-medium group-hover:text-yellow-300 transition-colors">
                  <FaCheck className="mr-2" />
                  <span>Up to 1Gbps speed</span>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <FaGlobe className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">Global Coverage</h3>
                <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                  Stay connected across 200+ countries with our extensive network partnerships.
                </p>
                <div className="flex items-center text-green-600 font-medium group-hover:text-yellow-300 transition-colors">
                  <FaCheck className="mr-2" />
                  <span>200+ destinations</span>
                </div>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">Bank-Grade Security</h3>
                <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                  Your data is protected with military-grade encryption and advanced security protocols.
                </p>
                <div className="flex items-center text-red-600 font-medium group-hover:text-yellow-300 transition-colors">
                  <FaCheck className="mr-2" />
                  <span>256-bit encryption</span>
                </div>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <HiDeviceMobile className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">Multi-Device Support</h3>
                <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                  Use one eSIM across multiple devices with our advanced sharing technology.
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-yellow-300 transition-colors">
                  <FaCheck className="mr-2" />
                  <span>Up to 5 devices</span>
                </div>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <GiAutoRepair className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">Smart Auto-Renewal</h3>
                <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                  Never run out of data with our intelligent auto-renewal system that adapts to your usage.
                </p>
                <div className="flex items-center text-orange-600 font-medium group-hover:text-yellow-300 transition-colors">
                  <FaCheck className="mr-2" />
                  <span>AI-powered optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Modern Search Section with Tailwind */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <MdLocationPin className="mr-2" />
              Find Your Perfect Plan
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Search <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Destinations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your destination and travel dates to find the perfect eSIM plan for your journey
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100">
              <div className="grid md:grid-cols-3 gap-6 items-end">
                {/* Destination Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Destination</label>
                  <div className="relative">
                    <MdLocationPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl" />
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-900 font-medium"
                    >
                      <option value="">Select Destination</option>
                      <option value="Pakistan">🇵🇰 Pakistan</option>
                      <option value="Canada">🇨🇦 Canada</option>
                      <option value="UK">🇬🇧 United Kingdom</option>
                      <option value="Australia">🇦🇺 Australia</option>
                    </select>
                  </div>
                </div>
                
                {/* Travel Dates */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Travel Dates</label>
                  <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-4">
                    <BiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 text-xl" />
                    <div className="pl-8">
                      <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Arrival & Departure</div>
                      <div className="text-gray-900 font-semibold">20/12/2025 9:00pm</div>
                    </div>
                  </div>
                </div>
                
                {/* Search Button */}
                <div>
                  <button
                    onClick={handleSearch}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Search Plans
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Browse All Destinations - Better positioned and styled */}
            <div className="text-center mt-8">
              <p className="text-lg text-gray-600">
                Or browse all{" "}
                <NavLink 
                  to="/esim" 
                  className="group inline-flex items-center font-bold text-blue-600 hover:text-purple-600 transition-colors duration-300"
                >
                  <FaGlobe className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  200+ Destinations
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ultra Modern eSIM Plans Display with Tailwind */}
      {showPlans && (
        <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6">
                <FaCheck className="mr-2" />
                Available Plans
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                Our Best eSIM Plans for <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">{selectedCountry}</span>
              </h2>
              <p className="text-xl text-gray-600">Choose the perfect data plan for your journey</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {countryPlans[selectedCountry].map((plan, index) => (
                <div key={index} className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 ${
                  plan.recommended 
                    ? 'border-gradient-to-r from-yellow-400 to-orange-500 bg-gradient-to-br from-yellow-50 to-orange-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}>
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        <FaStar className="inline mr-1" />
                        RECOMMENDED
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    {/* Country Flag */}
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl">
                        {selectedCountry === 'Pakistan' && '🇵🇰'}
                        {selectedCountry === 'Canada' && '🇨🇦'}
                        {selectedCountry === 'UK' && '🇬🇧'}
                        {selectedCountry === 'Australia' && '🇦🇺'}
                      </span>
                    </div>
                    
                    {/* Country Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedCountry}</h3>
                    
                    {/* Data Amount */}
                    <div className="mb-4">
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {plan.data}
                      </div>
                      <div className="text-gray-600 font-medium">{plan.duration}</div>
                    </div>
                    
                    {/* Activation Date */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Activates</div>
                      <div className="text-gray-700 font-semibold">July 11, 2025</div>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-8">
                      <div className="text-3xl font-black text-gray-900">{plan.price}</div>
                      <div className="text-sm text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full inline-block mt-2">
                        {plan.discount}
                      </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                   {/* Add to Cart Button */}
<button
  onClick={() => {
    addToCart(plan);
    toast.success(`${plan.data} plan added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
      style: {
        backgroundColor: '#7c3aed', // purple-600
        color: '#fff',
        fontWeight: 'bold',
        borderRadius: '8px',
        fontSize: '14px',
        padding: '10px 16px',
      },
      icon: '🛒',
    });
  }}
  className="group w-full relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl hover:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transform hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden"
>
  {/* Animated background layer */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>
  
  {/* Shimmer effect */}
  <div className="absolute top-0 left-0 w-1/2 h-full bg-white/20 -skew-x-12 transform translate-x-[-150%] group-hover:translate-x-[300%] transition-all duration-700 ease-in-out"></div>
  
  {/* Button content */}
  <span className="relative z-10 flex items-center justify-center gap-2">
    <span className="group-hover:scale-110 transition-transform duration-300">
      Add to Cart
    </span>
    <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300 group-hover:scale-125" />
  </span>
</button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Recommended section divider */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-bold shadow-lg">
                <FaStar className="mr-2" />
                RECOMMENDED FOR 7 DAYS
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Popular Countries Section with Modern Tailwind */}
      <PopularCountries />
      
      {/* Get Travel eSIM Section with Modern Container */}
      <section className="py-0 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
     
          <GetTravelSim/>
       
      </section>
      
      {/* Modern Card Container with Tailwind Grid */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-purple-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-6">
              <HiSparkles className="mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Everything You <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Need</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive eSIM solutions for all your connectivity needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardData.map((data) => (
              <div key={data.id} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <span className="text-white text-2xl">{data.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{data.title}</h3>
                  <p className="text-gray-600 mb-6 group-hover:text-blue-100 transition-colors">
                    {data.description}
                  </p>
                  <div className="flex items-center text-purple-600 font-medium group-hover:text-yellow-300 transition-colors">
                    <FaArrowRight className="mr-2" />
                    <span>{data.linkText}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Ultra Modern FAQ Section with Tailwind */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 animate-fade-in-up">
              <HiSparkles className="mr-2 text-yellow-400" />
              Support Center
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up animation-delay-200">
              Your Questions,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Answered</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Find quick answers to common questions about our eSIM services and get the support you need
            </p>
          </div>
          
          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqData.slice(0, 6).map((faq, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All FAQs Button */}
          <div className="text-center mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center">
                View All Questions
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;