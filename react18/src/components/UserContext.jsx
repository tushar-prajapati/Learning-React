import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) =>{
    const [user, setUser] = useState({
        name: "Tushar",
        age: 22
    });
 
    const updateUser = (newName, newAge)=>{
        setUser({name: newName, age: newAge})
    }
    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}