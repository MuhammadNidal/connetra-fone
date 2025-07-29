import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import TravelEsim from './pages/TravelEsim/TravelEsim';
import Blog from './pages/Blog/Blog';
import Help from './pages/Help/Help';
import Coverage from './pages/Coverage/Coverage';
import HowItWork from './pages/HowItWork/HowItWork';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FAQ from './pages/FAQs/FAQs';
import TermsOfServieces from './pages/TermsOfServieces/TermsOfServieces';
import CompatiblePhone from './pages/CompatiblePhone/CompatiblePhone';
import HelpCenterMain from './pages/HelpCenterMain/HelpCenterMain';
import HelpCenterNavbar from './components/helpCenterNavbar/helpCenterNavbar';
import HelpCenterFooter from './components/helpCenterFooter/helpCenterFooter';
import LoginForm from './components/Login/Login';
import SignUpForm from './components/SignUp/SignUp';
import EsimAllCountries from './pages/EsimAllCountries/EsimAllCountries';
import AccountAnswer from './pages/AccountAnswer/AccountAnswer';
import HelpContentAnswer from './pages/HelpContentAnswer/HelpContentAnswer';
import Careers from './pages/Careers/careers'
import AboutUs from "../src/pages/aboutUs/aboutUs"
import Referral from './pages/Referral/Referral';
import AllDestinations from '../src/pages/AllDestinations/AllDestinations';
import AddToCart from './pages/AddToCart/AddToCart';
import { CartProvider } from './CartContext';
import AllPlans from './pages/AllPlans/AllPlans';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutScreen from "./pages/Checkout/Checkout";

// Import i18n configuration
import './i18n';

// Import context providers
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// In your routes configuration:



// ✅ Main layout for all pages except Help Center
const MainLayout = ({ children }) => {

  return (
    <div className="main-layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

// ✅ Separate layout for Help Center pages
const HelpCenterLayout = ({ children}) => {
  return (
    <div className="help-center-layout">
      <HelpCenterNavbar />
      {children}
      <HelpCenterFooter/>
    </div>
  );
};

// ✅ Check route and render the correct layout
const MainContent = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isHelpCenter = path.startsWith('/helpcenter');
  const noLayoutRoutes = ['/login', '/sign-up'];

  const isNoLayout = noLayoutRoutes.includes(path);

  if (isHelpCenter) {
    return (
      <HelpCenterLayout>
        <HelpCenterMain />
      </HelpCenterLayout>
    );
  }

  if (isNoLayout) {
    return (
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
      </Routes>
    );
  }

  return (
    <MainLayout>
         <ToastContainer position="top-rig" autoClose={2000} />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel-esim/country/:id" element={<TravelEsim />} />
        <Route path="/travel-esim/region/:id" element={<TravelEsim />} />
        <Route path="/how-it-work" element={<HowItWork />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/all-destinations" element={<AllDestinations />} />
        <Route path="/Referral" element={<Referral />} />
        <Route path="/help" element={<Help />} />
        <Route path="/frequently_ask_question" element={<FAQ />} />
        <Route path="/terms-of-services" element={<TermsOfServieces />} />
        <Route path="/esim-compatible-phone" element={<CompatiblePhone />} />
        <Route path="/esim" element={<EsimAllCountries />} />
        <Route path="/answer/:id" element={<AccountAnswer />} />
        <Route path="/help-answer/:id" element={<HelpContentAnswer />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/all-plans" element={<AllPlans />} />
        <Route path="/Checkout" element={<CheckoutScreen />} />

 
      </Routes>
    </MainLayout>
  );
};


const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <Router>
            <MainContent />
              <ToastContainer position="top-left" autoClose={2000} />
          </Router>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
