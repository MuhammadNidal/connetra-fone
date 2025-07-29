import { CompatibleCardData } from "../../assets/data/data";
import Card from "../../components/Card/Card";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import ReadyToGo from "../../components/ReadyToGo/ReadyToGo";
import { FaMobileAlt, FaApple, FaAndroid, FaCheck, FaSearch } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import FAQ from "../../components/FAQ/FAQ";
import { faqData } from '../../assets/data/FAQs';
import { useState } from "react";

const CompatiblePhone = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const title = [
    { text: " eSIM ", className: "orange-text" },
    { text: " compatible phone device", className: "" },
  ];

  const devicesData = [
    {
      category: "iPhones with eSIM",
      icon: <FaApple />,
      color: "from-gray-700 to-gray-900",
      devices: [
        "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16",
        "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
        "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14",
        "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13 mini", "iPhone 13",
        "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12 mini", "iPhone 12",
        "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
        "iPhone XS", "iPhone XS Max", "iPhone XR",
        "iPhone SE (2020)", "iPhone SE (2022)",
      ],
    },
    {
      category: "Google Phones with eSIM",
      icon: <FaAndroid />,
      color: "from-green-500 to-emerald-500",
      devices: [
        "Google Pixel 9 Pro Fold", "Google Pixel 9 Pro / Pro XL", "Google Pixel 9",
        "Google Pixel 8 Pro", "Google Pixel 8 / 8a",
        "Google Pixel 7 Pro", "Google Pixel 7 / 7a",
        "Google Pixel 6 Pro", "Google Pixel 6 / 6a", "Google Pixel 5",
        "Google Pixel 4 / 4a", "Google Pixel 3 XL", "Google Pixel 3",
        "Google Pixel 3a XL", "Google Pixel 3a",
      ],
    },
    {
      category: "Samsung Phones with eSIM",
      icon: <FaAndroid />,
      color: "from-blue-500 to-cyan-500",
      devices: [
        "Samsung Galaxy S25 / 5G", "Samsung Galaxy S25+ / 5G", "Samsung Galaxy S25 Ultra / 5G",
        "Samsung Galaxy S24 / 5G", "Samsung Galaxy S24+ / 5G", "Samsung Galaxy S24 Ultra / 5G",
        "Samsung Galaxy S23 / 5G", "Samsung Galaxy S23+ / 5G", "Samsung Galaxy S23 Ultra / 5G",
        "Samsung Galaxy S22 / 5G", "Samsung Galaxy S22+ / 5G", "Samsung Galaxy S22 Ultra / 5G",
      ],
    },
    {
      category: "Microsoft Surface",
      icon: <FaMobileAlt />,
      color: "from-purple-500 to-pink-500",
      devices: ["Surface Duo 2", "Surface Duo"],
    },
  ];

  const allCategories = ["All", ...devicesData.map(data => data.category)];

  const filteredDevices = devicesData.filter(categoryData => {
    if (selectedCategory === "All") return true;
    return categoryData.category === selectedCategory;
  }).map(categoryData => ({
    ...categoryData,
    devices: categoryData.devices.filter(device =>
      device.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(categoryData => categoryData.devices.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <HeaderSection
        title={title}
        heading="Compatible with"
        description="Check our list of eSIM compatible phones to see if your unlocked smartphone, tablet, laptop, or other device is eSIM compatible."
        buttons={["IOS", "Android"]}
        backgroundColor="#1e293b"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg mb-8">
              <FaMobileAlt className="mr-2" />
              Device Compatibility Check
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                eSIM Compatible
              </span>
              <br />
              <span className="text-gray-900">Devices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your device in our comprehensive list of eSIM-supported phones
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for your device..."
                className="w-full pl-16 pr-6 py-4 text-lg border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white shadow-lg text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:text-blue-600 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Device Categories */}
        <div className="space-y-12 mb-20">
          {filteredDevices.map((categoryData, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${categoryData.color} rounded-2xl flex items-center justify-center mr-6`}>
                    <span className="text-white text-2xl">{categoryData.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{categoryData.category}</h3>
                    <p className="text-gray-600">{categoryData.devices.length} compatible devices</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryData.devices.map((device, deviceIndex) => (
                    <div
                      key={deviceIndex}
                      className="group bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-purple-50 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <FaCheck className="text-white text-sm" />
                        </div>
                        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                          {device}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDevices.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaMobileAlt className="text-gray-400 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No devices found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Get Started Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Get started in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5 minutes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CompatibleCardData.map((feature, index) => (
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
        </section>

        {/* FAQ Section */}
        <div className="mb-20">
          <FAQ faqData={faqData} heading={"Your Questions, Answered"} />
          <div className="text-center mt-8">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200">
              See answers to more FAQs
              <span className="ml-2 transform transition-transform duration-200 hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      <ReadyToGo />
    </div>
  );
};

export default CompatiblePhone;
