import { useEffect, useState } from "react";
import { getRegions } from "../../api/region-groups-api";
import { 
  FiChevronDown, 
  FiChevronUp, 
  FiSearch, 
  FiMapPin, 
  FiGlobe,
  FiFilter 
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { 
  HiSparkles, 
  HiLocationMarker,
  HiOutlineGlobeAlt 
} from "react-icons/hi";
import { getProductsByCountry } from "../../api/region-groups-api";
const AllDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending"
  });
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRegions();
        const data = Array.isArray(response) ? response : response?.data || [];
        
        const formattedData = data.map(d => ({
          id: d.id,
          name: d.country?.trim(),
          iso2: d.iso2?.toLowerCase(),
          flag: d.flag_url || `https://flagcdn.com/w40/${d.iso2?.toLowerCase()}.png`,
          region: d.groups?.[0]?.name || "Other"
        }));
        
        setDestinations(formattedData);
        setFilteredDestinations(formattedData);
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle destination click
  const handleDestinationClick = async (id, iso2, countryName) => {
    try {
      const productsResponse = await getProductsByCountry(iso2.toLowerCase());
      navigate(`/travel-esim/country/${id}`, { 
        state: { 
          products: productsResponse.data?.products || [],
          countryCode: iso2,
          countryName: countryName,
          type: 'country'
        } 
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      navigate(`/travel-esim/country/${id}`, {
        state: { countryCode: iso2, countryName: countryName, type: 'country' }
      });
    }
  };
  // Apply search and filter
  useEffect(() => {
    let result = [...destinations];
    
    // Apply search
    if (searchTerm) {
      result = result.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filter
    if (activeFilter !== "all") {
      result = result.filter(d => 
        d.region.toLowerCase() === activeFilter.toLowerCase()
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    
    setFilteredDestinations(result);
  }, [searchTerm, activeFilter, sortConfig, destinations]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const regions = [...new Set(destinations.map(d => d.region))];

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
              <HiOutlineGlobeAlt className="mr-2" />
              Global Coverage
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                All
              </span>
              <br />
              <span className="text-white">Destinations</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover our extensive network of {filteredDestinations.length} destinations worldwide
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 text-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white/95 backdrop-blur-lg shadow-2xl text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FiFilter className="mr-3 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-900">Filter by Region</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              All Regions ({destinations.length})
            </button>
            {regions.map(region => (
              <button
                key={region}
                onClick={() => setActiveFilter(region)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === region
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {region} ({destinations.filter(d => d.region === region).length})
              </button>
            ))}
          </div>
        </section>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 rounded-full animate-spin"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
            </div>
            <p className="text-gray-600 text-lg font-medium mt-4">Loading destinations...</p>
          </div>
        ) : (
          <section>
            {/* Table Header */}
            <div className="bg-white rounded-t-3xl shadow-lg border border-gray-100 p-6">
              <div className="grid grid-cols-2 gap-6 font-bold text-gray-700">
                <div 
                  className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  onClick={() => requestSort("name")}
                >
                  <HiLocationMarker className="mr-2 text-blue-500" />
                  <span>Country</span>
                  {sortConfig.key === "name" && (
                    <div className="ml-2">
                      {sortConfig.direction === "ascending" ? 
                        <FiChevronUp className="text-blue-500" /> : 
                        <FiChevronDown className="text-blue-500" />
                      }
                    </div>
                  )}
                </div>
                <div 
                  className="flex items-center cursor-pointer hover:text-blue-600 transition-colors duration-200"
                  onClick={() => requestSort("region")}
                >
                  <FiGlobe className="mr-2 text-purple-500" />
                  <span>Region</span>
                  {sortConfig.key === "region" && (
                    <div className="ml-2">
                      {sortConfig.direction === "ascending" ? 
                        <FiChevronUp className="text-purple-500" /> : 
                        <FiChevronDown className="text-purple-500" />
                      }
                    </div>
                  )}
                </div>
              </div>
            </div>
            
           <div className="bg-white rounded-b-3xl shadow-lg border-l border-r border-b border-gray-100 max-h-96 overflow-y-auto">
      {filteredDestinations.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {filteredDestinations.map((destination) => (
            <div 
              key={destination.id} 
              onClick={() => handleDestinationClick(destination.id, destination.iso2, destination.name)}
              className="grid grid-cols-2 gap-6 p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src={destination.flag} 
                    alt={destination.name}
                    className="w-10 h-7 object-cover rounded-md shadow-md group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/40x30/e2e8f0/64748b?text=?';
                      e.target.className = 'w-10 h-7 object-cover rounded-md shadow-md bg-gray-200';
                    }}
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                </div>
                <span className="text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-200">
                  {destination.name}
                </span>
              </div>
              <div className="flex items-center">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  destination.region === 'Europe' ? 'bg-blue-100 text-blue-800' :
                  destination.region === 'Asia' ? 'bg-green-100 text-green-800' :
                  destination.region === 'Americas' ? 'bg-purple-100 text-purple-800' :
                  destination.region === 'Africa' ? 'bg-yellow-100 text-yellow-800' :
                  destination.region === 'Oceania' ? 'bg-cyan-100 text-cyan-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {destination.region}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
                <div className="text-center py-20">
                  <FiMapPin className="mx-auto text-6xl text-gray-300 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No destinations found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveFilter("all");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>

            {/* Stats Footer */}
            {filteredDestinations.length > 0 && (
              <div className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-black">{filteredDestinations.length}</div>
                    <div className="text-blue-100">Available Destinations</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-black">{regions.length}</div>
                    <div className="text-blue-100">Global Regions</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-black">24/7</div>
                    <div className="text-blue-100">Customer Support</div>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default AllDestinations;