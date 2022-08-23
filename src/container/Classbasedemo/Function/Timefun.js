import React, { useEffect, useState } from 'react'

 function Timefun(props) {
    const [Time , setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date())
    }
    useEffect (() => {

        //1.componentDidMount 2.componentDidupdate
        let TimeD = setInterval(() => tick(),1000)
        console.log("componentDidUpdate");

        //3.componentWillUnmount
        return () => {
        clearInterval(TimeD)
        }
    },[Time])
  return (
    <div>
        <p>{Time.toLocaleTimeString()}</p>
    </div>
  )
}
export default Timefun;
