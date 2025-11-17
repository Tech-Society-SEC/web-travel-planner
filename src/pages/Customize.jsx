import React, {useState} from 'react'
import Modal from '../components/Modal'


export default function Customize(){
const [open, setOpen] = useState(true)
const [budget, setBudget] = useState(5000)


return (
<Modal open={open} onClose={()=>setOpen(false)} title="Customize Your Trip">
  <div className="customize-section">

    <h4>Traveler Details</h4>
    <div className="grid-2">
      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <select>
        <option>1 Traveler</option>
        <option>2 Travelers</option>
      </select>

      <input placeholder="From" />
      <input placeholder="To" />
    </div>

    <h4>Destination Preferences</h4>
    <div className="grid-2">
      <input placeholder="Destination" />
      <select><option>7 Days</option></select>
    </div>

    <label>Budget: ${budget}</label>
    <input
      type="range"
      min="1000"
      max="20000"
      value={budget}
      onChange={e=>setBudget(e.target.value)}
    />

    <div className="actions">
      <button className="btn-outline">Reset</button>
      <button className="btn-outline" onClick={()=>setOpen(false)}>Cancel</button>
      <button className="btn-primary">Save Customization</button>
    </div>
  </div>
</Modal>

)
}