import React, { useEffect, useState } from 'react'

export default function Timefun(props) {
    const [state, setstate] = useState(NewDate());

    const tick =()=>{
        setTime(new Date())
    }
    useEffect(() =>{
        //1.componentDidMount 2.componentDidupdate
        let timeD = setInterval(()=>tick(),1000)
        console.log("componentDidUpdate");

        //3.componentWillUnmount
        return()=>{
        clearInterval(timeD)
        }
    })[time]
  return (
    <div>
        <p>{time.toLocalTimeString()}</p>
    </div>
  )
}
