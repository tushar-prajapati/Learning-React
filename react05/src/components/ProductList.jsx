import React from 'react'

const ProductList = () => {
    const productList = [
        {id:1, name:"Phone", price:"$699"},
        {id:2, name:"Laptop", price:"$1200"},
        {id:3, name:"Headphones", price:"$199"}
    ]
  return (
    <div>
        {productList.map(({id, name, price})=>(
            <ul key={id}>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList