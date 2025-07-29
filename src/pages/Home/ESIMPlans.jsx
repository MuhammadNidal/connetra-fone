// import  { useState } from 'react';
// import { FaWifi, FaDownload } from 'react-icons/fa';
// import { MdSignalCellularAlt, MdLocationPin } from 'react-icons/md';
// import { GiAutoRepair } from 'react-icons/gi';
// import { BiCalendar } from 'react-icons/bi';
// // import Button from './Button'; // Assuming you have a Button component
// import './ESIMPlans.css'; // Create this CSS file for styling
// // 
// const ESIMPlans = () => {
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [showPlans, setShowPlans] = useState(false);

//   // Sample data for eSIM plans
//   const countryPlans = {
//     Pakistan: [
//       { data: '3 GB', duration: '10 Days', price: '$6.79 USD', discount: 'IBX OFF' },
//       { data: '5 GB', duration: '10 Days', price: '$8.49 USD', discount: 'IBX OFF' },
//       { data: '10 GB', duration: '10 Days', price: '$12.74 USD', discount: 'IBX OFF' },
//       { data: '20 GB', duration: '10 Days', price: '$20.39 USD', discount: 'IBX OFF', recommended: true },
//       { data: '40 GB', duration: '10 Days', price: '$30.59 USD', discount: 'IBX OFF' },
//     ],
//     Canada: [
//       { data: '1 GB', duration: '7 Days', price: '$9.99 USD', discount: 'IBX OFF' },
//       { data: '3 GB', duration: '14 Days', price: '$19.99 USD', discount: 'IBX OFF' },
//       { data: '5 GB', duration: '30 Days', price: '$29.99 USD', discount: 'IBX OFF', recommended: true },
//     ],
//     UK: [
//       { data: '5 GB', duration: '15 Days', price: '$15.50 USD', discount: 'IBX OFF' },
//       { data: '10 GB', duration: '30 Days', price: '$25.00 USD', discount: 'IBX OFF', recommended: true },
//       { data: '20 GB', duration: '30 Days', price: '$35.00 USD', discount: 'IBX OFF' },
//     ],
//     Australia: [
//       { data: '3 GB', duration: '10 Days', price: '$12.00 USD', discount: 'IBX OFF' },
//       { data: '7 GB', duration: '20 Days', price: '$20.00 USD', discount: 'IBX OFF', recommended: true },
//       { data: '15 GB', duration: '30 Days', price: '$30.00 USD', discount: 'IBX OFF' },
//     ],
//   };

//   const handleSearch = () => {
//     if (selectedCountry) {
//       setShowPlans(true);
//     }
//   };

//   return (
//     <div className="esim-plans-container">
//       <div className="home_destination">
//         <h1>Choose your destination</h1>
//         <p>Your Travel eSIM Includes:</p>
//       </div>
      
//       <div className="features-container">
//         <div className="home_features">
//           <div className="Home_features_items">
//             <FaWifi className="icon" title="Wi-Fi" />
//             <p>Wi-Fi Hotspot</p>
//           </div>
//           <div className="Home_features_items">
//             <FaDownload className="icon" title="Download" />
//             <p>Instant Activation</p>
//           </div>
//           <div className="Home_features_items">
//             <MdSignalCellularAlt className="icon" title="4G/5G Signal" />
//             <p>4G/5G Data</p>
//           </div>
//           <div className="Home_features_items">
//             <GiAutoRepair className="icon" title="Auto-Renew" />
//             <p>Optional Auto-Renew</p>
//           </div>
//         </div>
//       </div>
      
//       <div className="search-destination-container">
//         <div className="input-box">
//           <MdLocationPin className="icon" />
//           <select
//             value={selectedCountry}
//             onChange={(e) => setSelectedCountry(e.target.value)}
//             className="input"
//           >
//             <option value="">Select Destination</option>
//             <option value="Pakistan">Pakistan</option>
//             <option value="Canada">Canada</option>
//             <option value="UK">UK</option>
//             <option value="Australia">Australia</option>
//           </select>
//         </div>
//         <div className="input-box">
//           <BiCalendar className="icon" />
//           <div className="date-info">
//             <p className="label">Arrival & Departure</p>
//             <p className="value">20/12/2025 9:00pm</p>
//           </div>
//         </div>
//         <div>
//           {/* <Button  */}
//             {/* label="Search Plans" 
//             variant="primary"
//             size="medium"
//             onClick={handleSearch} */}
//           {/* /> */}
//         </div>
//       </div>
      
//       {showPlans && (
//         <div className="plans-container">
//           <h2>Our Best eSIM Plans</h2>
          
//           <div className="plans-grid">
//             {countryPlans[selectedCountry].map((plan, index) => (
//               <div 
//                 key={index} 
//                 className={`plan-card ${plan.recommended ? 'recommended' : ''}`}
//               >
//                 {plan.recommended && (
//                   <div className="recommended-badge">RECOMMENDED FOR {plan.duration}</div>
//                 )}
//                 <div className="plan-details">
//                   <h3>{selectedCountry}</h3>
//                   <p className="data-amount">{plan.data}</p>
//                   <p className="duration">{plan.duration}</p>
//                   <p className="price">{plan.price}</p>
//                   <p className="discount">{plan.discount}</p>
//                   <button className="add-to-cart">Add to Cart</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ESIMPlans;