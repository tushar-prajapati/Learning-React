import { useState } from "react";

import React from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const countHandler = () =>{
    setCount(count+1);
  }
  const decrement = () => setCount(count-1);
  return (
    <>
      <h1>{count}</h1>
      <button style={{padding: "5px", backgroundColor: "black", color: "white", cursor: "pointer"}} onClick={countHandler}>+</button><br/>
      <button style={{padding: "5px", backgroundColor: "black", color: "white", cursor: "pointer"}} onClick={decrement}>-</button>
    </>
  )
}

export default App