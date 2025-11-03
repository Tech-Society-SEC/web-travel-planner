import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Destinations from './pages/Destinations'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Customize from './pages/Customize'
import EcoTips from "./pages/EcoTips";
import Contact from "./pages/Contact";



export default function App(){
return (
<Router>
<Navbar />
<main className="app-container">
<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/destinations" element={<Destinations/>} />
<Route path="/login" element={<Login/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/customize" element={<Customize/>} />
<Route path="/eco-tips" element={<EcoTips />} />
<Route path="/contact" element={<Contact />} />

</Routes>
</main>
</Router>
)
}