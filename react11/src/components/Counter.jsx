import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount((prev)=>prev+1);
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter