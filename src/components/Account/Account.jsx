// import React from "react";
// import '../EsimHelp/EsimHelp.css'
// import { FaSearch } from "react-icons/fa";


// const Account = () => {
//     const helpTopics = [
//         { title: "Payments, bills, account credits, and more" },
//         { title: "Forgot username/password, or can’t log in to your account" },
//         { title: "Adding VAT ID and Company Name to invoices" },
//         { title: "Automatically renew an eSIM Data Plan" },
//         { title: "Set up Two-factor Authentication (2FA) for your account" },
//         { title: "Download an invoice for an order" },
//         { title: "Add or Remove a Payment Method" },
//         { title: "Change your account email address or phone number" },
//         { title: "Turn off Login Notifications" },
//         { title: "Reset a Lost Password" },
//         { title: "How to Cancel Your Order" },
//         { title: "Delete your Connectra eSim account" },
//     ];
    
//   return (
//     <div className="support-wrapper">
//       {/* Header Section */}
//       <div className="header-container">
//         {/* Breadcrumb (Left Side) */}
//         <div className="breadcrumb-wrapper">
//           <span className="breadcrumb-text">Connectra eSim &gt; General &gt; Account</span>
//         </div>

//         {/* Search Box + Follow Button (Right Side) */}
//         <div className="search-wrapper">
//           <div className="search-box">
//            <FaSearch className="search-icones" />
//             <input type="text" placeholder="Search" className="search-input" />
//           </div>

//           {/* Follow Button Below Search */}
//         </div>
//       </div>
//       <br /><br />
//           <button className="follow-btnEh">Follow</button>

//       {/* Support Header */}
//       <div className="support-header">
//       <h1 style={{ fontSize: "40px" }}>Account</h1>

//       </div>

//       {/* Help Topics List */}
//       <ul className="topics-list">
//         {helpTopics.map((topic, index) => (
//           <li key={index} className={"topic-item"}>
//          {topic.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Account;
import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import '../EsimHelp/EsimHelp.css';
import { FaSearch } from "react-icons/fa";
import accountContent from '../../assets/data/accountContent.json';

const Account = () => {
  return (
    <div className="support-wrapper">
      {/* Header Section */}
      <div className="header-container">
        {/* Breadcrumb (Left Side) */}
        <div className="breadcrumb-wrapper">
          <span className="breadcrumb-text">Connectra eSim &gt; General &gt; Account</span>
        </div>

        {/* Search Box + Follow Button (Right Side) */}
        <div className="search-wrapper">
          <div className="search-box">
            <FaSearch className="search-icones" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
        </div>
      </div>

      <br /><br />
      <button className="follow-btnEh">Follow</button>

      {/* Support Header */}
      <div className="support-header">
        <h1 style={{ fontSize: "40px" }}>Account</h1>
      </div>

      {/* Help Topics List */}
      <ul className="topics-list">
        {accountContent.map((item) => (
          <li key={item.id} className="topic-item">
            <Link to={`/answer/${item.id}`} className="question-item">
              {item.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Account;
