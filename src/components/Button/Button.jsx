import React from 'react'
import './Button.css'

const Button = ( {text, isClickButton, click} ) => {
  return (
    <button 
    className= {isClickButton ? 'click-button' : 'reset-button'}
    onClick={click}
    >
        {text}
    </button>

  )
}

export default Button