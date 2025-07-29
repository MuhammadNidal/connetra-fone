
// import Button from '../buttton/button';
import './HeroSection.css'; // Import the CSS file for styling
import {  FaApple, FaWifi, FaAndroid, FaInfinity } from 'react-icons/fa';


const HeroSection = ({ imageSrc, textContent, label }) => {
  return (
    <div className="hero">
      {/* Hero Image */}
      <img src={imageSrc} alt="Hero Section" />
      
      {/* Hero Content */}
      <div className="hero-content-data">
        {/* {textContent.map((text, index) => (
          <p key={index}>{text}</p>
        ))} */}
        <p>Unlock your World “get mobile data anywhere with our prepaid and unlimited eSIM plans for international travel” </p>
        <span style={{display:'flex',alignItems:'center'}}><FaInfinity size={20} color='#f3a024' style={{marginRight:'0.5rem'}}/>Unlimited Plans</span>
        <span style={{display:'flex',alignItems:'center'}}> <FaWifi size={20} color='#f3a024' style={{marginRight:'0.5rem'}}/> Fast 5G Data</span>
        <div className="hero-icons">
        
        <p style={{display:'flex',alignItems:'center'}}><FaApple  size={20} color='#f3a024' style={{marginRight:'0.5rem'}}/>Iphone</p>
        <p style={{display:'flex',alignItems:'center'}}><FaAndroid  size={20} color='#f3a024' style={{marginRight:'0.5rem'}}/>Android</p>
        </div>
        <div>
        {/* <Button label={label} /> */}
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
