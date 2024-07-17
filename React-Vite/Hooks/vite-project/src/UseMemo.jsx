import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyle = useMemo(() => {
    return {
            backgroundColor : dark ? "black" : "white",
            color : dark ? "white" : "black"
           }
  }, [dark]);
  const doubleNumber = useMemo(()=> {
    return doubleTheNumber(number);
  }, [number]);
  
  useEffect(() => {
    console.log("Theme changed")
  }, [themeStyle])



  return (
    <div>
        UseMemo
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => setDark((cur) => !cur)}>Toggle</button>
        <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}
function doubleTheNumber(num) {
    console.log("Slow fn running");
    for(let i=0; i<1000000000; i++){}
    return num * 2;
  }
export default UseMemo