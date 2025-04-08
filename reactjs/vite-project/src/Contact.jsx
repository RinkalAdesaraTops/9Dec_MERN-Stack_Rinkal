import React, { useEffect, useState } from 'react'

const Contact = () => {
    let [count,setCount] = useState(1)
    useEffect(()=>{
        for(let i=0;i<100000000;i++){
            count+=i          
        }
        setCount(count)
    },[])
  return (
    <div>
      <h3>Count is --- {count}</h3>
    </div>
  )
}

export default Contact
