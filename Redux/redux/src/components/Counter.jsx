import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../app/features/counter/counterSlice.js'

const Counter = () => {
    const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={()=> dispatch(increment())}>Inc</button>
      <button onClick={()=>dispatch(decrement())}>Dec</button>
    </div>
  )
}

export default Counter