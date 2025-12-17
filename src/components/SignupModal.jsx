import React, { useState } from 'react'
import Modal from './Modal'
import axios from 'axios'

function validatePassword(p){
  return p.length>=8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p)
}

export default function SignupModal({ open, onClose }){
  const [form,setForm] = useState({username:'',email:'',password:'',confirm:'',location:'',phone:''})
  const [loading,setLoading] = useState(false)

  async function submit(e){
    e.preventDefault();
    if(form.password!==form.confirm){ alert('Passwords do not match'); return }
    if(!validatePassword(form.password)){ alert('Password does not meet rules'); return }
    setLoading(true)
    try{
      const res = await axios.post((import.meta.env.VITE_API_BASE||'') + '/api/auth/signup', { username: form.username, email: form.email, password: form.password, location: form.location, phone: form.phone })
      const token = res.data.token
      if(token){ localStorage.setItem('wtp_token', token); window.location.href='/' }
      else alert('Signup failed')
    }catch(err){ alert('Signup error') } finally{ setLoading(false) }
  }

  return (
    <Modal open={open} onClose={onClose} title="Signup">
      <form onSubmit={submit}>
        <div className="form-group"><label>Username</label><input value={form.username} onChange={e=>setForm({...form,username:e.target.value})} required /></div>
        <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required /></div>
        <div className="form-group"><label>Password</label><input type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required /></div>
        <div className="form-group"><label>Confirm Password</label><input type="password" value={form.confirm} onChange={e=>setForm({...form,confirm:e.target.value})} required /></div>
        <div className="form-group"><label>Location</label><input value={form.location} onChange={e=>setForm({...form,location:e.target.value})} /></div>
        <div className="form-group"><label>Phone</label><input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>
        <div style={{display:'flex',gap:8,justifyContent:'flex-end'}}>
          <button className="btn" type="submit" disabled={loading}>{loading? 'Signing…' : 'Signup'}</button>
        </div>
      </form>
    </Modal>
  )
}
