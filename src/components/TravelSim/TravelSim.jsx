  // <<<<<<< HEAD
  // <<<<<<<<< Temporary merge branch 1
  import './TravelSIM.css';
  import mobile from '../../assets/TravelEsim/travelesim.jpg';

  import './TravelSim.css';
  // import mobile from '../../assets/TravelEsim/mobile.png';

  // =======

  import './TravelSim.css';
  // >>>>>>> 8572a3cda09e8b39beb675c7ec2968016be27025
  import Button from "../../components/buttton/button"

  function TravelSIMInfo() {
    return (
      <div className="travel_esim_info_wrapper">
        <div className="t-e-i-container">
          {/* Image Section */}
          <div className="image-section">
            <div className="">
              <img src={mobile} className='left-image' alt="QR Code" />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-section">
            <h3><span className="highlight">eSIM</span></h3>
            <h2>Get your Europe <br />Travel SIM in <span className="highlight1"> 5 <br /> Minutes</span></h2>
            <span className="Tspara">Activate any of our Unlimited or Prepaid eSIM plans with  <br />your phones onboard eSIM chip, alongside your existing <br /> phone plan.</span>
            <ul>
              <li><span className="tick">✔</span> QR code delivered to your email</li>
              <li><span className="tick">✔</span> Fast and easy installation</li>
              <li><span className="tick">✔</span> Connect to mobile internet automatically</li>
              <li><span className="tick">✔</span> <a href="#">Check if your phone will work</a></li>
            </ul>
            <div className="button">
            <Button label="how it work"  variant="primary"
                  size="medium"/>
                  </div>
          </div>
        </div>
      </div>
    );
  }

  export default TravelSIMInfo;