import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function DestinationCard({item}){
const navigate = useNavigate()
return (
<div className="card">
<div className="card-img" style={{backgroundImage:`url(${item.image})`}} />
<div className="card-body">
<h4>{item.name}</h4>
<p>{item.desc}</p>
<div className="card-actions">
<button onClick={()=>navigate('/customize') } className="btn-outline">View More</button>
</div>
</div>
</div>
)
}