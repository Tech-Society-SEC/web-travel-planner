import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'

export default function LoginModal({ open, onClose }){
  const [form,setForm] = useState({email:'',password:''})
  const [loading,setLoading] = useState(false)

  async function submit(e){
    e.preventDefault(); setLoading(true)
    try{
      const res = await axios.post((import.meta.env.VITE_API_BASE||'') + '/api/auth/login', form)
      const token = res.data.token
      if(token){ localStorage.setItem('wtp_token', token); window.location.href='/' }
      else alert('Login failed')
    }catch(err){ alert('Login error') } finally{ setLoading(false) }
  }

  return (
    <Modal open={open} onClose={onClose} title="Login">
      <form onSubmit={submit}>
        <div className="form-group"><label>Email</label><input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required /></div>
        <div className="form-group"><label>Password</label><input type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required /></div>
        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
          <button className="btn-outline" type="button" onClick={()=>alert('Forgot password flow (stub)')}>Forgot Password</button>
          <button className="btn" type="submit" disabled={loading}>{loading? 'Logging…' : 'Login'}</button>
        </div>
      </form>
    </Modal>
  )
}
