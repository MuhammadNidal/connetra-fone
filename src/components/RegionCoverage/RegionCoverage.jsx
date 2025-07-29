import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRegionGroupsById } from '../../api/region-groups-api';
import axiosInstance from '../../api/axiosInstance';
import { FiLoader, FiAlertCircle, FiMapPin } from 'react-icons/fi';

const RegionCoverage = () => {
  const { id } = useParams();
  const [region, setRegion] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegionData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const regionData = await getRegionGroupsById(id);
        setRegion(regionData);

        const allRegionsResponse = await axiosInstance.get('/regions');
        const regions = Array.isArray(allRegionsResponse.data)
          ? allRegionsResponse.data
          : allRegionsResponse.data.data || [];

        const filtered = regions.filter(dest =>
          dest.groups?.some(group => group.id === parseInt(id))
        );

        setDestinations(
          filtered.map(d => ({
            id: d.id,
            name: d.country?.trim(),
            flag: d.flag_url || `https://flagcdn.com/w20/${d.iso2?.toLowerCase()}.png`
          }))
        );
      } catch (error) {
        console.error("Error fetching region data:", error);
        setError("Failed to load region data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegionData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <FiLoader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-600 text-lg">Loading region coverage...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-red-50 to-pink-100">
        <FiAlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <p className="text-red-600 text-lg text-center">{error}</p>
      </div>
    );
  }

  if (!region) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <FiAlertCircle className="w-12 h-12 text-gray-500 mb-4" />
        <p className="text-gray-600 text-lg">Region not found</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-800">{region.name}</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              eSIM Coverage
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg leading-relaxed text-left">
                  Our <span className="font-semibold text-blue-800">{region.name}</span> eSIM Plans include fast 4G LTE and 5G
                  coverage <span className="italic text-gray-600">(where available)</span> throughout the following regions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                onClick={() => navigate(`/travel-esim/country/${destination.id}`)}
                className="group flex items-center gap-3 p-4 bg-white/60 hover:bg-white/90 border border-gray-200/50 hover:border-blue-300 rounded-xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative">
                  <img
                    src={destination.flag}
                    alt={`${destination.name} flag`}
                    className="w-8 h-8 rounded-full object-cover border-2 border-gray-300 group-hover:border-blue-400 transition-colors duration-300 shadow-sm"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/32x32/e5e7eb/6b7280?text=?';
                    }}
                  />
                  <div className="absolute -inset-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm transition-colors duration-300 truncate">
                  {destination.name}
                </span>
              </div>
            ))}
          </div>

          {destinations.length === 0 && (
            <div className="text-center py-12">
              <FiMapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No destinations found for this region.</p>
            </div>
          )}
        </div>

        {/* Statistics */}
        {destinations.length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg">
              <FiMapPin className="w-5 h-5" />
              <span className="font-semibold">
                {destinations.length} destination{destinations.length !== 1 ? 's' : ''} covered
              </span>
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
      `}</style>
    </div>
  );
};

export default RegionCoverage;
