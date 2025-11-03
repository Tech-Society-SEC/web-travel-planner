import React from 'react'


export default function Signup(){
return (
<div className="auth-page">
<div className="auth-card">
<div className="tabs">
<a className="tab">Login</a>
<div className="tab active">Sign Up</div>
</div>
<h3>Create Your Account</h3>
<p>Join our sustainable travel community</p>
<label>Username</label>
<input placeholder="Choose a username" />
<label>Email</label>
<input placeholder="your.email@example.com" />
<label>Password</label>
<input placeholder="Create a strong password" />
<label>Confirm Password</label>
<input placeholder="Confirm your password" />
<label>Location</label>
<input placeholder="City, Country" />
<label>Phone Number</label>
<input placeholder="+1 (555) 123-4567" />
<button className="btn-primary">Sign Up</button>
</div>
</div>
)
}