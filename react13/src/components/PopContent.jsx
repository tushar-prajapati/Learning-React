import React from 'react'
import {createPortal} from 'react-dom'

const PopContent = ({copied}) => {
  return createPortal(
    <div>
        {copied && (
            <div style={{position:'absolute', bottom: '3rem'}}>Copied to Clipboard</div>
        )}
    </div>,
    document.querySelector('#pop')
  )
}

export default PopContent