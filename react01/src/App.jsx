import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header title="Tushar"/>
       <Header title="Name2"/>

    </>
  )
}

export default App
