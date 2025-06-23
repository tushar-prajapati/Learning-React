import React from 'react'
import { useAddNewProductMutation } from '../app/service/dummyData'

const AddProduct = () => {
    const [addProduct, {data, error, isLoading}] = useAddNewProductMutation();
    if(error){
        return <h1>Error</h1>
    }
    if(isLoading){
        <h1>Loadingg</h1>
    }

    const handleClick = async ()=>{
        try {
            const newProduct = {
                id: 1,
                title: "new product",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tenetur praesentium nam eum velit animi minima? Debitis sequi provident facere, impedit saepe mollitia."
            }
            await addProduct(newProduct)
            
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <div>
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.description}</h1>
        <button onClick={handleClick}>Add new product</button>
    </div>
  )
}

export default AddProduct