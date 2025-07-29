import Logo from "../../assets/logo.png";
import { FaSearch, FaCalendarAlt, FaClock, FaTag, FaArrowRight, FaNewspaper } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useState } from "react";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "North America", "Technology", "Tutorial", "Security"];

  // eSIM-related blog data
  const blogPosts = [
    {
      id: 1,
      title: "Why eSIM is the Future of Travel Connectivity",
      excerpt: "Discover how eSIM  across borders without physical SIM cards.",
      category: "Technology",
      date: "June 10, 2024",
      readTime: "4 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7melh27Ho23XuznidCfJOpuCGAmhpUx71dQ&s"
    },
    {
      id: 2,
      title: "Best eSIM Plans for USA and Canada in 2024",
      excerpt: "Compare the top eSIM packages Conectra eSIM.",
      category: "North America",
      date: "May 28, 2024",
      readTime: "6 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFrFIIe-UG7FJg8xp6fhFIwPveH9MqNlokQ&s"
    },
    {
      id: 3,
      title: "How to Set Up Your Conectra eSIM in 3 Minutes",
      excerpt: "Step-by-step guide to instant connectivity.",
      category: "Tutorial",
      date: "May 15, 2024",
      readTime: "3 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNqA0bIhXrUdg3_f28lLgdYjBCJ5UjA76jw&s"
    },
    {
      id: 4,
      title: "eSIM vs Physical SIM: Which is Better for Digital Nomads?",
      excerpt: "We compare the pros and cons multiple countries.",
      category: "Comparison",
      date: "April 30, 2024",
      readTime: "5 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNqA0bIhXrUdg3_f28lLgdYjBCJ5UjA76jw&s"
    },
    {
      id: 5,
      title: "Top 5 Cities in America with Best eSIM Coverage",
      excerpt: "From New York to Los Angeles,eSIM connectivity.",
      category: "North America",
      date: "April 22, 2024",
      readTime: "4 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zSMINI28GQ-J8CSAKagz_eXlPZVG1Vo3Dg&s"
    },
    {
      id: 6,
      title: "Cross-Border Data: Using eSIM Between US and Canada",
      excerpt: "How to avoid roaming charges countries with a single eSIM plan.",
      category: "North America",
      date: "April 10, 2024",
      readTime: "5 min read",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljHYhYLfLVSSPH5apQTP0dMw31eq2la8bbA&s"
    },
    
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen mt-8 bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Header Section */}
      <header className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full text-white/80 text-sm font-medium mb-8">
            <FaNewspaper className="mr-2" />
            Latest eSIM Insights & Updates
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conectra eSIM
            </span>
            <br />
            <span className="text-white">Insights</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive guide to seamless digital connectivity across America, Canada, and beyond
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search eSIM articles, guides, and tutorials..."
                className="w-full pl-16 pr-6 py-6 text-lg border border-white/20 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white/95 backdrop-blur-lg shadow-2xl text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filters */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-xl'
                    : 'bg-white text-gray-600 hover:text-blue-600 shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPosts.map(post => (
            <article key={post.id} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
                    <FaTag className="mr-2" />
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200 group/btn">
                  Read Article
                  <FaArrowRight className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-12">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white/80 text-sm font-medium mb-6">
                <HiSparkles className="mr-2" />
                Stay Updated
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Stay Connected with 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Conectra
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Subscribe for the latest eSIM updates, travel tips, and exclusive North America data plan offers
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-2xl border border-white/20 focus:outline-none focus:ring-4 focus:ring-blue-300 bg-white/95 backdrop-blur-lg text-gray-800 placeholder-gray-500 text-lg"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Get eSIM Updates
                </button>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl filter blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <img 
                    src={Logo} 
                    alt="Conectra eSIM Logo" 
                    className="w-full h-auto max-h-48 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;