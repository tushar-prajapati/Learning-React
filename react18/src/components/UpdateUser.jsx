import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import { useState } from 'react';
const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(name.trim()){
            updateUser(name,age);
            setName('');
            setAge('');
        }

    }
  return (
    <div>
        <h1>Update User: </h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
            <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age'/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser