import React from 'react'
import DestinationCard from '../components/DestinationCard'


const sample = [
{name:'Indonesia', desc:'Discover sustainable island paradises and eco-friendly resorts', image:'/src/assets/hero-bg.jpg'},
{name:'New Zealand', desc:'Adventure through pristine landscapes with eco-conscious tourism', image:'/src/assets/hero-bg.jpg'},
{name:'Chile', desc:'Explore Patagonian wilderness with sustainable lodges', image:'/src/assets/hero-bg.jpg'},
]


export default function Destinations(){
return (
<div className="page">
<div className="page-header">
<h2>Eco-Friendly Destinations</h2>
<p>Discover countries committed to sustainability and environmental protection</p>
<div className="search-wide"><input placeholder="Search destinations..."/></div>
</div>


<div className="grid">
{sample.map((s,i)=> <DestinationCard key={i} item={s} />)}
</div>
</div>
)
}