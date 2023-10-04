import React from 'react'
import './Counter.css'

const Counter = ({ clicksNumber }) => {
  return (
    <div className='counter'>
        {clicksNumber}
    </div>
  )
}

export default Counter