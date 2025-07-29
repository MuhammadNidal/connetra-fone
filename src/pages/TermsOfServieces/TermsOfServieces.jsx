
import React from 'react';
import { 
  AiOutlineFileText,
  AiOutlineDown,
  AiOutlineCalendar,
  AiOutlineEye,
  AiOutlineSafety
} from "react-icons/ai";
import { 
  FaChevronRight,
  FaDownload,
  FaExternalLinkAlt,
  FaLock,
  FaShieldAlt
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import ReadyToGo from "../../components/ReadyToGo/ReadyToGo";
const TermsOfServieces = () => {
  const title = [
    { text: "Terms of Service", className: "termsHeading" }
  ];

  const termsDocuments = [
    {
      title: "Master Services Agreement (MSA)",
      description: "Comprehensive agreement outlining the terms and conditions for using Connectra eSim services worldwide.",
      icon: <AiOutlineFileText />,
      color: "from-blue-500 to-cyan-500",
      lastUpdated: "January 15, 2025",
      size: "2.3 MB",
      type: "PDF"
    },
    {
      title: "Acceptable Use Policy (AUP)",
      description: "Guidelines and restrictions for proper use of our network and services to ensure fair usage for all customers.",
      icon: <FaShieldAlt />,
      color: "from-green-500 to-emerald-500",
      lastUpdated: "December 10, 2024",
      size: "1.8 MB",
      type: "PDF"
    },
    {
      title: "Data Processing Addendum (DPA)",
      description: "GDPR-compliant data processing terms and conditions for handling personal and business data.",
      icon: <FaLock />,
      color: "from-purple-500 to-pink-500",
      lastUpdated: "November 22, 2024",
      size: "1.5 MB",
      type: "PDF"
    },
    {
      title: "CCPA Notice",
      description: "California Consumer Privacy Act compliance notice detailing your privacy rights and our data practices.",
      icon: <AiOutlineEye />,
      color: "from-orange-500 to-red-500",
      lastUpdated: "October 05, 2024",
      size: "890 KB",
      type: "PDF"
    },
    {
      title: "Privacy Policy",
      description: "Comprehensive privacy policy explaining how we collect, use, and protect your personal information.",
      icon: <FaShieldAlt />,
      color: "from-indigo-500 to-purple-500",
      lastUpdated: "September 18, 2024",
      size: "2.1 MB",
      type: "PDF"
    }
  ];

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header */}
      <header className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white/80 text-sm font-medium mb-8">
              <HiSparkles className="mr-2" />
              Legal Documentation
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Terms of
              </span>
              <br />
              <span className="text-white">Service</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              The legal policies below make up the Connectra eSim Terms of Service.
              <br />
              Please review these documents to understand your rights and responsibilities.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction Section */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Legal Framework
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive legal framework ensures transparency, security, and compliance 
                across all Connectra eSim services. Each document below addresses specific aspects 
                of our service relationship with you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Compliant</h3>
                <p className="text-gray-600">GDPR, CCPA, and industry standard compliant policies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AiOutlineEye className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent</h3>
                <p className="text-gray-600">Clear, understandable terms with no hidden clauses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AiOutlineCalendar className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Updated Regularly</h3>
                <p className="text-gray-600">Policies reviewed and updated to reflect current laws</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Documents */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Legal Documents
              </span>
            </h2>
            <p className="text-xl text-gray-600">Click on any document to view or download</p>
          </div>
          
          <div className="space-y-6">
            {termsDocuments.map((doc, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 overflow-hidden"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start lg:items-center space-x-6 mb-6 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-r ${doc.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-2xl">{doc.icon}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                          {doc.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {doc.description}
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <AiOutlineCalendar className="mr-2" />
                            Last updated: {doc.lastUpdated}
                          </div>
                          <div className="flex items-center">
                            <AiOutlineFileText className="mr-2" />
                            {doc.type} • {doc.size}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors duration-200">
                        <AiOutlineEye className="mr-2" />
                        View
                      </button>
                      <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105">
                        <FaDownload className="mr-2" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Have questions about our terms?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our legal team is here to help clarify any aspects of our terms of service. 
              Don't hesitate to reach out if you need assistance understanding any policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <FaExternalLinkAlt className="mr-3" />
                Contact Legal Team
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                <AiOutlineFileText className="mr-3" />
                Request Clarification
              </button>
            </div>
          </div>
        </section>
      </div>

      <ReadyToGo />
    </div>
  );
};

export default TermsOfServieces