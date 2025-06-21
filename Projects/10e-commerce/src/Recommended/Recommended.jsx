import React from 'react'
import "./Recommended.css"
import Buttons from '../components/Buttons'

function Recommended({handleClick}) {
  return (
    <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className="recommended-flex">
          <Buttons onCLickHandler={handleClick} value='' title='All Products'/>
          <Buttons onCLickHandler={handleClick} value='Nike' title='Nike'/>
          <Buttons onCLickHandler={handleClick} value='Adidas' title='Adidas'/>
          <Buttons onCLickHandler={handleClick} value='Puma' title='Puma'/>
          <Buttons onCLickHandler={handleClick} value='Vans' title='Vans'/>
            
        </div>
    </div>
  )
}

export default Recommended