import React from 'react'
import UserList from './components/UserList'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <>
    Users: 
    <UserList />
    <br/>
    <br/>
    Products:
    <ProductList />
    </>
  )
}

export default App