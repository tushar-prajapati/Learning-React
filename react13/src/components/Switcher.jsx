import React from 'react'
import { useState } from 'react'

const Switcher = () => {
    const [mode, setMode] = useState(false);
  return (
    <div>
        {mode?(
            <h1>Dark</h1>
        ):(
            <h1>Light</h1>
        )}

        <br />
        <input type="text" placeholder={mode? "dark":"light"}/>
        <button style={{cursor: 'pointer'}} onClick={()=> setMode((s)=>!s)}>Switch</button>
    </div>
  )
}

export default Switcher