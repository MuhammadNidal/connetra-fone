

const Careers = () => {
  return (
    <div className="max-w-6xl mt-28 mx-auto px-5 font-sans text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-12 px-4 text-center rounded-lg mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Join Our Team</h1>
        <p className="text-xl md:text-2xl opacity-90">We're building something amazing</p>
      </div>
      
      {/* Vacancy Status Card */}
      <div className="flex justify-center mb-16">
        <div className="bg-white rounded-xl shadow-xl p-10 text-center max-w-2xl w-full border-t-4 border-blue-400">
          {/* Phone Icon */}
          <div className="mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#4a6fa5" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-blue-500 mb-5">No Current Openings</h2>
          <p className="mb-4 leading-relaxed">
            We don't have any vacancies right now, but we're always looking for talented people to join our team in the future.
          </p>
          <p className="mb-6 leading-relaxed">
            Feel free to check back later or follow us on social media for updates!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:-translate-y-0.5">
              Back To Home
            </button>
            <button className="bg-white hover:bg-blue-50 text-blue-500 font-semibold py-3 px-6 rounded-lg border border-blue-500 transition-all hover:-translate-y-0.5">
              Contact Us Anyway
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

// export default Careers;