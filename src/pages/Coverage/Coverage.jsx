import { FaDownload, FaWifi, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { MdSignalCellularAlt } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import {  coverageCardData, popularDestinations } from "../../assets/data/data";
import Card from "../../components/Card/Card";
import ReadyToGo from "../../components/ReadyToGo/ReadyToGo";
import DataRoaming from "../../components/dataRoaming/dataRoaming";
// import CoverageMap from "../../components/CoverageMap/CoverageMap";
import mobile from "../../assets/HeroImages/mobile.png";
import CoverageGlobe from "../../components/globe";
import { useNavigate } from "react-router-dom";
import { getProductsByCountry } from "../../api/region-groups-api";
const Coverage = () => {
  const navigate = useNavigate();
  const title = [
    { text: " Roaming", className: "orange-text" },
    { text: " Coverage", className: "" },
  ];
  

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
  
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection
        title={title}
        heading="Compatible with"
        description="Roam like at home anywhere in the world with a Connectra Travel eSIM,
on one of the best 5G/4G LTE roaming networks."
        buttons={["IOS", "Android"]}
        images={[mobile]}
        backgroundColor="#1e293b"
      />
      
      {/*=================================== coverage feature section ======================== */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Coverage
              </span>
            </h1>
            
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg mb-8">
              <FaStar className="mr-2" />
              <span className="font-bold text-lg">Excellent</span>
            </div>
            
            <p className="text-2xl font-bold text-gray-700 mb-12">
              All eSIM Plans Include
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaWifi className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-gray-800">Wi-Fi Hotspot</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FaDownload className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-gray-800">Instant Activation</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MdSignalCellularAlt className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-gray-800">4G/5G Data</p>
              </div>
              
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GiAutoRepair className="text-white text-2xl" />
                </div>
                <p className="font-semibold text-gray-800">Optional Auto-Renew</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed text-lg">
                Coverage map information is provided by our partner networks and may
                not be 100% accurate. Coverage map information is not available for
                all regions. Combined 3G, 4G LTE, and 5G coverage information is shown
                for informational purposes only, and does not guarantee specific
                service availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*================================ global map section ======================= */}
    <section className="py-0 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
  </div>
  <div className="relative z-10">
    <CoverageGlobe />
  </div>
</section>
      {/*=============== better coverage country section ===========================*/}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg mb-8">
              <FaMapMarkerAlt className="mr-2" />
              <span className="font-semibold">Premium Coverage Available</span>
            </div>
            
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              In the following countries,
              <span className="font-bold text-gray-900 mx-2">4G LTE or better coverage is available</span>
              even if not shown on the map:
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {popularDestinations.map((country, id,iso2,name) => (
                <div
                key={id}
                  className="group bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
                
                            onClick={() => handleDestinationClick(id, iso2, name)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={country.flag} 
                        alt={country.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200 text-sm">
                      {country.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================== coverage card section ================================= */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Our Coverage?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-12"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {coverageCardData.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                hoverEffect={true}
                size="large"
                align="center"
                bgColor="default"
                shadow={true}
              />
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <HiSparkles className="mr-3 text-xl" />
              <span className="font-semibold text-lg">Need help? Contact us ›</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <DataRoaming/>
      </section>
      
      <ReadyToGo/>
    </div>
  );
};

export default Coverage;