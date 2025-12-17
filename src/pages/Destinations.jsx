import React from 'react'
import DestinationCard from '../components/DestinationCard'
import img1 from '../assets/Chile.png'
import img2 from '../assets/Indonesia.png'
import img3 from '../assets/New Zealand.png'
import img4 from '../assets/hero-bg.jpg'

const DATA = [
  { id:1, name:'Chile', description:'Patagonia and sustainable stays', image: img1 },
  { id:2, name:'Indonesia', description:'Islands with eco resorts', image: img2 },
  { id:3, name:'New Zealand', description:'Green adventures', image: img3 },
  { id:4, name:'Costa Rica', description:'Biodiversity hotspots', image: img4 }
]

export default function Destinations(){
  return (
    <div className="container">
      <h2>Destinations</h2>
      <p>Explore eco-friendly destinations</p>
      <div className="grid">
        {DATA.map(d=> (
          <DestinationCard key={d.id} image={d.image} name={d.name} description={d.description} onViewMore={()=>window.location.href='/customize?dest='+encodeURIComponent(d.name)} />
        ))}
      </div>

      <footer className="footer">© Web Travel Planner</footer>
    </div>
  )
}
