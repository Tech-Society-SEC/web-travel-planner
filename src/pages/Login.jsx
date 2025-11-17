import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      alert("Login successful!");
      navigate("/");

    } catch (err) {
      console.error(err);
      setError("Server error. Try again.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="tabs">
          <div className="tab active">Login</div>
          <Link to="/signup" className="tab">Sign Up</Link>
        </div>

        <h3>Welcome Back</h3>
        <p>Continue your eco-friendly journey</p>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label>Email</label>
        <input name="email" onChange={handleChange} placeholder="your.email@example.com" />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} placeholder="Enter your password" />

        <button className="btn-primary" onClick={handleLogin}>Login</button>

        <div className="divider">or continue with</div>
        <div className="socials">
          <button className="btn-outline">Google</button>
          <button className="btn-outline">Apple</button>
        </div>

      </div>
    </div>
  );
}
