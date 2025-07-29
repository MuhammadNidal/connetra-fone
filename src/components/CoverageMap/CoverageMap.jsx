import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix the default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).toString(),
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).toString(),
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).toString(),
});

const CoverageMap = () => {
  const [searchText, setSearchText] = useState("");
  const position = [51.505, -0.09]; // Default map center coordinates

  const handleSearch = () => {
    alert(`Searching for: ${searchText}`);
    // Add logic to search and move map to the location
  };

  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      {/* Custom Search Input */}
      <div style={{
        position: "absolute",
        top: "5px",
        right: "10px",
        zIndex: 1000,
        // background: "white",
        padding: "5px",
        borderRadius: "5px",
        // boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
      }}>
        <input
          type="text"
          placeholder="Search location..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px 10px",
            width: "200px",
            marginRight: "5px"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            background: "#fab140",
            color: "white",
            border: "none",
            padding: "6px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup color="">
            A pretty popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CoverageMap;