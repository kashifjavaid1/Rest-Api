
'use client'
'./globals.css'

import { useEffect, useState } from "react";
import axios from 'axios'
function Axios() {
  const [users, setData] = useState([])
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((respons) => {
        console.log(respons);
        setData(respons.data)
      })
  }, [])
  return (
    <>
      <h1>UserName List</h1>
      {users.map((data,index) => {
        return (
      
          <table class="table">
          <thead>
            <tr>
              <th >Id</th>
              <th >Name</th>
              <th >User Name</th>
              <th >Email</th>
              <th >City</th>
            
              
            </tr>
          </thead>
          <tbody>
            <tr key={index}>
             
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.address.city}</td>
              
            </tr>
           
          </tbody>
        </table>
       
        )
      })
      }

    </>
  );
}
export default Axios;