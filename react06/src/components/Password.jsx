import React from 'react'

const ValidPassword = ()=> (<div>Valid Password</div>)
const InvalidPassword = ()=> (<div>Invalid Password</div>)

const Password = ({isValid}) => {
  if(isValid) return <ValidPassword />;
  return <InvalidPassword />
}

export default Password