import React from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <main className="content">
        <section className="hero">
          <h1></h1>
          <p>Plan your dream trip easily and explore amazing destinations worldwide!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
