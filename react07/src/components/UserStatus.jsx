import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
 if(isAdmin && loggedIn) return <h4>Welcome Admin!</h4>
 if(loggedIn && !isAdmin) return <h4>Welcome User!</h4>
 return <h4>Please Login</h4>
}

export default UserStatus