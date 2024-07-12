import React, { useRef } from 'react'
import { useState } from 'react';

const UseRef = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    setInput((current) =>{
        current = inputRef.current.value;
        return current;
    });
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }

  console.log("Rendered")
  return (
    <>
        <div>UseRef</div>
        <input 
        ref={inputRef}
        type="text" 
        // value={input} 
        // onChange={(e) =>setInput(e.target.value)}
        />
        <button onClick={handleClick}>Click me</button>
        <p>Hi this is , {input}</p>
    </>
  )
}

export default UseRef;