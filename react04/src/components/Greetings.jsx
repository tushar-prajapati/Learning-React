import React from 'react'

const today = new Date();
const name = "John"
const formattedDate = today.getFullYear() + '-' + 
                      String(today.getMonth() + 1).padStart(2, '0') + '-' + 
                      String(today.getDate()).padStart(2, '0');
const Greetings = () => {
  return (
    <div>
        <h1>Hello {name}
        </h1>
        <p>{formattedDate}</p>
    </div>
  )
}

export default Greetings