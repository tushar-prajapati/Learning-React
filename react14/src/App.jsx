import React from 'react'
import { useEffect, useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData(){
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await  response.json();
      if(data && data.length) setData(data);
    }
    getData();
  },[])

  // useEffect(()=>{
  //   console.log('call useEffect');
  //   document.title = `Increment ${value}`
  // }, [])


  return (
    <div>
      <ul>
        {data.map((item)=>(
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {/* <h2>{value}</h2>
      <button onClick={()=>setValue(value+1)}>Click Me</button> */}
    </div>
  )
}

export default App