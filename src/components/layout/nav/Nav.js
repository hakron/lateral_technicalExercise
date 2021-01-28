import React, { useState } from 'react'
import './Nav.css'

export default function Nav({ handleSubmit }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <nav className='nav' >
      <div>
        <label htmlFor='inputLabel' >
          Article URL:
          </label>
        <input id='inputLabel' type="text" name="URL" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" onClick={() => handleSubmit(inputValue)}> Submit</button>
      </div>
    </nav>
  )
}
