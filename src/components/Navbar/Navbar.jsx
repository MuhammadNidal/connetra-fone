import { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaShoppingCart,
  FaGlobe,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaUser,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { useCart } from '../../CartContext';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { getRegions, getRegionGroups, getProductsByCountry, getProductsByRegion, getRegionGroupsById } from "../../api/region-groups-api";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef(null);
  const [regionGroups, setRegionGroups] = useState([]);
  const [popularDestinations, setPopularDestinations] = useState([]);

  const { cartItems } = useCart();
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentLanguage, languages, changeLanguage, getCurrentLanguage, isRTL } = useLanguage();

  // Helper function to check if a path is active
  const isActiveLink = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 990);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRegions();
        const data = Array.isArray(response) ? response : response?.data || [];
        const processedData = data.map((region) => ({
          id: region.id, 
          name: region.country?.trim() || "Unknown Country",
          iso3: region.iso3 || "",
          iso2: region.iso2 || "",
          flag: region.flag_url || `https://flagcdn.com/w20/${region.iso2?.toLowerCase()}.png`,
          groups: region.groups || [],
          is_popular: region.groups?.some((group) => group.name === "Global"),
        }));
        const popular = processedData.filter((region) => region.is_popular).slice(0, 40);
        setPopularDestinations(popular);
      } catch (error) {
        console.error("Failed to fetch regions:", error);
        setPopularDestinations([]);
      }
    };
    fetchData();
  }, []);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRegionGroups();
        const data = Array.isArray(response) ? response : response.data || [];
        setRegionGroups(data);
      } catch (error) {
        console.error("Failed to fetch region groups:", error);
        setRegionGroups([]);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveDropdown(null);
    }
  };

