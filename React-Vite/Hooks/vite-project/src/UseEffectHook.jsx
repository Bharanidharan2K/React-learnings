// UseEffect is used for when we load or update the new data
// UseEffect require two params 1. call back and 2. an array
// UseEffect will run when the website loads and it run once if the array is empty
// UseEffect will run when the website loads and it run every times if the array of variable gets updated
// Memory clean is optional but it would be good if we use that cozz, we have to set the default value before that value get update to avoid memory leaks.


import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  console.log("num1", num1)

  useEffect(() => {
    setNum1(200);
    console.log("Inside UseEffect")

    return() => {
        setNum1(100);
        console.log("Memory Clean")
    }
  }, [num1, num2])

  const handleAdd1 = () => {
    setNum1(currVal =>{
        return currVal += 1;
    })
  }
  const handleAdd2 = () => {
    setNum2(currVal =>{
        return currVal += 1;
    })
  }

  return (
    <div>
        <h1>UseEffect</h1>
        <h2>{num1}</h2>
        <button onClick={handleAdd1}>Add1</button>
        <h2>{num2}</h2>
        <button onClick={handleAdd2}>Add2</button>
    </div>
  )
}

export default UseEffectHook