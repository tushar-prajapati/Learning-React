import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {
  

  const onClickHandler=()=>{
    alert('Hello');
  }
  return (
    <div>
      <Button label='Click Me1' onClick={onClickHandler} disabled={false}/>
      <Button label='Click Me2'  disabled={true}/>
    </div>
  )
}
export default App