import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { text: "The agent answered me very quickly and resolved my inquiry.", author: "Sra JULIETA YANEZ", time: "36 minutes ago", rating: 5 },
    { text: "I messed up the installation. Within minutes of my chat bot.", author: "Dived Summers", time: "2 hours ago", rating: 5 },
    { text: "Had an issue with an esim. Jesslynn and Angie were quick to reply.", author: "Siman B", time: "8 hours ago", rating: 5 },
    { text: "Great service! My query was resolved quickly and professionally.", author: "Michael T", time: "1 day ago", rating: 5 },
    { text: "Quick response and effective solutions. Highly recommended!", author: "Sophia L", time: "2 days ago", rating: 5 },
    { text: "Superb customer service. The support team was fantastic!", author: "Ryan P", time: "3 days ago", rating: 5 },
    { text: "Had a smooth experience, and my problem was solved instantly.", author: "Emma W", time: "4 days ago", rating: 5 },
  ];

  const reviewsPerPage = 4; // Number of reviews visible at a time

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - reviewsPerPage : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - reviewsPerPage ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-green-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Trusted
            </span>{" "}
            by travelers, every day
          </h2>
          <p className="text-blue-200 text-lg hover:text-white transition-colors duration-300 cursor-pointer">
            Need help? Contact our 24/7 Support Team ›
          </p>
        </div>

        {/* Reviews Container */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 lg:gap-6">
            {/* Excellence Rating Card */}
            <div className="hidden lg:flex flex-col items-center bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-2">Excellent</h3>
              <div className="flex gap-1 mb-3">
                {renderStars(5)}
              </div>
              <p className="text-green-100 text-sm text-center">
                Based on 7,601 reviews
              </p>
            </div>

            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
              aria-label="Previous reviews"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            {/* Reviews Grid */}
            <div className="flex-1 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {reviews
                  .slice(currentIndex, currentIndex + reviewsPerPage)
                  .map((review, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
                    >
                      <div className="flex gap-1 mb-4 justify-center">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-200 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                        "{review.text}"
                      </p>
                      <div className="border-t border-white/20 pt-4">
                        <p className="font-semibold text-white text-sm mb-1">
                          {review.author}
                        </p>
                        <p className="text-blue-200 text-xs">{review.time}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-orange-500 hover:to-yellow-400 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
              aria-label="Next reviews"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Excellence Card */}
          <div className="lg:hidden mt-8 flex justify-center">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 shadow-2xl max-w-xs w-full text-center">
              <h3 className="text-xl font-bold text-white mb-2">Excellent</h3>
              <div className="flex gap-1 mb-3 justify-center">
                {renderStars(5)}
              </div>
              <p className="text-green-100 text-sm">
                Based on 7,601 reviews
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === Math.floor(currentIndex / reviewsPerPage)
                    ? "bg-yellow-400 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to review page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
