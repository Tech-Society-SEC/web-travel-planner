import React from 'react'

export default function DestinationCard({ image, name, description, onViewMore }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />
      <div className="body">
        <h4>{name}</h4>
        <p>{description}</p>
        <div style={{display:'flex',justifyContent:'flex-end'}}>
          <button className="btn-outline" onClick={onViewMore}>View More</button>
        </div>
      </div>
    </div>
  )
}
