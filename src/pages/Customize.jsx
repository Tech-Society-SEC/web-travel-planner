import React, { useEffect, useState } from 'react'

export default function Customize(){
  const [form, setForm] = useState({ destination:'', days:7, budgetType:'Standard', activities:[] })

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const dest = params.get('dest')
    if(dest) setForm(f=>({...f,destination:dest}))
  },[])

  function toggleActivity(a){
    setForm(f=>({ ...f, activities: f.activities.includes(a) ? f.activities.filter(x=>x!==a) : [...f.activities,a] }))
  }

  function generate(){
    // simple itinerary generation
    alert('Plan generated for '+form.destination)
  }

  return (
    <div className="container">
      <h2>Customize Your Trip</h2>
      <div style={{maxWidth:700}}>
        <div className="form-group">
          <label>Destination</label>
          <input value={form.destination} onChange={e=>setForm({...form,destination:e.target.value})} />
        </div>

        <div className="form-group">
          <label>Number of days</label>
          <select value={form.days} onChange={e=>setForm({...form,days:Number(e.target.value)})}>
            <option>3</option>
            <option>5</option>
            <option>7</option>
            <option>10</option>
          </select>
        </div>

        <div className="form-group">
          <label>Budget type</label>
          <select value={form.budgetType} onChange={e=>setForm({...form,budgetType:e.target.value})}>
            <option>Budget</option>
            <option>Standard</option>
            <option>Luxury</option>
          </select>
        </div>

        <div className="form-group">
          <label>Activities</label>
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {['Hiking','Wildlife','Beaches','Cultural'].map(a=> (
              <label key={a}><input type="checkbox" checked={form.activities.includes(a)} onChange={()=>toggleActivity(a)} /> {a}</label>
            ))}
          </div>
        </div>

        <div style={{display:'flex',gap:8}}>
          <button className="btn" onClick={generate}>Generate Plan</button>
        </div>

        <section style={{marginTop:24}}>
          <h3>Suggested Itinerary</h3>
          <p>Day 1: Arrival and orientation</p>
          <p>Day 2: Eco activity and local experience</p>
        </section>
      </div>
    </div>
  )
}
