import React from 'react'

const AddItem = ({itemId, idFunc, cartItems, cartfunc}) => {
    const addItem = (e)=>{
        e.preventDefault();
        const newItemName = document.getElementById('name').value;
        const newItemqty = Number(document.getElementById('qty').value);
        const newItemId = Number(itemId)+1;
        const newItem = {id: newItemId,name: newItemName,quantity: newItemqty};
        1;
        idFunc(itemId+1);
        cartfunc([...cartItems, newItem]);
        document.getElementById('name').value = '';
        document.getElementById('qty').value = '';
        
    }
  return (
    <div className='h-72 w-64 rounded-3xl border border-slate-300 flex items-center justify-center'>
        <form action="">
            <h3 className='ml-6 mb-6 text-xl font-serif underline'>Add New Item:</h3>
            <input type="text" id='name' placeholder='Item Name' className='p-2 m-2 ml-8 text-black text-sm bg-slate-200 rounded-xl'/>
            <input type="text" id='qty'  placeholder='Item Quantity' className='p-2 m-2 ml-8 text-sm text-black bg-slate-200 rounded-xl'/>
            <button className='bg-blue-900 text-xs font-serif p-3 border border-slate-500 hover:bg-blue-600 cursor-pointer  ml-20 rounded-full' onClick={addItem}>Add Item</button>
        </form>
    </div>
  )
}

export default AddItem