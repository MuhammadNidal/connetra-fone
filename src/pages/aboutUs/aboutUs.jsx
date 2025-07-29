import React from 'react';
import {
  FaGlobeAmericas,
  FaTags,
  FaBolt,  
  FaMobileAlt,
  FaCheckCircle,
  FaPlane,
  FaLaptopCode,
  FaUserTie,
  FaSuitcase,
  FaSimCard,
  FaLightbulb,
  FaGlobe,
  FaMapMarkedAlt,
  FaFlag,
  FaEnvelope,
  FaComments,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaHeadset
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <HiSparkles className="mr-2 text-yellow-400" />
            About Connectra eSim
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Us</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-xl text-blue-100 leading-relaxed">
            <p>
              We are a proudly Canadian eSIM provider offering affordable and reliable global mobile connectivity. 
              Our mission is to keep travelers connected without the hassle of physical SIM cards or expensive roaming charges.
            </p>
            <p>
              With our easy-to-use platform and competitive rates, users can activate an eSIM within minutes 
              and enjoy seamless internet access in over 200 countries worldwide.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">200+</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">10M+</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5 Min</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-blue-200 text-sm font-medium uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <FaStar className="mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              A Smarter Way to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Travel Connected</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaGlobeAmericas, title: "Global Coverage in 200+ Countries", color: "from-blue-500 to-cyan-500" },
              { icon: FaTags, title: "Best Rates & No Hidden Fees", color: "from-green-500 to-emerald-500" },
              { icon: FaBolt, title: "Instant Setup — QR Code Ready", color: "from-yellow-500 to-orange-500" },
              { icon: FaMobileAlt, title: "Switch Networks Digitally", color: "from-purple-500 to-pink-500" },
              { icon: FaCheckCircle, title: "Trusted Canadian Support", color: "from-red-500 to-pink-500" }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300`}>
                    <feature.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-6">
              <FaUsers className="mr-2" />
              Who It's For
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Perfect for <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Every Traveler</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaPlane, title: "Tourists & Travelers", color: "from-blue-500 to-cyan-500" },
              { icon: FaLaptopCode, title: "Digital Nomads & Remote Workers", color: "from-green-500 to-emerald-500" },
              { icon: FaUserTie, title: "Business Professionals", color: "from-purple-500 to-indigo-500" },
              { icon: FaSuitcase, title: "Frequent Flyers", color: "from-orange-500 to-red-500" },
              { icon: FaSimCard, title: "Dual SIM Device Users", color: "from-pink-500 to-purple-500" }
            ].map((audience, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className={`w-12 h-12 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{audience.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full text-sm font-medium mb-6">
              <FaLightbulb className="mr-2" />
              How It Works
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Simple <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">3-Step Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { step: "01", title: "Choose a Plan", description: "Select your destination and data plan from our extensive collection of over 200 countries." },
              { step: "02", title: "Install eSIM", description: "Instantly receive a QR code via email and scan it with your eSIM-compatible device." },
              { step: "03", title: "Go Online", description: "Connect and use data immediately. No contracts, no roaming charges, just instant connectivity." }
            ].map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-2xl font-black text-white">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <FaArrowRight className="hidden md:block absolute top-10 -right-4 text-blue-400 text-2xl" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <p className="text-xl font-semibold text-gray-800">
              No contracts. No roaming. Just data when and where you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Plans Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-6">
              <FaGlobe className="mr-2" />
              Our Plans
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Perfect Plan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FaGlobe, title: "Global Plans", description: "Worldwide coverage with one simple plan", color: "from-blue-500 to-cyan-500" },
              { icon: FaMapMarkedAlt, title: "Regional Plans", description: "Europe, Asia, Americas coverage", color: "from-green-500 to-emerald-500" },
              { icon: FaFlag, title: "Country-specific Plans", description: "Local plans for specific destinations", color: "from-purple-500 to-pink-500" }
            ].map((plan, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <plan.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <FaHeadset className="mr-2 text-yellow-400" />
            Customer Support
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            We're Here to <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Help</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Need help? Our Canadian support team is ready to assist you with any questions or issues.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
              <a href="mailto:support@Connectraesim.com" className="text-cyan-300 hover:text-cyan-200 text-lg font-medium transition-colors">
                support@Connectraesim.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaComments className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-green-300 text-lg font-medium">9am–9pm EST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;