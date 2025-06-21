import React from 'react'

function Buttons({onCLickHandler, value, title}) {
  return (
    <button style={{cursor: 'pointer'}} onClick={onCLickHandler} value={value} className='btns'>{title}</button>
  )
}

export default Buttons