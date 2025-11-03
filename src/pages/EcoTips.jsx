import React from "react";

const EcoTips = () => {
  const tips = [
    {
      title: "Carry a Reusable Water Bottle",
      text: "Avoid buying plastic bottles by carrying your own refillable one during your trip.",
    },
    {
      title: "Use Public Transport or Shared Rides",
      text: "Cut down on carbon emissions by using buses, trains, or carpooling instead of taxis.",
    },
    {
      title: "Stay at Eco-Friendly Hotels",
      text: "Choose hotels that follow sustainable practices like water conservation and renewable energy.",
    },
    {
      title: "Support Local Businesses",
      text: "Buy handmade crafts and eat at local restaurants to boost the local economy responsibly.",
    },
    {
      title: "Pack Light and Smart",
      text: "Lighter luggage means less fuel consumption during your travel — every kilo counts!",
    },
  ];

  return (
    <div className="eco-tips-page">
      <h1 className="page-title">Eco-Friendly Travel Tips 🌎</h1>
      <p className="page-subtitle">
        Make every journey sustainable and planet-friendly.
      </p>

      <div className="tips-grid">
        {tips.map((tip, index) => (
          <div key={index} className="tip-card">
            <h3>{tip.title}</h3>
            <p>{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoTips;
