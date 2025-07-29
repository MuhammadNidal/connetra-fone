import { FaSearch, FaStar, FaQuestionCircle, FaHeadset, FaBookOpen, FaCreditCard, FaArrowRight } from "react-icons/fa";
import { HiSparkles, HiLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";




const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const features2 = [
    {
      title: "FAQs",
      description: "Get answers to common ConnectaFone questions.",
      link: "/helpcenter/faqs",
      icon: <FaQuestionCircle />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "eSIM Help",
      description: "Get help installing and using your ConnectaFone eSIM.",
      link: "/helpcenter/esim-help",
      icon: <FaHeadset />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Account & Billing",
      description: "Get help with your ConnectaFone account and billing.",
      link: "/helpcenter/Account",
      icon: <FaCreditCard />,
      color: "from-purple-500 to-pink-500"
    }
  ];
 
  const features3 = [
    { title: "Which phones are compatible with ConnectaFone eSIMs?", link: "/helpcenter/compatible-phones", category: "Compatibility" },
    { title: "Does ConnectaFone record your Internet activity or location?", link: "/help/", category: "Privacy" },
    { title: "Unlimited Data Plan Usage Guidelines", link: "/help/data-plan-guidelines", category: "Plans" },
    { title: "What is the return policy?", link: "/help/return-policy", category: "Billing" },
    { title: "Message Not Working: Sending & Receiving SMS on iPhone", link: "/helpcenter/", category: "Troubleshooting" },
    { title: "eSIM Quick Start Guide: How to Install an eSIM", link: "/help/quick-start-guide", category: "Setup" },
    { title: "eSIM Connection Troubleshooting Guide", link: "/help/connection-troubleshooting", category: "Troubleshooting" },
    { title: "Report an unauthorized charge from ConnectaFone on your credit card", link: "/help/report-charge", category: "Billing" },
    { title: "Billing Overview for Business accounts", link: "/help/business-billing", category: "Business" },
    { title: "Managing Data Pools & Data Usage", link: "/help/manage-data", category: "Account" },
    { title: "Adding Users to Your Business Account", link: "/help/add-users", category: "Business" },
    { title: "Creating & Managing eSIMs", link: "/help/manage-esim", category: "Account" },
    { title: "Usage-based Billing Overview & Examples", link: "/help/usage-based-billing", category: "Billing" }
  ];

  const filteredArticles = features3.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header */}
      <header className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white/80 text-sm font-medium mb-8">
              <FaHeadset className="mr-2" />
              24/7 Support Available
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Find answers, get support, and learn everything about ConnectaFone eSIM services
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
                placeholder="Search help articles..."
                className="w-full pl-16 pr-6 py-6 text-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white/95 backdrop-blur-lg shadow-2xl text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Help Categories */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How can we help you?
              </span>
            </h2>
            <p className="text-xl text-gray-600">Choose a category to get started</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features2.map((feature, index) => (
              <Link to={feature.link} key={index}>
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold">
                    Learn more 
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Promoted Articles */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                <HiSparkles className="mr-3 text-yellow-500" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Promoted Articles
                </span>
              </h2>
              <div className="text-sm text-gray-500">
                {filteredArticles.length} articles found
              </div>
            </div>
            
            <div className="space-y-4">
              {filteredArticles.map((item, index) => (
                <Link to={item.link} key={index}>
                  <div className="group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaStar className="text-white text-sm" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors duration-200">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-3">
                            <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-blue-600 border border-blue-200">
                              {item.category}
                            </span>
                            <FaArrowRight className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaSearch className="text-gray-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No articles found</h3>
                <p className="text-gray-600">Try searching with different keywords</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenter;
