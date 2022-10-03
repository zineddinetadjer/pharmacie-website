import React from "react";
import logo from "../images/agieu-removebg-preview.png";
import "../styles/navbar.css";
import SearchAppBar from "./Search";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="navbar1">
        <div className="search">
          <SearchAppBar />
        </div>
        <div className="links">
          <a href="#">BEAUTE</a>
          <a href="#">MAMAN ET BEBE</a>
          <a href="#">NUTRITIONS</a>
          <a href="#">ARTICLES</a>
          <a href="#">A PROPOS</a>
          <a href="#" id="inscrir">
            INSCRIVEZ-VOUS
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
