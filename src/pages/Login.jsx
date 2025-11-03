import React from 'react'
import { Link } from 'react-router-dom'


export default function Login(){
return (
<div className="auth-page">
<div className="auth-card">
<div className="tabs">
<div className="tab active">Login</div>
<Link to="/signup" className="tab">Sign Up</Link>
</div>
<h3>Welcome Back</h3>
<p>Continue your eco-friendly journey</p>
<label>Email</label>
<input placeholder="your.email@example.com" />
<label>Password</label>
<input placeholder="Enter your password" type="password" />
<a className="forgot">Forgot Password?</a>
<button className="btn-primary">Login</button>
<div className="divider">or continue with</div>
<div className="socials">
<button className="btn-outline">Google</button>
<button className="btn-outline">Apple</button>
</div>
</div>
</div>
)
}