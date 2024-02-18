import React, { useEffect } from 'react'

export default function GridTable({data}) {
    useEffect((data)=>{
        console.log(data)
    },[])
  return (
    <div style={{border:"Solid red" , marginTop:"100px"}} >
      {data && data.length > 0 ? data.map((data , index)=>{
        return <p key={index} >
            {data.name}
        </p>
      }) :<p>No data</p>}
    </div>
  )
}
