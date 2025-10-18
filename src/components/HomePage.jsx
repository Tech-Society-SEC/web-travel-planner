// HomePage.jsx
import React from "react";
import "./HomePage.css";
import heroImage from "../assets/home-image.jpg";

 // replace with your image path

const HomePage = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <h1 className="hero-title">Explore Beyond Limits</h1>
        <p className="hero-subtitle">Plan your dream trip easily and explore amazing destinations worldwide!</p>
        <button className="hero-btn">Get Started</button>
      </div>
      <img src={heroImage} alt="Travel" className="hero-image" />
    </section>
  );
};

export default HomePage;
