import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  return (
    <header className="navbar">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div className="nav-left">
          <img src={Logo} alt="logo" className="nav-logo" />
          <h3 style={{margin:0,marginLeft:8}}>Web Travel Planner</h3>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/customize">Customize</Link>
          <Link to="/ecotips">EcoTips</Link>
          <Link to="/contact">Contact</Link>
          <button className="btn-outline" onClick={() => setShowLogin(true)}>Login</button>
          <button className="btn-pill" onClick={() => setShowSignup(true)}>Signup</button>
        </nav>
      </div>
      <LoginModal open={showLogin} onClose={() => setShowLogin(false)} />
      <SignupModal open={showSignup} onClose={() => setShowSignup(false)} />
    </header>
  )
}
