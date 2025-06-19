import React from 'react'
import { useReducer, useState } from 'react'
import { counterReducer, initialState } from './counterReducer.js'



const Counter = () => {

    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0)

    function inc() {
         dispatch({type: "increment"});
    }
    function dec(){
         dispatch({type: "decrement"});
    }
    function incByAm(){
         dispatch({type: "incrementByAmount", payload: Number(inputValue)})
        setInputValue(0);
    }
    function decByAm(){
         dispatch({type: "decrementByAmount", payload: Number(inputValue)})
        setInputValue(0)
    }
  return (
    <div>
        <h1>Count: {state.count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <input type="number" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button onClick={incByAm}>Inc</button>
        <button onClick={decByAm}>Dec</button>
    </div>
  )
}

export default Counter