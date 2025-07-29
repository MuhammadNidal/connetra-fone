import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRegions, getProductsByCountry } from "../../api/region-groups-api";
import { FaSearch, FaFilter, FaGlobe, FaSignal } from "react-icons/fa";

const AllEsimCountries = () => {
  const [regions, setRegions] = useState([]);
  const [filteredRegions, setFilteredRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await getRegions();
        const data = Array.isArray(response) ? response : response?.data || [];

        const processedRegions = data.map((region) => ({
          id: region.id,
          name: region.country?.trim() || "Unknown",
          iso2: region.iso2?.toLowerCase() || "",
          flag:
            region.flag_url ||
            (region.iso2
              ? `https://flagcdn.com/w40/${region.iso2.toLowerCase()}.png`
              : "https://via.placeholder.com/40"),
          groups: region.groups || [],
          continent: region.groups?.[0]?.name || "Other"
        }));

        // Sort alphabetically
        processedRegions.sort((a, b) => a.name.localeCompare(b.name));
        
        setRegions(processedRegions);
        setFilteredRegions(processedRegions);
      } catch (error) {
        console.error("Error fetching regions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegions();
  }, []);

  useEffect(() => {
    let filtered = regions;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(region =>
        region.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by continent
    if (selectedRegion !== "all") {
      filtered = filtered.filter(region =>
        region.continent.toLowerCase() === selectedRegion.toLowerCase()
      );
    }

    setFilteredRegions(filtered);
  }, [searchTerm, selectedRegion, regions]);

  const handleNavigation = async (id, iso2, countryName) => {
    try {
      const productsResponse = await getProductsByCountry(iso2);
      console.log("Country products:", productsResponse.data);
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

  const continents = ["all", "europe", "asia", "africa", "global", "americas"];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-lg font-medium text-gray-700">Loading destinations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaGlobe className="text-blue-600 text-3xl mr-3" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Choose Your Destination</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            All International eSIMs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected in 200+ destinations worldwide with our premium eSIM plans
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[200px]"
              >
                {continents.map(continent => (
                  <option key={continent} value={continent}>
                    {continent === "all" ? "All Regions" : continent.charAt(0).toUpperCase() + continent.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredRegions.length} of {regions.length} destinations
          </div>
        </div>

        {/* Countries Grid */}
        {filteredRegions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredRegions.map((country, index) => (
              <div
                key={index}
                onClick={() => handleNavigation(country.id, country.iso2, country.name)}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <div className="relative mb-3">
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-12 h-8 mx-auto rounded border object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/40")
                      }
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <FaSignal className="text-white text-xs" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {country.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {country.continent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Can't find your destination?</h3>
          <p className="text-lg mb-6 opacity-90">
            We're constantly adding new countries. Contact our support team for assistance.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllEsimCountries;
