import React, { useState, useEffect } from 'react';
import { FaWifi, FaDownload, FaArrowRight, FaCheck, FaGlobe, FaShield, FaZap } from 'react-icons/fa';
import { MdLocationPin, MdSignalCellularAlt } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { GiAutoRepair } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../CartContext';
import PopularCountries from "../../components/popularCountries/popularCountries";
import GetTravelSim from "../../components/getTravelSim/getTravelSim";
import { cardData } from "../../assets/data/data";
import Card from "../../components/Card/CardModern";
import FAQ from "../../components/FAQ/FAQModern";
import { faqData } from '../../assets/data/FAQs';
import Hero from '../../assets/HeroImages/heroslider.jpg';

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [showPlans, setShowPlans] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const { addToCart } = useCart();

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const features = [
    { icon: FaWifi, title: 'Wi-Fi Hotspot', description: 'Share your connection' },
    { icon: FaZap, title: 'Instant Activation', description: 'Ready in seconds' },
    { icon: MdSignalCellularAlt, title: '4G/5G Data', description: 'High-speed internet' },
    { icon: GiAutoRepair, title: 'Auto-Renew', description: 'Optional convenience' },
  ];

  const benefits = [
    'No roaming charges',
    'Instant activation',
    '200+ destinations',
    '24/7 customer support',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Hero})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block">Unlock Your World</span>
              <span className="block bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
              Get mobile data anywhere with our prepaid and unlimited eSIM plans for international travel. 
              No contracts, no surprises.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-accent-600 hover:scale-105 hover:shadow-xl">
                Get Started
                <FaArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="animate-float rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <FaGlobe className="h-8 w-8 text-accent-400" />
          </div>
        </div>
        <div className="absolute top-20 right-20 hidden lg:block">
          <div className="animate-float rounded-2xl bg-white/10 p-4 backdrop-blur-sm" style={{ animationDelay: '1s' }}>
            <FaShield className="h-8 w-8 text-secondary-400" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features"
        data-animate
        className={`section-spacing ${isVisible.features ? 'animate-in-view' : 'animate-on-scroll'}`}
      >
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Your Travel eSIM Includes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need for seamless connectivity worldwide
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group card p-8 text-center transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Choose Your Destination
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find the perfect eSIM plan for your next adventure
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="glass-effect rounded-2xl p-8 shadow-xl">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination
                  </label>
                  <div className="relative">
                    <MdLocationPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <select
                      value={selectedCountry}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 transition-all duration-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select Destination</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">UK</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Dates
                  </label>
                  <div className="relative">
                    <BiCalendar className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <div className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 transition-all duration-200 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500/20">
                      <div className="text-sm text-gray-600">Arrival & Departure</div>
                      <div className="font-medium">20/12/2025 9:00pm</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={handleSearch}
                    className="w-full rounded-lg bg-primary-600 py-3 px-6 text-white font-semibold transition-all duration-200 hover:bg-primary-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    Search Plans
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Browse all{' '}
                <NavLink
                  to="/esim"
                  className="font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                >
                  200+ Destinations
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Display */}
      {showPlans && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl container-padding">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Best eSIM Plans for {selectedCountry}
            </h2>
            
            <div className="space-y-4">
              {countryPlans[selectedCountry].map((plan, index) => (
                <div
                  key={index}
                  className={`card p-6 ${plan.recommended ? 'ring-2 ring-primary-500' : ''}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left">
                      <div>
                        <div className="text-sm text-gray-500">Country</div>
                        <div className="font-semibold text-gray-900">{selectedCountry}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Data</div>
                        <div className="font-semibold text-gray-900">{plan.data}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="font-semibold text-gray-900">{plan.duration}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Price</div>
                        <div className="font-semibold text-primary-600">{plan.price}</div>
                      </div>
                    </div>
                    
                   <button
  onClick={() => {
    addToCart(plan);
    toast.success(`${plan.data} plan added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    });
  }}
  className="relative px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg whitespace-nowrap transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-purple-500/30 active:translate-y-0 active:shadow-inner"
>
  <span className="relative z-10 flex items-center justify-center gap-1">
    Add to Cart
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
      />
    </svg>
  </span>
  {/* Pulse effect on hover */}
  <span className="absolute inset-0 rounded-lg bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
</button>
                  </div>
                  
                  {plan.recommended && (
                    <div className="mt-4">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                        <FaCheck className="mr-1 h-3 w-3" />
                        Recommended for 7 days
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Connectra eSim?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Experience seamless connectivity with our premium eSIM solutions designed for modern travelers.
              </p>
              
              <div className="mt-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-600">
                      <FaCheck className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="btn-primary">
                  Learn More
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 p-8">
                <div className="h-full w-full rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <FaGlobe className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <PopularCountries />

      {/* Get Travel eSIM */}
      <GetTravelSim />

      {/* Cards Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((data) => (
              <Card
                key={data.id}
                icon={data.icon}
                title={data.title}
                description={data.description}
                linkText={data.linkText}
                link={data.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ faqData={faqData} heading={"Your Questions, Answered"} />
    </div>
  );
};

export default Home;
