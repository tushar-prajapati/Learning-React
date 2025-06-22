import React from 'react'
import { useState } from 'react'
export type User = {
    age: number,
    name: string,
    email: string,
  }

const UserProfile = () => {
    const [user, setUser] = useState<User>({
        name: '',
        age: 0,
        email: ''
      })

    const updateName =(name: string)=>{
        setUser((prev)=>({...prev, name:name}))
    }
    const updateAge = (age: number)=>{
        setUser(prev=>({...prev, age: age}))
    }
    const updateEmail = (email: string)=>{
        setUser(prev=>({...prev, email: email}))
    }
  return (
    <div>
        <input type="text" placeholder='Name' value={user.name} onChange={e=>updateName(e.target.value)}/>
        <input type="number" placeholder='Age' value={user.age>0 ? user.age: ''} onChange={e=>updateAge(e.target.value)}/>
        <input type="text" value={user.email} placeholder='Email' onChange={e=>updateEmail(e.target.value)}/>
        <div>
            <h1>User Info: </h1>
            <h3>{user.name}</h3>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
        </div>
    </div>
  )
}

export default UserProfile