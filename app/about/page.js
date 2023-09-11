'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function GetData() {
const [comments,setcomments]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((Response)=>{
      console.log(Response);
      setcomments(Response.data)
    })
  })
  return(
    <>
    <h1>Comments History</h1>
    {
      comments.map((data,index)=>{
       return(
        <>
        <h3>ID</h3>
        <p>{data.id}</p>
        <h3>Email</h3>
        <p>{data.email}</p>

        </>
   
       )
      })
    }
    </>
  );
}
export default GetData;