import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {

  const [num, setnum] = useState(1)

  const handleIncrement =() =>{
    setnum((currentNum) =>{
      return currentNum += 1;
    });
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </>
  )
}

export default UseStateHook;