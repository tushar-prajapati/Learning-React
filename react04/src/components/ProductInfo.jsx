import React from 'react'

const name = "Laptop";
const price = "$1200";
const availability = "In stock"

const ProductInfo = () => {
  return (
    <div>
        <ul>
            <li>Name: {name}</li>
            <li>Price: {price}</li>
            <li>Availability: {availability}</li>
        </ul>
    </div>
  )
}

export default ProductInfo