import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/eco-logo.png" alt="EcoTravel Logo" />
        <h2>EcoTravel</h2>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/destinations">Destinations</a></li>
        <li><a href="/customize">Customize</a></li>
        <li><a href="/eco-tips">Eco Tips</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <button className="login-btn">Login / Sign up</button>
    </nav>
  );
};

export default Navbar;
