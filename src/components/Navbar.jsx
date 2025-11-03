import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="nav">
      <div className="nav-left" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="nav-title">Web Travel Planner</div>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/customize">Customize</Link>
        {/* ✅ Updated these two lines below */}
        <Link to="/eco-tips" className="nav-link">Eco Tips</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        {/* ✅ Keep your login link as it is */}
        <Link to="/login" className="btn-pill">Login / Sign up</Link>
      </div>
    </nav>
  )
}
