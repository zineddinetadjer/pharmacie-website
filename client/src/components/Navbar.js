import React from "react";
import logo from "../images/agieu-removebg-preview.png";
import "../styles/navbar.css";
import SearchAppBar from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="navbar1">
        <div className="search">
          <SearchAppBar />
          <div>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </div>
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </div>
        <div className="links">
          <a href="#">BEAUTE</a>
          <a href="#">MAMAN ET BEBE</a>
          <a href="#">NUTRITIONS</a>
          <a href="#">ARTICLES</a>
          <a href="#">A PROPOS</a>
          <a href="#">INSCRIVEZ-VOUS</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
