'use client'

import { useState } from "react"

export default function page() {
    const[user,setuser]=useState("");
    const[number,setnumber]=useState();
  return (
  <>
  <label>User Name:</label>
  <br />
  
  <input onChange={(e)=>setuser(e.target.value)} type="text"  placeholder="user name"/>
  <br />
  <label>User Phone:</label>

  <br />
  <input onChange={(e)=>setnumber(e.target.value)} type="number"  placeholder="user name"/>
  <h4>UserName:{user}</h4>
  <h4>Phone:{number}</h4>
  </> 
  )
}
