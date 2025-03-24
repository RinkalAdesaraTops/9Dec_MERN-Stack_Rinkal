import React, { useEffect, useState } from 'react'

const LifecycleFunc = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(10)
        },3000)
    },[])
  return (
    <div>
        <h3>Count is -- {count}</h3>
    </div>
  )
}

export default LifecycleFunc
