import React, { useState } from 'react'
import './style.css'

const Toggle = () => {
    const [bgColor, setBgColor] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');
    const [buttonStyle, setButtonStyle] = useState('white');
    const handleClick = ()=>{
        setBgColor(bgColor==='white'? "#1b1b1b": "white");
        setTextColor(textColor === '#1b1b1b'? '#ffa31a': "#1b1b1b");
        setButtonStyle(bgColor==='white'? '#1b1b1b': 'white')
    }
  return (
    <div style={{backgroundColor: bgColor, color: textColor}}>
        <button onClick={handleClick} style={{color: textColor,backgroundColor:buttonStyle, border: `2px solid ${textColor}`}}>
            {bgColor == "#1b1b1b" ? "Black Theme": "White Theme"}
        </button>
        <section className="content">
            <h1>Welcome to A <br /> Real World...</h1>
        </section>
    </div>
  )
}

export default Toggle