import React from 'react'
import { useState, useEffect } from 'react'
const BasicEffects = () => {
    useEffect(()=>{
        console.log('hello');
    },[])
  return (
    <div>

    </div>
  )
}

export default BasicEffects