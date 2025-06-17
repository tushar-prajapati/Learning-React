import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import ProfileCard from './components/ProfileCard';
import StyleCard from './components/StyleCard';
import IconComponent from './components/IconComponent';


const App = () => {
  return (
    <>
    <ProfileCard />
    <IconComponent />
    <StyleCard />

    </>
    // <div className='h-screen w-screen flex items-center justify-center bg-green-600'>
    //   <div  className='text-white p-10 rounded-3xl border-2 border-white'>
    //   {/* <FaCartArrowDown /> */}
    // </div>
    // </div>
  )
}

export default App