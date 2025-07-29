import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowRight, FaGlobe, FaStar } from 'react-icons/fa';
import Button from '../buttton/button';

// Local, Regional, and Global datasets
const localCountries = [
  { id: 22, name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
  { id: 12, name: "India", flag: "https://flagcdn.com/w320/in.png" },
  { id: 24, name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
  { id: 25, name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
  { id: 26, name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
  { id: 29, name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
  { id: 30, name: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
];

const regionalCountries = [
  { id: 23, name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
  { id: 27, name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
  { id: 28, name: "UAE", flag: "https://flagcdn.com/w320/ae.png" },
  { id: 31, name: "Qatar", flag: "https://flagcdn.com/w320/qa.png" },
  { id: 32, name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
  { id: 33, name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
  { id: 34, name: "Oman", flag: "https://flagcdn.com/w320/om.png" },
];

const globalCountries = [
  { id: 1, name: "United States", flag: "https://flagcdn.com/w320/us.png" },
  { id: 10, name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
  { id: 35, name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
  { id: 36, name: "France", flag: "https://flagcdn.com/w320/fr.png" },
  { id: 37, name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
  { id: 38, name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
  { id: 39, name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
];

const PopularCountries = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('LOCAL');

  const getCountries = () => {
    if (activeTab === 'LOCAL') return localCountries;
    if (activeTab === 'REGIONAL') return regionalCountries;
    if (activeTab === 'GLOBAL') return globalCountries;
    return [];
  };

  const handleNavigation = (id) => {
    navigate(`/travel-esim/country/${id}`);
  };

  const handleCountriesNavigation = () => {
    navigate("/esim");
  };

  const shouldShowButton = location.pathname === "/";

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-8 animate-fade-in-up">
            <FaGlobe className="mr-2" />
            Popular Destinations
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Connect to Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Favorite</span> Destinations
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay connected, wherever you travel, at affordable rates! Our eSIMs are trusted by over{" "}
            <span className="font-bold text-blue-600">10,000,000</span> people worldwide.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {['LOCAL', 'REGIONAL', 'GLOBAL'].map((tab) => (
              <button
                key={tab}
                className={`relative px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform -translate-y-0.5'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-20 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {getCountries().slice(0, 6).map((country, index) => (
              <div
                key={country.id}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-3 cursor-pointer"
                onClick={() => handleNavigation(country.id)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  {/* Flag Container */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                      <img
                        src={country.flag}
                        alt={`${country.name} Flag`}
                        loading="lazy"
                        className="w-12 h-8 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/48x32/e5e7eb/6b7280?text=🌍";
                        }}
                      />
                    </div>
                    
                    {/* Popular Badge for certain countries */}
                    {['United States', 'United Kingdom', 'Canada', 'Australia'].includes(country.name) && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                        <FaStar className="inline w-3 h-3" />
                      </div>
                    )}
                  </div>
                  
                  {/* Country Name */}
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-2">
                    {country.name}
                  </h3>
                  
                  {/* Pricing hint */}
                  <p className="text-xs text-gray-500 group-hover:text-blue-100 transition-colors duration-300">
                    From $9.99
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                    <FaArrowRight className="mx-auto text-white w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* See All Button */}
        {shouldShowButton && (
          <div className="text-center">
            <button
              onClick={handleCountriesNavigation}
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <FaGlobe className="mr-3" />
                Explore All 200+ Destinations
                <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Stats below button */}
            <div className="flex justify-center items-center mt-8 space-x-8 text-sm text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-black text-blue-600">200+</div>
                <div className="text-xs uppercase tracking-wider">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-purple-600">10M+</div>
                <div className="text-xs uppercase tracking-wider">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-green-600">99.9%</div>
                <div className="text-xs uppercase tracking-wider">Uptime</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default PopularCountries;


// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Button from "../buttton/button";
// import { getRegions } from "../../api/region-groups-api";
// import "./popularCountries.css";

// const PopularCountries = () => {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [activeGroup, setActiveGroup] = useState("Global");
//   const navigate = useNavigate();
//   const location = useLocation();

//   const shouldShowButton = location.pathname === "/";

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await getRegions();
//         const data = Array.isArray(response) ? response : response?.data || [];

//         // Format and map countries from API
//         const formatted = data.map((country) => ({
//           id: country.id,
//           name: country.country?.trim() || "Unknown",
//           iso2: country.iso2?.toLowerCase(),
//           flag: country.flag_url || `https://flagcdn.com/w80/${country.iso2?.toLowerCase()}.png`,
//           groups: country.groups?.map((g) => g.name) || [],
//         }));

//         setCountries(formatted);
//       } catch (error) {
//         console.error("Failed to fetch countries:", error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   useEffect(() => {
//     // Filter countries based on selected group
//     const filtered = countries.filter((c) =>
//       c.groups.includes(activeGroup)
//     );
//     setFilteredCountries(filtered);
//   }, [activeGroup, countries]);

//   const handleNavigation = (id) => {
//     navigate(`/travel-esim/${id}`);
//   };

//   const handleCountriesNavigation = () => {
//     navigate("/esim");
//   };

//   const groupTabs = ["Global", "Europe", "Caribbean"];

//   return (
//     <div className="popular-countries">
//       <h2 className="title">Popular Countries</h2>
//       <p className="subtitle">
//         Stay connected, wherever you travel, at affordable rates! Our eSIMs are
//         trusted by over 10,000,000 people worldwide.
//       </p>

//       <div className="tabs-container">
//         <div className="tabs">
//           {groupTabs.map((group) => (
//             <button
//               key={group}
//               className={`tab ${activeGroup === group ? "active" : ""}`}
//               onClick={() => setActiveGroup(group)}
//             >
//               {group.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="countries-container">
//         <div className="countries">
//           {filteredCountries.map((country) => (
//             <div
//               key={country.id}
//               className="country-card"
//               onClick={() => handleNavigation(country.id)}
//             >
//               <img
//                 src={country.flag}
//                 alt={`${country.name} Flag`}
//                 loading="lazy"
//                 className="country-flag"
//                 onError={(e) => {
//                   e.target.src = "https://via.placeholder.com/40";
//                 }}
//               />
//               <p className="country-name">{country.name}</p>
//             </div>
//           ))}
//         </div>

//         {shouldShowButton && (
//           <Button
//             label="See all →"
//             variant="primary"
//             size="medium"
//             className="pc-button"
//             onClick={handleCountriesNavigation}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default PopularCountries;