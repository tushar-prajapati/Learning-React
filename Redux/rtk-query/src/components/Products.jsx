import React from 'react'
import {useGetAllProductsQuery} from '../app/service/dummyData.js'

const Products = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery();
    if(isError){
        return(
            <h1>Ohnooo</h1>
        )
    }
    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }
    console.log(data)
  return (
    <div>
        {data?.products.map((product)=>(
            <h1 key={product.id}> {product.title}</h1>
        ))}
    </div>
  )
}

export default Products