
import './EsimHelp.css'
import { FaSearch } from "react-icons/fa";
import  HelpContent  from '../../assets/data/HelpContent.json';
import { Link } from "react-router-dom";



const EsimHelp = () => {
  
  return (
    <div className="support-wrapper">
      {/* Header Section */}
      <div className="header-container">
        {/* Breadcrumb (Left Side) */}
        <div className="breadcrumb-wrapper">
          <span className="breadcrumb-text">Connectra eSim &gt; General &gt; eSIM Help</span>
        </div>

        {/* Search Box + Follow Button (Right Side) */}
        <div className="search-wrapper">
          <div className="search-box">
           <FaSearch className="search-icones" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>


          {/* Follow Button Below Search */}
        </div>
      </div>
      <br /><br />
          <button className="follow-btnEh">Follow</button>

      {/* Support Header */}
      <div className="support-header">
        <h1>eSIM Help</h1>
      </div>

      {/* Help Description */}
      <p className="support-description">Help with activation, refills, and connectivity:</p><br />

      {/* Help Topics List */}
      <ul className="topics-list">
        {HelpContent.map((item) => (
          // <li key={index} className={topic.star ? "topic-item starred-topic" : "topic-item"}>
          //   {topic.star && <span className="star-icon">⭐</span>} {topic.title}
          // </li>
          <li key={item.id} className="topic-item">
            <Link to={`/help-answer/${item.id}`} className="question-item">
              {item.question}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EsimHelp;
