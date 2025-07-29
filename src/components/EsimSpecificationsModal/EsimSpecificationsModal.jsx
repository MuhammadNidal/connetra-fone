
import Button from "../buttton/button";
import "./EsimSpecificationsModal.css";

const EsimSpecificationsModal = ({ onClose,title}) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <div className="spec-item"><strong>Format</strong> <span>eSIM (eUICC Profile)</span></div>
          <div className="spec-item"><strong>Compatibility</strong> <span>See Compatibility List</span></div>
          <div className="spec-item"><strong>Installation</strong> <span>QR Code, Manual Activation Code</span></div>
          <div className="spec-item"><strong>Multiple Devices</strong> <span>No – eSIM Locked to First IMEI</span></div>
          <div className="spec-item"><strong>Data Activation</strong> <span>Activation Date Selected on Checkout</span></div>
          <div className="spec-item"><strong>Data Speed</strong> <span>5G and 4G LTE (Where Available)</span></div>
          <div className="spec-item"><strong>Available Networks</strong> <span>Verizon, AT&amp;T</span></div>
          <div className="spec-item"><strong>Max Validity</strong> <span>5 Days – 180+ Days (with Monthly Plan)</span></div>
          <div className="spec-item"><strong>Wi-Fi Hotspot</strong> <span>Available on all eSIM Plans, No restrictions</span></div>
          <div className="spec-item"><strong>Voice/SMS</strong> <span>Available with Wi-Fi Calling</span></div>
          <div className="spec-item"><strong>APN</strong> <span>Automatic</span></div>
          <div className="spec-item"><strong>Usage Policy</strong> <span>Personal cellular use only. <a href="#">View AUP ›</a></span></div>
          <div className="spec-item"><strong>Refund Policy</strong> <span>100% Money Back Guarantee</span></div>
          <div className="spec-item"><strong>Lost Phone Policy</strong> <span>$5 eSIM Replacement Charge</span></div>
          {/* <div className="spec-item"><strong>Technical Support</strong> 
            <span>
              <span className="badge">24/7/365</span> Helpdesk<br/>
              <span className="badge">24/7/365</span> support@maya.net
            </span>
          </div> */}
        </div>
        <div className="modal-footer">
          <Button className="close-btn" onClick={onClose} label="Close"/>
        </div>
      </div>
    </div>
  );
};

export default EsimSpecificationsModal;
