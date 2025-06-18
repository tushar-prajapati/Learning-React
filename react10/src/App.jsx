import React from 'react'
import { useState } from 'react'

const App = () => {
  const [users, setUsers] = useState(["Tushar", "Alex", "John"]);

  const addUser = (e)=>{
    e.preventDefault();
    const user = document.getElementById('addUserInput');
    setUsers([...users, user.value]);
    user.value = "";
  }
  return (
    <div>
      Users: 
      {users.map((user)=>(
        <li key={Math.random()}>{user}</li>
      ))}
      <form action="">
      <label htmlFor="addUser">
        <input type="text" name="addUser" id="addUserInput" />
        </label>
        <button onClick={addUser}>Add User</button>
      </form>
    </div>
  )
}

export default App