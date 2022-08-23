

  import React, { useEffect, useState } from 'react'
  
  export default function App(){
  
  const [toloding,setToloding] = useState(false)
    const [data,setData] = useState([])
  
  
    const orgDate =[
      {
        id:-1,
        name:-'Surbhi'
      },
      {
        id:-2,
        name:-'Payal'
      }
    ]
  
    useEffect(() =>{
      setToloding(true)
      setTimeout(() => {setToloding(false);setData(orgDate)},2000)
      
    },[])
  
    console.log(toloding,data);
  

    return (
      <div></div>
    )
  }
  