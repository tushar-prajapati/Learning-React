import React from 'react'
import { useReducer } from 'react'
import Counter from './Counter';

// const initialState = {count: 0};

// const reducer = (state, action) =>{
//   switch (action.type) {
//     case 'increment':
//         return {...state, count: state.count+1};
//       break;
//       case 'decrement':
//         return {...state, count: state.count-1};
//       break;
//       case "reset":
//         return{...state, count: 0};
    
//     default:
//       return state;
//       break;
//   }
// }


const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Counter />
      {/* <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type: "increment"})}>+</button>
      <button onClick={()=>dispatch({type: "decrement"})}>-</button>
      <button onClick={()=>dispatch({type: "reset"})}>Reset</button> */}
    </div>
  )
}

export default App