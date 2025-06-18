import React from 'react'
import { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState({name: "Tushar", age:22})
    const change = (e)=>{
        e.preventDefault();
        const newName = document.getElementById('changeName').value;
        const newAge = document.getElementById('changeAge').value;
        if(newName != ''){
            setProfile({...profile, name : newName})
        }
        if(newAge != ''){
            setProfile({...profile, age : Number(newAge)})
        }
        document.getElementById('changeName').value = '';
        document.getElementById('changeAge').value = '';

    }
  return (
    <div>
        <h2>Name: {profile.name}</h2>
        <h2>Age: {profile.age}</h2>
        <form action="">
            <input type="text" id='changeName' placeholder='Enter new name'/>
            <input type="text" id='changeAge' placeholder='Enter new age'/>
            <button onClick={change}>Update</button>
        </form>
    </div>
  )
}

export default Profile