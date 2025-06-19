import React from 'react'
import { useRef } from 'react'

const App = () => {
  const inputElement = useRef(null)

  const focusInput = ()=>{
    inputElement.current.focus();
    inputElement.current.value = "Hello"
  }

  return (
    <div>
      <input type="text" ref={(inputElement)} />
      <button onClick={()=>focusInput()}>Focus and write Hello</button>
    </div>
  )
}

export default App