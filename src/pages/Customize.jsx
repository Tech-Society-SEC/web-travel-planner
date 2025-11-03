import React, {useState} from 'react'
import Modal from '../components/Modal'


export default function Customize(){
const [open, setOpen] = useState(true)
const [budget, setBudget] = useState(5000)


return (
<Modal open={open} onClose={()=>setOpen(false)} title={"Customize Your Trip"}>
<div style={{padding:'6px 0'}}>
<h4>Traveler Details</h4>
<div className="grid-2">
<input placeholder="Full Name" />
<input placeholder="Email" />
<select><option>1 Traveler</option><option>2 Travelers</option></select>
<div style={{display:'flex',gap:8}}>
<input placeholder="From" />
<input placeholder="To" />
</div>
</div>


<h4>Destination Preferences</h4>
<div className="grid-2">
<input placeholder="Destination" />
<select><option>7 Days</option></select>
</div>
<label>Budget: ${budget}</label>
<input type="range" min="1000" max="20000" value={budget} onChange={e=>setBudget(e.target.value)} />


<div style={{display:'flex',justifyContent:'flex-end',gap:8,marginTop:12}}>
<button className="btn-outline">Reset</button>
<button className="btn-outline" onClick={()=>setOpen(false)}>Cancel</button>
<button className="btn-primary">Save Customization</button>
</div>
</div>
</Modal>
)
}