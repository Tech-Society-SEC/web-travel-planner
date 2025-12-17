import React from 'react'

const TIPS = [
  'Reusable Bottle',
  'Conserve Water',
  'Support Local',
  'Respect Wildlife',
  'Use Public Transport',
  'Leave No Trace'
]

export default function EcoTips(){
  return (
    <div className="container">
      <h2>Eco Tips</h2>
      <div className="grid">
        {TIPS.map((t,i)=> (
          <div key={i} className="tip-card">
            <h4>{t}</h4>
            <p>Short explanation about {t.toLowerCase()}.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
