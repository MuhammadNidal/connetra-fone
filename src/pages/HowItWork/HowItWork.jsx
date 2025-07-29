import { faqData, featuresData } from "../../assets/data/data";
import Card from "../../components/Card/Card";
import DataRoaming from "../../components/dataRoaming/dataRoaming";
import mobile from "../../assets/HeroImages/mobile.png";
import privacy from "../../assets/HeroImages/who-it-work.jpg";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import ReadyToGo from "../../components/ReadyToGo/ReadyToGo";
import { NavLink } from "react-router-dom";
import { 
  FaArrowRight, 
  FaCheck, 
  FaQrcode, 
  FaWifi, 
  FaShieldAlt, 
  FaLock, 
  FaGlobe,
  FaMobileAlt,
  FaDownload
} from 'react-icons/fa';
import { HiSparkles, HiLightningBolt } from 'react-icons/hi';

const HowItWork = () => {
  const title = [
    { text: " eSIM", className: "orange-text" },
    { text: " vs. Physical SIM", className: "" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <HeaderSection
        title={title}
        heading="Compatible with"
        description="Forget about SIM cards - welcome to the next generation of mobile connectivity. See how eSIM works"
        buttons={["IOS", "Android"]}
        images={[mobile]}
        backgroundColor="#1e293b"
      />

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8">
            <HiLightningBolt className="mr-2 text-yellow-400" />
            Our Technology
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Fast.
            </h1>
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Flexible.
            </h1>
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              The Future.
            </h1>
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm font-medium mb-8">
                <FaShieldAlt className="mr-2" />
                Privacy
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Speed + <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Security</span>.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We take privacy seriously. Our eSIM plans provide unmatched security for all your mobile device traffic, 
                including tethered devices, without exposing it to the public Internet or other devices.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FaShieldAlt, text: "VPN Ready", color: "from-blue-500 to-cyan-500" },
                  { icon: FaLock, text: "End-to-end Encryption", color: "from-green-500 to-emerald-500" },
                  { icon: FaGlobe, text: "100% Private", color: "from-purple-500 to-pink-500" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
                <img
                  src={privacy}
                  alt="Privacy and Security"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
                
                {/* Floating Security Badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Roaming Component */}
      <DataRoaming />

      {/* Getting Started Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
              <HiSparkles className="mr-2" />
              Getting Started
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Getting started is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">easy</span>
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose a plan",
                description: "Choose a monthly or prepaid data plan in the region where you need connectivity.",
                link: "/esim",
                linkText: "eSIM Plans & Pricing ›",
                icon: FaGlobe,
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "2",
                title: "Scan QR code",
                description: "Use your smartphone or another eSIM-compatible device to scan the QR code we send you via email.",
                link: "#",
                linkText: "Detailed Instructions ›",
                icon: FaQrcode,
                color: "from-green-500 to-emerald-500"
              },
              {
                step: "3",
                title: "Connect to 4G or 5G",
                description: "Follow the prompts on your device to add your new international data plan. That's it!",
                link: "#",
                linkText: "Detailed Instructions ›",
                icon: FaWifi,
                color: "from-purple-500 to-pink-500"
              }
            ].map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-black text-white">{step.step}</span>
                </div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                
                <NavLink 
                  to={step.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  {step.linkText}
                  <FaArrowRight className="ml-2 text-sm" />
                </NavLink>
                
                {index < 2 && (
                  <FaArrowRight className="hidden md:block absolute top-10 -right-4 text-blue-400 text-2xl" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Frequently asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.slice(0, 6).map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">{faq.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink 
              to="/frequently_ask_question"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              See answers to more FAQs
              <FaArrowRight className="ml-3" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Ready To Go Component */}
      <ReadyToGo />
    </div>
  );
};

export default HowItWork;
