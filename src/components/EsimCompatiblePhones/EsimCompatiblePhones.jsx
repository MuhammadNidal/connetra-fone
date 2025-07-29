
import logo from "../../assets/logo.png";
import { FaSearch, FaChevronRight, FaMobile, FaApple, FaAndroid } from "react-icons/fa";

const EsimCompatiblePhones = () => {
  const sidebarItems = [
    { text: "Which phones are compatible with Connectra eSIMs?", active: true },
    { text: "Does Connectra eSIM record your Internet activity or location?" },
    { text: "Unlimited Data Plan Usage Guidelines" },
    { text: "What is the return policy?" },
    { text: "Is WiFi Hotspot / Internet Sharing included with Connectra eSIM plans?" },
    { text: "What if I need more than 30 days of data?" },
    { text: "Where can I view my data usage?" },
    { text: "Can you activate an eSim on more than one device?" },
    { text: "Can you renew an eSim automatically each month?" },
    { text: "Can you buy an eSIM in advance, and activate it later?" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-600 space-x-2">
            <span className="hover:text-blue-600 cursor-pointer">Connectra eSim</span>
            <FaChevronRight className="text-xs" />
            <span className="hover:text-blue-600 cursor-pointer">General</span>
            <FaChevronRight className="text-xs" />
            <span className="text-blue-600 font-medium">FAQ</span>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 shadow-lg text-lg"
                placeholder="Search for answers..."
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <FaMobile className="mr-3 text-blue-600" />
                Articles in this section
              </h3>
              <ul className="space-y-3">
                {sidebarItems.map((item, index) => (
                  <li key={index}>
                    <button className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                      item.active 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}>
                      {item.text}
                    </button>
                  </li>
                ))}
                <li>
                  <button className="w-full text-left p-3 text-blue-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium">
                    See More →
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        <main className="main-content">
          <h1>Which phones are compatible with  <br />Connectra eSIMs?</h1>

          <div className="author">
            <img src={logo} alt="Connectra eSim Logo" className="author-logo" />
            <div className="author-info">
                <h2>Connectra eSIM Support Team</h2><br />
                <p>3 months ago - Updated</p>
              </div>
            <button className="follow-btn">Follow</button>
          </div>
          <h2>eSIM Compatible Smartphones</h2>
          <br />
          <p>
            The following devices support eSIM installation via automatic online activation. If your device is not listed here,
            unfortunately, it will not work with eSIM packages.
          </p>
          <br />
          <p className="es-plz" >
            <b>Please note</b> that your device must be unlocked and free of any carrier restrictions in order to install eSIM data plans!
          </p>
          <br />
          <br />
          <h3 >iOS</h3>
          <p style={{ display: "flex", justifyContent: "flex-start",  }}>Apple iPhone</p>
          <div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
    <li>iPhone 16 Pro Max</li>
    <li>iPhone 16 Pro</li>
    <li>iPhone 16 Plus</li>
    <li>iPhone 16</li>
    <li>iPhone 15 Pro Max</li>
    <li>iPhone 15 Pro</li>
    <li>iPhone 15 Plus</li>
    <li>iPhone 15</li>
    <li>iPhone 14 Pro Max</li>
    <li>iPhone 14 Pro</li>
    <li>iPhone 14 Plus</li>
    <li>iPhone 14</li>
    <li>iPhone 13 Pro Max</li>
    <li>iPhone 13 Pro</li>
    <li>iPhone 13</li>
    <li>iPhone 12 Pro Max</li>
    <li>iPhone 12 Pro</li>
    <li>iPhone 12 mini</li>
    <li>iPhone 12</li>
    <li>iPhone 11 Pro Max</li>
    <li>iPhone 11 Pro</li>
    <li>iPhone 11</li>
    <li>iPhone XS</li>
    <li>iPhone XS Max</li>
    <li>iPhone XR</li>
    <li>iPhone SE 2nd Gen. (2020)</li>
    <li>iPhone SE 3rd Gen. (2022)</li>
  </ul>
</div>

        <br />
          <h3>Android</h3>
<p style={{ display: "flex", justifyContent: "flex-start", }}>Google Pixel</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Google Pixel 9 Pro / Pro XL</li>
  <li>Google Pixel 9</li>
  <li>Google Pixel 8 Pro</li>
  <li>Google Pixel 8 / 8a</li>
  <li>Google Pixel 7 Pro</li>
  <li>Google Pixel 7 / 7a</li>
  <li>Google Pixel 6 Pro</li>
  <li>Google Pixel 6 / 6a</li>
  <li>Google Pixel 5</li>
  <li>Google Pixel 4</li>
  <li>Google Pixel 4a</li>
  <li>Google Pixel 4 XL</li>
  <li>Google Pixel 3</li>
  <li>Google Pixel 3 XL</li>
  <li>Google Pixel 3a</li>
  <li>Google Pixel 3a XL</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start",  }}>Samsung Galaxy</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Samsung Galaxy S25 / 5G</li>
  <li>Samsung Galaxy S25+ / 5G</li>
  <li>Samsung Galaxy S25 Ultra / 5G</li>
  <li>Samsung Galaxy S24 / 5G</li>
  <li>Samsung Galaxy S24+ / 5G</li>
  <li>Samsung Galaxy S24 Ultra / 5G</li>
  <li>Samsung Galaxy S23 / 5G</li>
  <li>Samsung Galaxy S23+ / 5G</li>
  <li>Samsung Galaxy S23 Ultra / 5G</li>
  <li>Samsung Galaxy S23 FE</li>
  <li>Samsung Galaxy S22 / 5G</li>
  <li>Samsung Galaxy S22+ / 5G</li>
  <li>Samsung Galaxy S22 Ultra / 5G</li>
  <li>Samsung Galaxy S21 / 5G</li>
  <li>Samsung Galaxy S21+ / 5G</li>
  <li>Samsung Galaxy S21 Ultra / 5G</li>
  <li>Samsung Galaxy S20</li>
  <li>Samsung Galaxy S20+</li>
  <li>Samsung Galaxy S20 Ultra</li>
  <li>Samsung Galaxy Z Flip</li>
  <li>Samsung Galaxy Z Fold 2</li>
  <li>Samsung Galaxy Z Fold 3 5G</li>
  <li>Samsung Galaxy Z Flip 3 5G Fold</li>
  <li>Samsung Galaxy Z Flip 3 5G</li>
  <li>Samsung Galaxy Z Flip 4</li>
  <li>Samsung Galaxy Z Fold 4</li>
  <li>Samsung Galaxy Z Flip 5</li>
  <li>Samsung Galaxy Z Fold 5</li>
  <li>Samsung Galaxy A55 5G</li>
  <li>Samsung Galaxy A54 5G</li>
  <li>Samsung Galaxy A34 5G</li>
  <li>Samsung Galaxy Fold</li>
  <li>Samsung Galaxy Note20</li>
  <li>Samsung Galaxy Note20 Ultra</li>

<li><strong>NOTE:</strong> Samsung Galaxy <b>"FE"</b> models are <span style={{ color: "black" }}><b>NOT</b></span> <b>compatible</b>.</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start",  }}>Huawei</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Huawei P40</li>
  <li>Huawei P40 Pro</li>
  <li>Huawei Mate 40 Pro</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start",  }}>Motorola</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Motorola Razr (2019)</li>
  <li>Motorola Razr 5G</li>
  <li>Motorola Razr (2022)</li>
  <li>Motorola Razr 40</li>
  <li>Motorola Razr 40 Ultra</li>
  <li>Motorola Edge (2022)</li>
  <li>Motorola Edge 40</li>
  <li>Motorola Edge 40 Pro</li>
  <li>Motorola Edge 40 Neo</li>
  <li>Motorola Edge 50 Pro</li>
  <li>Motorola Edge 50 Fusion</li>
  <li>Motorola Edge 50 Ultra</li>
  <li>Motorola Moto G52J 5G</li>
  <li>Motorola Moto G53 5G</li>
  <li>Motorola Moto G53J 5G</li>
  <li>Motorola Moto G54 5G</li>
  <li>Motorola Moto G84</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start", }}>Oppo</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Oppo Find N2 Flip</li>
  <li>Oppo Find X3 Pro</li>
  <li>Oppo Find X5</li>
  <li>Oppo Find X5 Pro</li>
  <li>Oppo Reno 5 A</li>
  <li>Oppo A55s 5G</li>
  <li>Oppo Reno6 Pro 5G</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start",  }}>Nokia</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Nokia G60 5G</li>
  <li>Nokia X30 5G</li>
  <li>Nokia XR21</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start", }}>Xiaomi</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Xiaomi 12T Pro</li>
  <li>Xiaomi 13</li>
  <li>Xiaomi 13 Lite</li>
  <li>Xiaomi 13 Pro</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start",  }}>Honor</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Honor 90</li>
  <li>Honor Magic 3</li>
  <li>Honor Magic 3 Pro</li>
  <li>Honor Magic 3 Pro+</li>
  <li>Honor Magic 4 Pro</li>
</ul>
</div>
<br />
<p style={{ display: "flex", justifyContent: "flex-start",  }}>
  Microsoft
</p>
<div style={{ marginLeft: "20px" }}>
  <ul className="es-ul">
  <li>Surface Duo 2</li>
  <li>Surface Duo</li>
</ul>
</div>

        </main>
      </div>
      <div className="es-container">
      {/* Social Media Icons */}
      <div className="social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
<br />
<br />
      {/* Inquiry Section */}
      <p className="question">
        Have more questions? <a href="#">Submit a request</a>
      </p>

      <hr className="divider" />

      {/* Related Articles Section */}
      <div className="related-articles">
        <h3>Related articles</h3>
        <br />
        <ul>
          <li><a href="#">eSIM Quick Start Guide: How to Install an eSIM</a></li>
          <li><a href="#">Does Connectra eSIM record your Internet activity or location?</a></li>
          <li><a href="#">Activate an eSIM with Manual Activation Code</a></li>
          <li><a href="#">Unlimited Data Plan Usage Guidelines</a></li>
          <li><a href="#">What is the return policy?</a></li>
        </ul>
      </div>

      <hr  />
<br />
      {/* Comments Section */}
      <div className="comments">
        <h3>Comments</h3>
        <p className="comment-count">0 comments</p><br />
        <hr />
        <br />
        <p className="closed">Article is closed for comments.</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EsimCompatiblePhones;
// FAQ.js