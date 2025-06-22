import React from 'react'
import UserInfo from './components/UserInfo'
import AdminInfo from './components/AdminInfo'
import type { AdminInfoList, Info } from './types'


const App = () => {
  const user: Info = {
    id: 1,
    name: "John doe",
    email: 'john@gmail.com',
  }

  const admin: AdminInfoList = {
    id: 2,
    name: "Jannie doe",
    email: 'jannie@gmail.com',
    role: 'admin',
    lastLogin: new Date()

  }


  return (
    <div>
      <UserInfo user={user} />
      <AdminInfo admin={admin}/>
    </div>
  )
}

export default App