import React from 'react'

const UserList = () => {
    const users = [
        {id: 1, name: "Alice", age: 25},
        {id: 2, name: "Bob", age: 35},
        {id: 3, name: "Charlie", age: 20}
    ]
  return (
    <div>
        {users.map(({id, name, age})=>(
            <ul key={id}>
                <li>{name}</li>
                <li>{age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList