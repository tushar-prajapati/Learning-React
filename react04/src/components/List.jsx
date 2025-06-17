import React from 'react'

const nums = [1,2,3,4,5];

const List = () => {
  return (
    <>
    {nums.map((num)=>(
        <ul key={Math.random()}>
            <li>{num}</li>
        </ul>
    ))}
    </>
  )
}

export default List