import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./helpCenterNavbar.css";

const HelpCenterNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header1">
      <div className="navbar-logo1">
        <Link to="/"> {/* Navigate to home page */}
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/helpcenter/submit-request">Submit a request</Link>
        <a href="/login">Log in</a>
      </nav>
    </header>
  );
};

export default HelpCenterNavbar;
