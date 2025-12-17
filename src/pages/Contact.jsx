import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [sending,setSending] = useState(false)

  async function submit(e){
    e.preventDefault()
    setSending(true)
    try{
      await axios.post((import.meta.env.VITE_API_BASE || '') + '/api/contact/send', form)
      alert('Message sent')
      setForm({name:'',email:'',message:''})
    }catch(err){
      alert('Send failed')
    }finally{setSending(false)}
  }

  return (
    <div className="container">
      <h2>Contact</h2>
      <div style={{display:'flex',gap:20}}>
        <div style={{flex:1}}>
          <h3>About Web Travel Planner</h3>
          <p>We help you plan eco-friendly trips.</p>
          <h4>Contact info</h4>
          <p>email: hello@wtp.example</p>
          <p>phone: +1 555 555</p>
        </div>
        <div style={{flex:1}}>
          <form onSubmit={submit}>
            <div className="form-group">
              <label>Name</label>
              <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required />
            </div>
            <button className="btn" type="submit" disabled={sending}>{sending? 'Sending...' : 'Send Message'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
