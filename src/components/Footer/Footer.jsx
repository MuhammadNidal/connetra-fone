
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHeart
} from "react-icons/fa";
import { Link } from "react-router-dom";  
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../contexts/ThemeContext';
import visa from "../../../public/images/visa.png"
import express from "../../../public/images/express.png"
import master from "../../../public/images/master.png"


const Footer = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 relative overflow-hidden transition-all duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={Logo} alt="Connectra eSim Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 dark:text-gray-400">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                <span className="text-sm">{t('footer.headquarters')}</span>
              </div>
              <div className="flex items-center text-gray-300 dark:text-gray-400">
                <FaEnvelope className="mr-3 text-green-400" />
                <span className="text-sm">{t('footer.email')}</span>
              </div>
              <div className="flex items-center text-gray-300 dark:text-gray-400">
                <FaPhone className="mr-3 text-purple-400" />
                <span className="text-sm">{t('footer.supportAvailable')}</span>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-6 relative">
              {t('footer.popularDestinations.title')}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { key: 'canada', value: t('footer.popularDestinations.canada') },
                { key: 'uk', value: t('footer.popularDestinations.uk') },
                { key: 'russia', value: t('footer.popularDestinations.russia') },
                { key: 'uae', value: t('footer.popularDestinations.uae') },
                { key: 'dubai', value: t('footer.popularDestinations.dubai') }
              ].map((destination) => (
                <li key={destination.key}>
                  <Link
                    to="/all-destinations"
                    className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 text-sm block py-1"
                  >
                    {destination.value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ConnectraeSim */}
          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-6 relative">
              {t('footer.connectraSim.title')}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/Referral" 
                  className="text-gray-300 dark:text-gray-400 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.connectraSim.referFriend')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-services" 
                  className="text-gray-300 dark:text-gray-400 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.connectraSim.termsOfService')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-Us" 
                  className="text-gray-300 dark:text-gray-400 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.connectraSim.aboutUs')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/career" 
                  className="text-gray-300 dark:text-gray-400 hover:text-green-400 dark:hover:text-green-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.connectraSim.careers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* eSIM */}
          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-6 relative">
              {t('footer.esim.title')}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/how-it-work" 
                  className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.esim.whatIsEsim')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/esim-compatible-phone" 
                  className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.esim.supportedDevices')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-work" 
                  className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.esim.howItWorks')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/frequently_ask_question" 
                  className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.esim.faqs')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.esim.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Social */}
          <div>
            <h3 className="text-xl font-bold text-white dark:text-gray-100 mb-6 relative">
              {t('footer.helpSocial.title')}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            </h3>
            <ul className="space-y-3 mb-6">
              <li>
                <Link 
                  to="/helpcenter" 
                  className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.helpSocial.helpCenter')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/esim-compatible-phone" 
                  className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.helpSocial.esimCompatiblePhones')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/helpcenter" 
                  className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.helpSocial.supportCenter')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/help/privacy-policy" 
                  className="text-gray-300 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors duration-300 text-sm block py-1"
                >
                  {t('footer.helpSocial.contactUs')}
                </Link>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-300 dark:text-gray-400 uppercase tracking-wider">{t('footer.helpSocial.followUs')}</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="Facebook"
                >
                  <FaFacebook className="text-white text-lg" />
                </a>
                <a 
                  href="https://www.instagram.com/connectraesim?igsh=cXkzN3Y1M2VwZzg=&utm_source=ig_contact_invite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="Instagram"
                >
                  <FaInstagram className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="Twitter"
                >
                  <FaTwitter className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-white text-lg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  title="YouTube"
                >
                  <FaYoutube className="text-white text-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
          <div className="flex items-center text-gray-400 dark:text-gray-500 text-sm">
  <span>{t('footer.copyright')}</span>
  <FaHeart className="mx-2 text-red-500 animate-pulse" />
  <span>
    {t('footer.madeBy')} <a href="https://itechtrack.com/" className="text-blue-500 dark:text-blue-400 hover:underline">{t('footer.techTrack')}</a>
  </span>
  </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 dark:text-gray-500 text-sm mr-4">{t('footer.paymentMethods')}</span>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded-lg p-2 shadow-lg">
                  <img src={visa} alt="Visa" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-lg">
                  <img src={express} alt="Express" className="h-6 w-auto" />
                </div>
                <div className="bg-white rounded-lg p-2 shadow-lg">
                  <img src={master} alt="Mastercard" className="h-6 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


