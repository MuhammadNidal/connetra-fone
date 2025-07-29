import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGlobe, FaMapMarkerAlt, FaArrowRight, FaWifi } from 'react-icons/fa';
import { MdSignal4G } from 'react-icons/md';

// Sample data - replace with your API data
const countryGroups = {
  LOCAL: [
    { id: 22, name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png", price: "From $6.79", data: "3GB" },
    { id: 12, name: "India", flag: "https://flagcdn.com/w320/in.png", price: "From $8.99", data: "5GB" },
    { id: 24, name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png", price: "From $7.49", data: "3GB" },
    { id: 25, name: "Nepal", flag: "https://flagcdn.com/w320/np.png", price: "From $9.99", data: "5GB" },
    { id: 26, name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png", price: "From $8.49", data: "3GB" },
    { id: 29, name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png", price: "From $12.99", data: "5GB" },
  ],
  REGIONAL: [
    { id: 23, name: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png", price: "From $15.99", data: "10GB" },
    { id: 27, name: "Canada", flag: "https://flagcdn.com/w320/ca.png", price: "From $19.99", data: "15GB" },
    { id: 28, name: "UAE", flag: "https://flagcdn.com/w320/ae.png", price: "From $16.99", data: "10GB" },
    { id: 31, name: "Qatar", flag: "https://flagcdn.com/w320/qa.png", price: "From $14.99", data: "8GB" },
    { id: 32, name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png", price: "From $13.99", data: "8GB" },
    { id: 33, name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png", price: "From $15.49", data: "10GB" },
  ],
  GLOBAL: [
    { id: 1, name: "United States", flag: "https://flagcdn.com/w320/us.png", price: "From $24.99", data: "20GB" },
    { id: 10, name: "Australia", flag: "https://flagcdn.com/w320/au.png", price: "From $22.99", data: "15GB" },
    { id: 35, name: "Germany", flag: "https://flagcdn.com/w320/de.png", price: "From $18.99", data: "12GB" },
    { id: 36, name: "France", flag: "https://flagcdn.com/w320/fr.png", price: "From $19.99", data: "15GB" },
    { id: 37, name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png", price: "From $21.99", data: "15GB" },
    { id: 39, name: "Japan", flag: "https://flagcdn.com/w320/jp.png", price: "From $23.99", data: "18GB" },
  ]
};
