'use client'
import axios from "axios";
import { useState } from "react"

export default function page() {
    const[userName,setuser]=useState('');
    const [data, setData] = useState('')

    const onClickHandler = async () => {
        let response = await axios.get(` https://api.github.com/users/${userName}`)
        setData(response.data)
    }
  return (
    <>
    <label htmlFor="username"><h3>UserName:</h3></label>
    <br />
    <input onChange={(event)=>setuser(event.target.value)} type="text" placeholder="UserName"/>
    <br />
    <br />
    <button onClick={onClickHandler}>Click Me</button>
    {
         <>
         <h1>Github user</h1> 
         <span> Id:{data.id}</span>
         <br />
         <label htmlFor="pic">picture</label>
         <img src={data.avatar_url} width={100} alt="" />
         <br />
         <span> bio: {data.bio}</span>
         <br />
         <span> Followers: {data.followers}</span>
     </>
    }
    </>
  )
}
