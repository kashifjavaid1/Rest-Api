'use client'
import { useState } from "react"
export default function page() {
    const [student,setstudent]=useState([{
        studentName:"kashif",
        RollNumber:612709,
        Section:"B"
    },
    {
        studentName:"Ali",
        RollNumber:612708,
        Section:"C"
    },
    {
        studentName:"Zain",
        RollNumber:612700,
        Section:"A"

    }
])
const deletbtn = (RollNumber)=>{
     let reststudent=student.filter((student)=>{
        if(student.RollNum !==RollNumber)
       return student
     })
     setstudent([reststudent])
}
  return (
    <>
    <table>
        <tr>
            <th>Name</th>
            <th>RollNumber</th>
            <th>Section</th>
            <th>Delete</th>
        </tr>
        {
            student.map((studentdata,index)=>{
                return (
                    <tr key={index}>
                        <td>{studentdata.studentName}</td>
                        <td>{studentdata.RollNumber}</td>
                        <td>{studentdata.Section}</td>
                        <button onClick={()=>deletbtn(student.RollNum)}>Delete</button>
                    </tr>
                )
            })
        }
    </table>
    </>
  )
}
