// src/layouts/HelpCenterLayout.jsx
import React from "react";
import HelpCenterNavbar from "./components/helpCenterNavbar/helpCenterNavbar";
import HelpCenterFooter from "./components/helpCenterFooter/helpCenterFooter";

const HelpCenterLayout = ({ children }) => {
  return (
    <>
      <HelpCenterNavbar />
      <div className="help-center-content">{children}</div>
      <HelpCenterFooter />
    </>
  );
};

export default HelpCenterLayout;
