import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png"; // <-- make sure your logo image is inside src/assets/logo.png

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="Web Travel Planner Logo" className="logo-img" />
        <h2 className="logo-text">Web Travel Planner</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
