import React from 'react'

const Products = (props) => {
  return (
    <div>
        <h2>Product Name: {props.name}</h2>
        <p>Product Price: {props.price}</p>
    </div>
  )
}

export default Products