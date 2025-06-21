import React from 'react'

type ButtonShape ={
    label: string,
    onClick: ()=>void,
    disabled: boolean
}

const Button = ({label, onClick, disabled}: ButtonShape) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default Button