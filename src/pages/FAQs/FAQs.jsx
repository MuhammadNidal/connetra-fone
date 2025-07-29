import { FaStar, FaSearch, FaQuestionCircle, FaChevronRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Button from "../../components/buttton/button";
import { useState } from "react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const faqItems = [
    { question: "Which phones are compatible with Connectra  eSIMs?", category: "Compatibility" },
    { question: "Does Connectra record your Internet activity or location?", category: "Privacy" },
    { question: "Unlimited Data Plan Usage Guidelines", category: "Plans" },
    { question: "What is the return policy?", category: "Billing" },
    { question: "Is WiFi Hotspot / Internet Sharing included with Connectra eSIM phone?", category: "Features" },
    { question: "What if I need more than 30 days of data?", category: "Plans" },
    { question: "Where can I view my data usage?", category: "Account" },
    { question: "Can you activate an eSIM on more than one device?", category: "Setup" },
    { question: "Can you renew an eSIM automatically each month?", category: "Billing" },
    { question: "Can you buy an eSIM in advance, and activate it later?", category: "Setup" },
    { question: "Can I cancel any time?", category: "Billing" },
    { question: "Does Connectra offer physical SIM cards?", category: "Features" },
    { question: "How do upgrades and plan changes work?", category: "Plans" },
    { question: "Does an eSIM replace your current cell phone plan?", category: "Setup" },
    { question: "Will I get a local phone number with an eSIM?", category: "Features" },
    { question: "How secure is eSIM data?", category: "Privacy" },
    { question: "Are there any additional fees?", category: "Billing" },
    { question: "Is there a way to activate an eSim", category: "Setup" },
    { question: "Can I keep using my phone number with an eSIM?", category: "Features" },
    { question: "Can you have multiple eSIM packages installed on your phone?", category: "Compatibility" },
    { question: "Can you add data for multiple countries on one eSIM?", category: "Features" },
    { question: "How do you add more data to an existing eSIM?", category: "Account" },
  ];

  const filteredFAQs = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqItems.map(item => item.category))];

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header */}
      <header className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white/80 text-sm font-medium mb-8">
              <FaQuestionCircle className="mr-2" />
              Get Instant Answers
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-white">Questions</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Connectra eSIMs, data plans, and connectivity solutions
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
                placeholder="Search for answers..."
                className="w-full pl-16 pr-6 py-6 text-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white/95 backdrop-blur-lg shadow-2xl text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category, index) => (
            <div key={category} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <HiSparkles className="text-white text-xl" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm">{category}</h3>
                <p className="text-gray-500 text-xs mt-1">
                  {faqItems.filter(item => item.category === category).length} questions
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                All Questions ({filteredFAQs.length})
              </span>
            </h2>
            
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaStar className="text-white text-sm" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-200">
                          {item.question}
                        </p>
                        <div className="flex items-center space-x-3">
                          <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-600 border border-blue-200">
                            {item.category}
                          </span>
                          <FaChevronRight className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSearch className="text-gray-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
                <p className="text-gray-600">Try searching with different keywords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
