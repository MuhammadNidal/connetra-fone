import React from 'react';
import { FaArrowRight, FaPlay, FaApple, FaAndroid, FaWifi, FaInfinity, FaGlobe, FaShield } from 'react-icons/fa';
import PropTypes from 'prop-types';

const HeroSection = ({ 
  imageSrc, 
  textContent, 
  label = "Get Started",
  showStats = true,
  showFeatures = true,
  variant = "default"
}) => {
  const stats = [
    { value: "200+", label: "Countries" },
    { value: "1M+", label: "Happy Travelers" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" }
  ];

  const features = [
    { icon: FaInfinity, text: "Unlimited Plans", color: "text-accent-500" },
    { icon: FaWifi, text: "Fast 5G Data", color: "text-secondary-500" },
    { icon: FaApple, text: "iPhone Compatible", color: "text-gray-600" },
    { icon: FaAndroid, text: "Android Compatible", color: "text-green-500" },
  ];

  if (variant === "minimal") {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-20 lg:py-32">
        <div className="absolute inset-0">
          <img 
            src={imageSrc} 
            alt="Hero Background" 
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/60"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
            {Array.isArray(textContent) ? textContent[0] : textContent}
          </h1>
          
          <button className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-600 hover:scale-105">
            {label}
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt="Hero Background" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 hidden lg:block animate-float">
        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <FaGlobe className="h-8 w-8 text-accent-400" />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
        <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
          <FaShield className="h-8 w-8 text-secondary-400" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Unlock Your World</span>
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl max-w-2xl">
              {Array.isArray(textContent) ? textContent[0] : textContent || 
               "Get mobile data anywhere with our prepaid and unlimited eSIM plans for international travel. No contracts, no surprises."}
            </p>

            {/* Features */}
            {showFeatures && (
              <div className="mt-8 grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-white">
                    <div className={`rounded-lg bg-white/10 p-2`}>
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-600 hover:scale-105 hover:shadow-xl">
                {label}
                <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              {/* <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 group">
                <FaPlay className="h-4 w-4 transition-transform group-hover:scale-110" />
                Watch Demo
              </button> */}
            </div>

            {/* Stats */}
            {showStats && (
              <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Visual Element */}
          <div className="relative lg:justify-self-end">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500/20 to-secondary-500/20 backdrop-blur-sm border border-white/20 animate-pulse"></div>
              
              {/* Inner Elements */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <FaGlobe className="h-16 w-16 text-white mx-auto mb-4 animate-float" />
                  <p className="text-white font-semibold">Global Coverage</p>
                  <p className="text-gray-300 text-sm">200+ Countries</p>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute top-4 right-8 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="rounded-lg bg-white/20 p-3 backdrop-blur-sm">
                  <FaWifi className="h-6 w-6 text-secondary-400" />
                </div>
              </div>
              
              <div className="absolute bottom-8 left-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="rounded-lg bg-white/20 p-3 backdrop-blur-sm">
                  <FaShield className="h-6 w-6 text-accent-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  textContent: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  showStats: PropTypes.bool,
  showFeatures: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'minimal']),
};

export default HeroSection;
