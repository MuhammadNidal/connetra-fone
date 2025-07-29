  import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { 
  FaMobileAlt, 
  FaQrcode, FaSignal, FaWifi, FaBolt, FaRedoAlt,
  FaCcVisa, FaCcMastercard, FaCcAmex, FaApple, FaGoogle
} from 'react-icons/fa';
import Card from '../../components/Card/Card';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import PricingCards from '../../components/europePlanPricing/europePlanPricing';
import ReadyToGo from '../../components/ReadyToGo/ReadyToGo';
import EsimPromotion from '../../components/EsimPromotion/EsimPromotion';
import Testimonials from '../../components/Testimonials/Testimonials';
import GetTravelSim from '../../components/getTravelSim/getTravelSim';
import RegionCoverage from '../../components/RegionCoverage/RegionCoverage';
import { getProductsByCountry, getProductsByRegion, getRegionGroupsById } from '../../api/region-groups-api';

const TravelEsim = () => {
  const { id, type } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [regionName, setRegionName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (location.state?.products) {
          setProducts(location.state.products);
          if (location.state.regionName) setRegionName(location.state.regionName);
          if (location.state.countryName) setCountryName(location.state.countryName);
          if (location.state.countryCode) {
            setSelectedCountry({
              name: location.state.countryName,
              iso2: location.state.countryCode,
              flag: `https://flagcdn.com/w40/${location.state.countryCode?.toLowerCase()}.png`
            });
          }
        } else {
          if (type === 'country') {
            const response = await getProductsByCountry(id.toLowerCase());
            const products = response.data?.products || [];
            setProducts(products);
            setCountryName(location.state?.countryName || 'Unknown');
            setSelectedCountry({
              name: location.state?.countryName || 'Unknown',
              iso2: id,
              flag: `https://flagcdn.com/w40/${id.toLowerCase()}.png`
            });
          } else if (type === 'region') {
            const response = await getRegionGroupsById(id);
            const regionNameForApi = response.data.name.toLowerCase();
            setRegionName(response.data.name);
            
            const productsResponse = await getProductsByRegion(regionNameForApi);
            const products = productsResponse.data?.products || productsResponse.products || [];
            setProducts(products);
          }
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id, type, location.state]);


  const displayName = countryName || regionName || (selectedCountry?.name || "Unknown");
  const displayFlag = selectedCountry?.flag || `https://flagcdn.com/w40/un.png`;

  const features1 = [
    { icon1: "fas fa-infinity", text: "Unlimited Plans" },
    { icon1: "fas fa-wifi", text: "Fast 5G/4G Data" },
    { icon1: "fab fa-apple", text: "iPhone", icon2: "fab fa-android", text2: "Android" },
  ];

  const features = [
    { icon: <FaWifi color='orange' />, text: "Wi-Fi Hotspot" },
    { icon: <FaBolt color='orange' />, text: "Instant Activation" },
    { icon: <FaSignal color='orange' />, text: "4G/5G Data" },
    { icon: <FaRedoAlt color='orange' />, text: "Optional Auto-Renew" }, 
  ];

  const paymentMethods = [
    { icon: <FaCcVisa size={45} color='orange' />, name: 'Visa' },
    { icon: <FaCcMastercard size={45} color='blue' />, name: 'MasterCard' },
    { icon: <FaCcAmex size={45} color='blue' />, name: 'American Express' },
    { icon: <FaApple size={45} color='black' />, name: 'Apple Pay' },
    { icon: <FaGoogle size={45} color='black' />, name: 'Google Pay' },
  ];

  const title = [
    { text: displayName, className: "orange-text" },
    { text: " eSIM Plans", className: "white-text" },
  ];

  const description = [
    { text: "Stay connected in ", className: "" },
    { image: displayFlag, width: 20, height: 15, alt: `${displayName} flag` },
    { text: ` ${displayName} with fast 5G internet,`, className: "" },
    { breakLine: true },
    { text: " no contracts, and no roaming fees!", className: "" },
  ];

 const plans = products.map(product => ({
    title: `${displayName} eSim`,
    data: product.data_quota_mb ? `${product.data_quota_mb / 1000} GB` : "N/A",
    img: displayFlag,
    subtitle: "eSIM Specification",
    description: product.name || "N/A",
    price: `$${product.rrp_usd || "0.00"}`,
    perGB: product.data_quota_mb && product.rrp_usd 
      ? `($${(product.rrp_usd / (product.data_quota_mb / 1000)).toFixed(2)}/GB)` 
      : "",
    buttonText: "Add to Cart",
    note: product.policy_name || "",
    coverage: `COVERAGE 4G/5G in ${product.countries_enabled?.length || 0} countries`,
    sim: "eSim",
  }));
const resolvedType = type || (location.pathname.includes('/country/') ? 'country' : 
                    (location.pathname.includes('/region/') ? 'region' : null));
  // if (isLoading) return <div>Loading plans for {displayName}...</div>;
  // if (error) return <div>No plans available for {displayName}. Please try again later or contact support.</div>;

  const additionalFeatures = [
    {
      icon: <FaMobileAlt color="lightblue" size="2em" />,
      title: "Choose a Plan",
      description: "Choose an Unlimited or Prepaid eSIM data plan in the country where you need connectivity.",
    },
    {
      icon: <FaQrcode color="lightblue" size="2em" />,
      title: "Scan QR Code",
      description: "Use your smartphone or eSIM-compatible device to scan the QR code we send you via email.",
    },
    {
      icon: <FaSignal color="lightblue" size="2em" />,
      title: "Connect to 4G or 5G",
      description: "Follow the prompts on your device to add your new international data plan, and say goodbye to roaming fees!",
    },
  ];

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-lg font-medium text-gray-700">Loading plans for {displayName}...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
      <div className="text-center max-w-md mx-auto p-8">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaSignal className="text-red-600 text-2xl" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">No Plans Available</h2>
        <p className="text-gray-600 mb-6">No plans available for {displayName}. Please try again later or contact support.</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <HeaderSection
        title={title}
        mapImage={type === 'region' ? null : selectedCountry.map} // Disable map for regions
        heading="Compatible with"
        description={
          <div className="text-left">
            {description.map((item, index) =>
              item.image ? (
                <img
                  key={index}
                  src={item.image}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  className="inline-block mx-1"
                />
              ) : item.breakLine ? (
                <br key={index} />
              ) : (
                <span key={index} className={`${item.className} text-white`}>
                  {item.text}
                </span>
              )
            )}
          </div>
        }
        features1={features1}
        buttons={["iPhone", "Android"]}
        backgroundColor="#1e293b"
      />
      
      <div className="container mx-auto px-4 py-8">
        <PricingCards  
          title={{ main: `${displayName} eSim`, sub: "Plans & Pricing" }} 
          features={features} 
          plans={plans} 
          paymentMethods={paymentMethods} 
        />
      </div>
      
      <GetTravelSim />
      <EsimPromotion />
      <Testimonials />
      
      {resolvedType === 'region' && <RegionCoverage />}
      
      {/* How to Get Started Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 py-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-slate-200/20 to-blue-200/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-medium mb-6">
              <FaQrcode className="mr-2" />
              Simple Setup Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
              How to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Get Started
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get connected in just 3 simple steps. Our streamlined process gets you online in minutes.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                {/* Icon Container */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl group-hover:bg-gradient-to-br group-hover:from-blue-400/20 group-hover:to-indigo-400/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
            <div className="relative">
              <div className="absolute top-0 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 opacity-30"></div>
              <div className="absolute top-0 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Setup Guide CTA */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                <FaQrcode className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Need Visual Instructions?
              </h3>
            </div>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              See Our{' '}
              <span className="relative inline-block">
                <span className="text-yellow-300 font-bold hover:text-yellow-200 cursor-pointer transition-colors duration-300 border-b-2 border-yellow-300 hover:border-yellow-200">
                  eSIM Setup Guide and Images
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-blue-100">
              <div className="flex items-center">
                <FaMobileAlt className="mr-2 text-yellow-300" />
                <span>Step-by-step photos</span>
              </div>
              <div className="flex items-center">
                <FaQrcode className="mr-2 text-yellow-300" />
                <span>QR code examples</span>
              </div>
              <div className="flex items-center">
                <FaWifi className="mr-2 text-yellow-300" />
                <span>Connection tips</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ReadyToGo />
    </div>
  );
};

export default TravelEsim;