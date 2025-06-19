import React from 'react'
import { useEffect, useState } from 'react';

const FetchDataEffect = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async() =>{
            const fetchedData= await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await fetchedData.json();
            if(data && data.length) setData(data);
        }
        fetchData();
    },[]);
  return (
    <div>
        {data.length>0 ? <h2>{data[0].title}</h2>: <p>Loading</p>}
    </div>
  )
}

export default FetchDataEffect