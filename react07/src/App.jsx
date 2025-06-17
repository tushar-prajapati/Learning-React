import React from 'react'
import Greeting from './components/Greeting'
import UserStatus from './components/UserStatus'
import Weather from './components/Weather'

const App = () => {
  return (
    <>
    <Greeting timeOfDay='morning'/>
    <Greeting timeOfDay='afternoon'/>
    <Greeting />
    <UserStatus loggedIn={true} isAdmin={true}/>
    <UserStatus loggedIn={true} isAdmin={false}/>
    <UserStatus loggedIn={false} isAdmin={false}/>
    <Weather temperature={24}/>
    <Weather temperature={29}/>
    <Weather temperature={10}/>

    </>
  )
}

export default App