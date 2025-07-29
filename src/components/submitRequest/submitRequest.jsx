import React, { useState } from "react";
import logo from "../../assets/conectrafonelogo.png";
import { FaSearch, FaChevronRight, FaHeadset, FaCreditCard, FaUser, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const SubmitRequest = () => {
  const [selectedService, setSelectedService] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    {
      value: "technical",
      label: "Technical Support",
      icon: <FaHeadset />,
      color: "from-blue-500 to-cyan-500",
      description: "Get help with eSIM setup, connectivity issues, and troubleshooting"
    },
    {
      value: "billing",
      label: "Billing",
      icon: <FaCreditCard />,
      color: "from-green-500 to-emerald-500",
      description: "Questions about payments, refunds, and account billing"
    },
    {
      value: "customer",
      label: "Customer Service",
      icon: <FaUser />,
      color: "from-purple-500 to-pink-500",
      description: "General inquiries and account assistance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header */}
      <header className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-white/70 space-x-2">
              <span className="hover:text-white cursor-pointer">ConnectraeSim</span>
              <FaChevronRight className="text-xs" />
              <span className="text-blue-400 font-medium">Submit a request</span>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white/80 text-sm font-medium mb-8">
              <FaPaperPlane className="mr-2" />
              Customer Support
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Submit a
              </span>
              <br />
              <span className="text-white">Request</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              For all Technical Support and Billing requests, please choose Customer Service for the fastest service.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search help articles or describe your issue..."
                className="w-full pl-16 pr-6 py-6 text-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white/95 backdrop-blur-lg shadow-2xl text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Selection */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Choose your support category
              </span>
            </h2>
            <p className="text-xl text-gray-600">Select the type of assistance you need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <button
                key={service.value}
                onClick={() => setSelectedService(service.value)}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border transform hover:-translate-y-3 hover:scale-105 ${
                  selectedService === service.value 
                    ? 'border-blue-500 ring-4 ring-blue-300' 
                    : 'border-gray-100 hover:border-blue-200'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {service.label}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {selectedService === service.value && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Submit Button */}
          {selectedService && (
            <div className="text-center">
              <button className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <FaPaperPlane className="mr-3" />
                Continue with {services.find(s => s.value === selectedService)?.label}
              </button>
            </div>
          )}
        </section>

        {/* Quick Links */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-center">
              <HiSparkles className="mr-3 text-yellow-500" />
              Quick Help Resources
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "eSIM Setup Guide",
              "Billing FAQ",
              "Troubleshooting",
              "Account Management"
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 cursor-pointer">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <HiSparkles className="text-white text-lg" />
                  </div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {item}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};



export default SubmitRequest;