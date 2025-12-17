// Path: src/components/Navbar.jsx
// Purpose: Persistent Navbar shown on all pages

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useModal } from '../contexts/ModalContext';
import { useAuth } from '../contexts/AuthContext';

export default function Navbar() {
  const { openModal } = useModal();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#4CAF50] flex items-center justify-center text-white text-xl">🌿</div>
          <Link to="/" className="text-xl font-semibold text-[#2E7D32]">Web Travel Planner</Link>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:text-[#4CAF50]">Home</Link>
          <Link to="/destinations" className="hover:text-[#4CAF50]">Destinations</Link>
          <button onClick={() => openModal()} className="hover:text-[#4CAF50]">Customize</button>
          <Link to="/eco-tips" className="hover:text-[#4CAF50]">Eco Tips</Link>
          <Link to="/auth" className="hover:text-[#4CAF50]">Login / Sign up</Link>
          {user ? (
            <>
              <button onClick={() => navigate('/')} className="px-3 py-1 rounded-md border border-green-600 text-green-700">Hi, {user.name}</button>
              <button onClick={logout} className="px-3 py-1 rounded-md">Logout</button>
            </>
          ) : null}
        </nav>

        {/* Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(s => !s)} aria-label="Toggle menu" className="p-2">
            ☰
          </button>
          {open && (
            <div className="absolute right-4 mt-12 bg-white p-4 rounded-md shadow-lg w-48">
              <Link to="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
              <Link to="/destinations" onClick={() => setOpen(false)} className="block py-2">Destinations</Link>
              <button onClick={() => { setOpen(false); openModal(); }} className="block w-full text-left py-2">Customize</button>
              <Link to="/eco-tips" onClick={() => setOpen(false)} className="block py-2">Eco Tips</Link>
              <Link to="/auth" onClick={() => setOpen(false)} className="block py-2">Login / Sign up</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
