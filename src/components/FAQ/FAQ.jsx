import { useState } from "react";
import Button from "../buttton/button";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = ({ faqData, heading }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  
  const handleNavigation = () => {
    navigate("/frequently_ask_question");
  }

  // Split the FAQs into two halves
  const mid = Math.ceil(faqData.length / 2);
  const leftFAQs = faqData.slice(0, mid);
  const rightFAQs = faqData.slice(mid);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {heading}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Two-column FAQ layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            {leftFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center group"
                  onClick={() => toggleExpand(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110">
                    {expanded === faq.id ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                  </div>
                </div>
                
                {expanded === faq.id && faq.answer && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="pt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {rightFAQs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div 
                  className="p-6 cursor-pointer flex justify-between items-center group"
                  onClick={() => toggleExpand(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110">
                    {expanded === faq.id ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
                  </div>
                </div>
                
                {expanded === faq.id && faq.answer && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="pt-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            label="Browse all Questions →" 
            size="large" 
            onClick={handleNavigation}
            variant="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
