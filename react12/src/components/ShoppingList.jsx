import React from 'react'
import { useState } from 'react';
import AddItem from './AddItem';

const ShoppingList = () => {
    const [id, setId] = useState(1);

    const [items, setItems] = useState([{id: id, name: "First Item", quantity: 20}]);
  return (
    <div className=' text-slate-300 w-screen h-full flex items-center justify-center'>
        <div className='h-full w-[500px] mt-[-200px]'>
            <div>
            <span className='text-blue-300 font-serif font-bold underline text-3xl'>Shopping List:</span> 
            {items.map((item)=>(
            <div>
                <h1 className='underline font-serif'>Item no: {item.id}</h1>
            <ul key={item.id}>
                <li className='ml-2 text-sm'>Name: {item.name}</li>
                <li className='ml-2 text-sm'>Quantity: {item.quantity}</li>
            </ul>
            </div>
            ))}
            </div>
        </div>
        <AddItem itemId={id} idFunc={setId} cartItems = {items} cartfunc={setItems}/>
    </div>
  )
}

export default ShoppingList