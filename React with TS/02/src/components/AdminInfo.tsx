import React from 'react'
import type { AdminInfoList } from '../types'

type AdminInfoProp = {
    admin: AdminInfoList
}

const AdminInfo: React.FC<AdminInfoProp> =({admin})=> {
  return (
    <div>
        <h2>{admin.id}</h2>
        <h2>{admin.name}</h2>
        <h2>{admin.email}</h2>
        <h2>{admin.role}</h2>
        <h2>{admin.lastLogin.toLocaleString()}</h2>
    </div>
  )
}

export default AdminInfo