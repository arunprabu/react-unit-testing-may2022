import React, { useState } from 'react'

const Counter = () => {

  let [ value, setValue ] = useState(0);

  const handleIncrement = () => {
    setValue(value+1);
  }

  const handleDecrement = () => {
    setValue(value-1);
  }

  return (
    <div>
      <h2>Counter | Testing Events with State and Updating State</h2>
      <p>
        Initial Value is: 
        <span data-testid='valueTxt'>{value}</span>
      </p>

      <button data-testid='incrementBtn' 
        onClick={handleIncrement}>+</button>
      <button data-testid='decrementBtn' 
      onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter