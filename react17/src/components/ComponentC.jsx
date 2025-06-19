import React from 'react'
import { useContext } from 'react'
import { Data, Data1 } from '../App'



const ComponentC = () => {
    const userName = useContext(Data)
    const userAge = useContext(Data1)
  return (
    <div>
        {userName}
        {userAge}
    </div>
  )
}

export default ComponentC