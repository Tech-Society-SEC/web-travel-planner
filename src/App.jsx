import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Welcome to Web Travel Planner 🌍
      </h1>
      <p style={{ textAlign: "center" }}>
        Plan your trips easily, explore destinations, and travel smarter!
      </p>
    </div>
  );
}

export default App;
