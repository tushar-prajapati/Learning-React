import React from 'react'

const Morning = ()=> <h4>Good Morning!</h4>;
const Afternoon = ()=><h4>Good Afternoon!</h4> ;

const Greeting = ({timeOfDay}) => {
  return (timeOfDay==='morning') ? <Morning />: <Afternoon />
  
}

export default Greeting