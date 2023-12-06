import React, { useState } from 'react'
import './ColorPictor.css';
const ColorPictor = () => {
    const [color, setColor]=useState('#FFFFFF')

    function handleColorChange(e){
        setColor(e.target.value)
    }
  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{background:color}}>
        <p>Selected a Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPictor
