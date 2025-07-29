import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const FAQ = ({ faqData, heading = "Frequently Asked Questions", showViewAll = true, maxItems = 6 }) => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleViewAll = () => {
    navigate("/frequently_ask_question");
  };

  // Limit the number of FAQs displayed
  const displayedFAQs = maxItems ? faqData.slice(0, maxItems) : faqData;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
            <FaQuestionCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our eSIM services and global connectivity solutions.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFAQs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="group rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden"
            >
              <button
                onClick={() => toggleExpand(faq.id || index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
                aria-expanded={expanded === (faq.id || index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-primary-600 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${
                    expanded === (faq.id || index) ? 'rotate-180' : ''
                  }`}>
                    <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-primary-100 flex items-center justify-center transition-colors duration-200">
                      <FaChevronDown className={`w-4 h-4 transition-colors duration-200 ${
                        expanded === (faq.id || index) ? 'text-primary-600' : 'text-gray-600'
                      }`} />
                    </div>
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                expanded === (faq.id || index) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && faqData.length > maxItems && (
          <div className="text-center mt-10">
            <button
              onClick={handleViewAll}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-primary-200 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              View All FAQs
              <FaChevronDown className="w-4 h-4 rotate-270" />
            </button>
          </div>
        )}

        {/* Help CTA */}
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/help')}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Contact Support
            </button>
            <button
              onClick={() => navigate('/help')}
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              Help Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  faqData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  heading: PropTypes.string,
  showViewAll: PropTypes.bool,
  maxItems: PropTypes.number,
};

export default FAQ;
