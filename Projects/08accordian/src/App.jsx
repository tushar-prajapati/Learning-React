import React from 'react'
import Accordian from './Accordian'
import { accordionData } from './content.js'

const App = () => {
  return (
    <div className='accordion'>
      {accordionData.map(({title, content})=>(
        <Accordian title={title} content={content}/>
      ))}
      
    </div>
  )
}

export default App