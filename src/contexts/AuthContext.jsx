// Path: src/contexts/AuthContext.jsx
// Purpose: Basic auth context (mocked) to store user info and provide login/signup helpers

import React, { createContext, useContext, useState } from 'react';
import * as api from '../utils/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('wtp_user')) || null;
    } catch { return null; }
  });

  async function login(email, password) {
    const res = await api.authLogin({ email, password });
    if (res?.user) {
      setUser(res.user);
      localStorage.setItem('wtp_user', JSON.stringify(res.user));
    }
    return res;
  }

  async function signup(payload) {
    const res = await api.authSignup(payload);
    if (res?.user) {
      setUser(res.user);
      localStorage.setItem('wtp_user', JSON.stringify(res.user));
    }
    return res;
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('wtp_user');
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
