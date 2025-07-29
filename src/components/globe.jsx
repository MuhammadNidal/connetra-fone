import  { useEffect, useRef, useState } from "react";
import Globe from "globe.gl";
import { FaSearch, FaGlobe } from "react-icons/fa";

const CoverageGlobe = () => {
  const globeRef = useRef(null);
  const globeInstance = useRef(null);
  const searchInputRef = useRef(null);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [ setSelectedLocation] = useState(null);

  // Load Google Maps API script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBdbrzESKzGCEplGJib-ipmKtMwfIdr1hQ&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initializeAutocomplete;
    script.onerror = () => console.error("Failed to load Google Maps API script");
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const initializeAutocomplete = () => {
    if (!searchInputRef.current) {
      console.error("Search input reference not available");
      return;
    }
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error("Google Maps API not loaded");
      return;
    }

    const autocompleteInstance = new window.google.maps.places.Autocomplete(
      searchInputRef.current,
      {
        types: ["(regions)"], // Changed from ["country", "geocode"] to valid type
        fields: ["geometry", "name", "formatted_address"],
      }
    );

    autocompleteInstance.addListener("place_changed", () => {
      const place = autocompleteInstance.getPlace();
      if (!place.geometry || !place.geometry.location) {
        console.log("No geometry available for place: ", place.name);
        return;
      }

      const location = place.geometry.location;
      const lat = location.lat();
      const lng = location.lng();

      if (globeInstance.current) {
        globeInstance.current.pointOfView(
          {
            lat,
            lng,
            altitude: 1.5,
          },
          1000
        );
      }

      setSearch(place.formatted_address || place.name);
      setSelectedLocation({ name: place.formatted_address || place.name, lat, lng });
      setSuggestions([]); // Clear suggestions after selection
    });
  };

  // Initialize globe and load country data
  useEffect(() => {
    const globe = Globe()(globeRef.current)
      .globeImageUrl(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo21fdv_bsOPeFtVRfAUr3sL2Cf3QARUzi3w&s"
      )
      .backgroundColor("rgba(15, 23, 42, 0.95)")
      .showAtmosphere(true)
      .atmosphereColor("#3b82f6")
      .atmosphereAltitude(0.15)
      .pointOfView({ lat: 20, lng: 0, altitude: 2.5 });

    globeInstance.current = globe;

    fetch(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const features = data.features;
        setCountries(features);

        features.forEach((feature, idx) => {
          if (idx % 2 === 0) feature.properties.color = "rgba(59, 130, 246, 0.8)";
          else if (idx % 3 === 1)
            feature.properties.color = "rgba(139, 92, 246, 0.8)";
          else feature.properties.color = "rgba(236, 254, 255, 0.9)";
        });

        globe
          .polygonsData(features)
          .polygonCapColor((d) => d.properties.color)
          .polygonSideColor(() => "rgba(30, 41, 59, 0.4)")
          .polygonStrokeColor(() => "#64748b")
          .labelsData(features)
          .labelText((d) => d.properties.name)
          .labelSize(1.2)
          .labelDotRadius(0.3)
          .labelColor(() => "#f59e0b")
          .labelResolution(2);
      })
      .catch((err) => console.error("Failed to load GeoJSON data", err));

    return () => {
      if (globeRef.current) {
        globeRef.current.innerHTML = "";
      }
      globeInstance.current = null;
    };
  }, []);

  // Handle local country search
  const handleSearch = (query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const countryMatches = countries
      .filter((country) =>
        country.properties.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5)
      .map((country) => ({
        name: country.properties.name,
        country,
        type: "country",
      }));

    setSuggestions(countryMatches);
  };

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, countries]);

  // Handle location selection
  const handleLocationSelect = (location) => {
    if (location.type === "country") {
      const country = location.country;
      const coordinates = country.geometry.coordinates;
      let lngSum = 0;
      let latSum = 0;
      let pointCount = 0;

      const flatCoords = coordinates.flat(Infinity);
      for (let i = 0; i < flatCoords.length; i += 2) {
        lngSum += flatCoords[i];
        latSum += flatCoords[i + 1];
        pointCount++;
      }

      if (pointCount > 0) {
        const centerLng = lngSum / pointCount;
        const centerLat = latSum / pointCount;

        if (globeInstance.current) {
          globeInstance.current.pointOfView(
            { lat: centerLat, lng: centerLng, altitude: 1.5 },
            1000
          );

          // Highlight the selected country
          const updatedCountries = countries.map((c) => ({
            ...c,
            properties: {
              ...c.properties,
              color:
                c === country ? "rgba(255, 0, 0, 0.7)" : c.properties.color,
            },
          }));

          globeInstance.current
            .polygonsData(updatedCountries)
            .polygonCapColor((d) => d.properties.color);
        }

        setSelectedLocation({ name: country.properties.name, lat: centerLat, lng: centerLng });
        setSearch(country.properties.name);
        setSuggestions([]);
      }
    }
  };

  return (
    <div className="relative w-full h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Modern Search Bar */}
      <div className="absolute top-6 left-6 z-10">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-4 min-w-[280px] transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <FaGlobe className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <label
                htmlFor="destination-search"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Search Countries or Places
              </label>
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="destination-search"
                  type="text"
                  ref={searchInputRef}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Enter country or place..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-gray-800 placeholder-gray-400 shadow-sm transition-all duration-200"
                />
                {suggestions.length > 0 && (
                  <ul
                    className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl mt-2 max-h-60 overflow-y-auto z-20 shadow-lg"
                  >
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleLocationSelect(item)}
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Globe Stats Overlay */}
      <div className="absolute top-6 right-6 z-10">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6 min-w-[200px]">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Global Coverage
          </h3>
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                200+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">
                Countries
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                400+
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">
                Networks
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                5G
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider">
                Speed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Title Overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Global Coverage
            </span>
          </h2>
          <p className="text-white/80 text-lg font-medium">
            Seamless connectivity across the world
          </p>
        </div>
      </div>

      {/* Globe Container */}
      <div ref={globeRef} className="w-full h-full relative z-0" />
    </div>
  );
};

export default CoverageGlobe;