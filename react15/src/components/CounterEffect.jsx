import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = `Increment ${count}`;
    },[count])
  return (
    <div>
        Count: {count}
        <button onClick={()=> setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default CounterEffect