import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>User Profile</h1>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </div>
  )
}

export default UserProfile