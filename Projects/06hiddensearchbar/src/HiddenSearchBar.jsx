import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import './style.css'


const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgColor, setBgcolor] = useState('white');

    const handleClick = (e) =>{
        setBgcolor('#1a1a1a');

        if(e.target.className==='container'){
            setShowInput(false);
            setBgcolor('white')
        }

    }

  return (
    <section className='container' style={{backgroundColor: bgColor}} onClick={handleClick}>
        {showInput? (
            <input type="text" placeholder='Search...'/>
        ): (
            <FaSearch onClick={()=>setShowInput(true)} />
        ) }
    </section>
  )
}

export default HiddenSearchBar