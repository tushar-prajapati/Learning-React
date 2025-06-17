import React from 'react'
import CompX from './components/CompX'
import Person from './components/Person'
import Products from './components/Products'
import Card from './components/Card'
import Password from './components/Password'

const App = () => {
  return (
    <>
    {/* <Person name="John Doe" age="29" />
    <Products name="Laptop" price="$1400"/> */}
    <Password isValid={false}/>
    <Card>
      <h1>Child Component</h1>
    </Card>
    </>
  )
}

export default App