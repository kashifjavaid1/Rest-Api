'use client'
const { useState } = require("react");
function Hook() {
const [count,setcount]=useState(0);
   function incrementhandle() {
    return(
      setcount(count+1)  
    )
   }
   function handle() {
    return(
        setcount(count-1)
    )
}
    return(
    <>
    <button onClick={incrementhandle}>Increment</button>

    <button onClick={handle}>Decrement</button>
    </>
    );
}
export default Hook;