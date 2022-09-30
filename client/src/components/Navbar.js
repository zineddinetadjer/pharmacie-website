import React from "react";
import logo from "../images/agieu-removebg-preview.png";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="navbar1">
        <div className="search"></div>
        <div className="links"></div>
      </div>
    </div>
  );
}

export default Navbar;
