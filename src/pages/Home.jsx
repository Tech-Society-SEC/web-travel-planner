import React from 'react'
import HeroImg from '../assets/hero-bg.jpg'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div style={{display:'flex',gap:20,alignItems:'center'}}>
            <div>
              <h1>Plan Your Eco-Friendly Journey</h1>
              <p>Discover sustainable destinations and plan trips that help communities and nature.</p>
              <div style={{marginTop:12}}>
                <a href="/customize" className="btn">Start Planning</a>
                <a href="/destinations" className="btn-outline" style={{marginLeft:8}}>Browse Destinations</a>
              </div>
            </div>
            <div>
              <img src={HeroImg} alt="hero" style={{width:420,borderRadius:12}} />
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Green Travel</h3>
              <p>Sustainable choices for conscious travelers.</p>
            </div>
            <div className="card">
              <h3>Smart Planning</h3>
              <p>Tools to organize your trip easily.</p>
            </div>
            <div className="card">
              <h3>Destination Insights</h3>
              <p>Local tips and eco-friendly options.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">© Web Travel Planner</footer>
    </div>
  )
}
