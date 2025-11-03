import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/hero-bg.jpg'



export default function HomePage(){
return (
<div className="hero" style={{backgroundImage:`url(${hero})`}}>
<div className="hero-overlay">
<h1>Plan Your Perfect Eco-Friendly Trip</h1>
<p>Explore destinations that care for nature and community.</p>
<div className="hero-actions">
<Link to="/destinations" className="btn-primary">Start Planning</Link>
<Link to="/destinations" className="btn-outline">Browse Destinations</Link>
</div>
<div className="hero-search">
<input placeholder="Destination" />
<input placeholder="Check-in" />
<input placeholder="Check-out" />
<button className="btn-primary">Search</button>
</div>
</div>
</div>
)
}