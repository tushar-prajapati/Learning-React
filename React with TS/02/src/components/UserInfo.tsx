import React from 'react'
import type { Info } from '../types'

type UserInfoProp = {
    user: Info;
}

const UserInfo: React.FC<UserInfoProp>=({user})=> {
  return (
    <div>
        <h2>{user.id}</h2>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
    </div>
  )
}

export default UserInfo