const handleRegionGroupClick = async (regionId, regionName) => {
  try {
    const regionResponse = await getRegionGroupsById(regionId);
    const regionNameForApi = regionResponse.data.name.toLowerCase();
    const products = await getProductsByRegion(regionNameForApi);
    console.log("Region products in Navbar:", products); // Debug log
    console.log("Navigating with state:", {
      products,
      regionName: regionResponse.data.name,
      type: 'region'
    }); // Debug log
  navigate(`/travel-esim/region/${regionId}`, {
  state: {
    products: products.data?.products || products.products || [],
    regionName: regionResponse.data.name,
    type: 'region',
    // Add these for consistency with country pages
    regionId: regionId,
    regionCode: regionResponse.data.code // or whatever identifier you need
  }
});
  } catch (error) {
    console.error("Failed to fetch region products:", error);
    navigate(`/travel-esim/region/${regionId}`, {
      state: { regionName, type: 'region' }
    });
  }
  setIsMenuOpen(false);
  setActiveDropdown(null);
};

  const handleDestinationClick = async (id, iso2, countryName) => {
    try {
      const productsResponse = await getProductsByCountry(iso2.toLowerCase());
      console.log("Country products:", productsResponse.data);
      navigate(`/travel-esim/country/${id}`, { 
        state: { 
          products: productsResponse.data.products || [],
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
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 mb-6 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={closeAll} className="flex items-center">
              <img src={Logo} alt="Connectra eSim Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              onClick={closeAll}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink("/") 
                  ? "text-blue-600 font-semibold" 
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
              {isActiveLink("/") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </Link>

            {/* Travel eSIM Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink("/travel-esim") || isActiveLink("/all-destinations")
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-700 hover:text-blue-600 group-hover:text-blue-600"
                }`}
                onMouseEnter={() => setActiveDropdown("travel")}
              >
                Travel eSIM
                <FaChevronDown className="ml-1 text-xs transform group-hover:rotate-180 transition-transform duration-300" />
                {(isActiveLink("/travel-esim") || isActiveLink("/all-destinations")) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </button>
              
              {activeDropdown === "travel" && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 transform opacity-0 animate-fade-in-up"
                  style={{ animation: "fadeInUp 0.3s ease-out forwards" }}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-2 gap-8">
                    {/* Regional Plans */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        Regional eSIM Plans
                      </h4>
                      <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                        {regionGroups.map((region) => (
                          <button
                            key={region.id}
                            onClick={() => handleRegionGroupClick(region.id, region.name)}
                            className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group text-left"
                          >
                            <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                              {region.name}
                            </span>
                            {region.tag && (
                              <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                                region.tag === "NEW" 
                                  ? "bg-green-100 text-green-600" 
                                  : "bg-blue-100 text-blue-600"
                              }`}>
                                {region.tag}
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Popular Destinations */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-3"></div>
                        Popular Destinations
                      </h4>
                      <div className="space-y-2 max-h-80 overflow-y-auto custom-scrollbar">
                        {popularDestinations.slice(0, 15).map((destination) => (
                          <button
                            key={destination.id}
                            onClick={() => handleDestinationClick(destination.id, destination.iso2, destination.name)}
                            className="w-full flex items-center p-3 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 group text-left"
                          >
                            <img
                              src={destination.flag}
                              alt={destination.name}
                              className="w-6 h-4 rounded object-cover mr-3"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/20";
                              }}
                            />
                            <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                              {destination.name}
                            </span>
                          </button>
                        ))}
                      </div>
                      <Link 
                        to="/all-destinations" 
                        onClick={closeAll}
                        className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <FaGlobe className="mr-2" />
                        All 200+ Destinations
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/how-it-work" 
              onClick={closeAll}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink("/how-it-work") 
                  ? "text-blue-600 dark:text-blue-400 font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {t('navbar.howItWorks')}
              {isActiveLink("/how-it-work") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </Link>

            <Link 
              to="/coverage" 
              onClick={closeAll}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink("/coverage") 
                  ? "text-blue-600 dark:text-blue-400 font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {t('navbar.coverage')}
              {isActiveLink("/coverage") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </Link>

            <Link 
              to="/Blog" 
              onClick={closeAll}
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                isActiveLink("/Blog") 
                  ? "text-blue-600 dark:text-blue-400 font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {t('navbar.blog')}
              {isActiveLink("/Blog") && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              )}
            </Link>

            {/* Help Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActiveLink("/helpcenter") || isActiveLink("/frequently_ask_question") || isActiveLink("/esim-compatible-phone")
                    ? "text-blue-600 dark:text-blue-400 font-semibold" 
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                }`}
                onMouseEnter={() => setActiveDropdown("help")}
              >
                {t('navbar.help')}
                <FaChevronDown className="ml-1 text-xs transform group-hover:rotate-180 transition-transform duration-300" />
                {(isActiveLink("/helpcenter") || isActiveLink("/frequently_ask_question") || isActiveLink("/esim-compatible-phone")) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                )}
              </button>
              
              {activeDropdown === "help" && (
                <div 
                  className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 transition-colors duration-300"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="space-y-2">
                    <Link
                      to="/frequently_ask_question"
                      onClick={closeAll}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
                    >
                      FAQs
                    </Link>
                    <Link
                      to="/esim-compatible-phone"
                      onClick={closeAll}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
                    >
                      eSIM Compatible Phone
                    </Link>
                    <Link
                      to="/helpcenter"
                      onClick={closeAll}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
                    >
                      Support Center
                    </Link>
                    <Link
                      to="/help/privacy-policy"
                      onClick={closeAll}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/terms-of-services"
                      onClick={closeAll}
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-300 font-medium"
                    >
                      Terms of Services
                    </Link>
                    <div className="px-4 py-3 text-sm text-gray-500 border-t border-gray-100 mt-2">
                      support@ConnectraeSim.com
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            
            <Link 
              to="/add-to-cart" 
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              title={t('navbar.viewCart')}
            >
              <FaShoppingCart className="text-lg" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartItems.length}
                </span>
              )}
            </Link>
            
            <Link 
              to="/login" 
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              title={t('navbar.login')}
            >
              <FaUser className="text-sm" />
              <span className="text-sm">{t('navbar.login')}</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <FaTimes className="text-xl" />
              ) : (
                <FaBars className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay - positioned before the menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden" 
          onClick={closeAll}
        />
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 relative z-50">
          <div className="px-4 pt-4 pb-6 space-y-2 mobile-menu-container">
            <Link 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                closeAll();
              }}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 mobile-nav-item touch-manipulation ${
                isActiveLink("/") 
                  ? "bg-blue-50 text-blue-600 font-semibold" 
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile Travel eSIM */}
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("travel");
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 touch-manipulation ${
                  isActiveLink("/travel-esim") || isActiveLink("/all-destinations")
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Travel eSIM
                {activeDropdown === "travel" ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>
              
              {activeDropdown === "travel" && (
                <div className="mt-2 ml-4 space-y-2">
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-600 mb-2">Regional Plans</h5>
                    {regionGroups.slice(0, 5).map((region) => (
                      <button
                        key={region.id}
                        onClick={() => handleRegionGroupClick(region.id, region.name)}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                  <Link
                    to="/all-destinations"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/all-destinations");
                      closeAll();
                    }}
                    className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    All 200+ Destinations
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/how-it-work" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/how-it-work");
                closeAll();
              }}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 mobile-nav-item touch-manipulation ${
                isActiveLink("/how-it-work") 
                  ? "bg-blue-50 text-blue-600 font-semibold" 
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              How it Works
            </Link>

            <Link 
              to="/coverage" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/coverage");
                closeAll();
              }}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 mobile-nav-item touch-manipulation ${
                isActiveLink("/coverage") 
                  ? "bg-blue-50 text-blue-600 font-semibold" 
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Coverage
            </Link>

            <Link 
              to="/Blog" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/Blog");
                closeAll();
              }}
              className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 mobile-nav-item touch-manipulation ${
                isActiveLink("/Blog") 
                  ? "bg-blue-50 text-blue-600 font-semibold" 
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Blog
            </Link>

            {/* Mobile Help */}
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("help");
                }}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 touch-manipulation ${
                  isActiveLink("/helpcenter") || isActiveLink("/frequently_ask_question") || isActiveLink("/esim-compatible-phone")
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Help
                {activeDropdown === "help" ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>
              
              {activeDropdown === "help" && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link
                    to="/frequently_ask_question"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/frequently_ask_question");
                      closeAll();
                    }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/esim-compatible-phone"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/esim-compatible-phone");
                      closeAll();
                    }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    eSIM Compatible Phone
                  </Link>
                  <Link
                    to="/helpcenter"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/helpcenter");
                      closeAll();
                    }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    Support Center
                  </Link>
                  <Link
                    to="/help/privacy-policy"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/help/privacy-policy");
                      closeAll();
                    }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/terms-of-services"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/terms-of-services");
                      closeAll();
                    }}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                  >
                    Terms of Services
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* Touch-friendly mobile styles */
        @media (max-width: 990px) {
          .touch-manipulation {
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Ensure mobile links are easily tappable */
          .mobile-nav-item {
            min-height: 48px;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
          
          /* Prevent accidental scrolling during navigation */
          .mobile-menu-container {
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            overscroll-behavior-y: contain;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;