import { useState } from 'react'
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import ShoppingList from './components/ShoppingList';
import AddItem from './components/AddItem';



const App = () => {
  const [show, setShow] = useState(false);
  const showCart = (e) => {
    e.preventDefault();
    setShow(!show);
  }
  return (
    <>
    <div className='w-screen h-32 flex justify-center items-center'><FaCartArrowDown className='text-4xl text-slate-400 cursor-pointer hover:text-slate-300' onClick={showCart}/></div>
    <div id='container' className=''></div>
    { show && <ShoppingList /> }
    </>
  )
}

export default App
