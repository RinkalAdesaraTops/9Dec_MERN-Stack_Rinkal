import React, { createContext, useContext,useState } from 'react'
let userdata = createContext()
const UseContextExample = () => {
   const [name,setName] = useState("Testing..")
    return (
      <div>
        <h3>Component 1 called...</h3>
        <h4>Name is -- {name}</h4>
        <userdata.Provider value={name}>
            <Component2/>
        </userdata.Provider>
    </div>
  )
}
const Component2 = ()=>{
    return (
        <div>
            <h3>Component2 called...</h3>
            <Component3/>
        </div>
    )
}

const Component3 = ()=>{
    return (
        <div>
            <h3>Component3 called...</h3>
            <Component4/>
        </div>
    )
}
const Component4 = ()=>{
    let name = useContext(userdata)
    return (
        <div>
            <h3>Component4 called...</h3>
            <h3>Final Name is -- {name}</h3>
        </div>
    )
}
export default UseContextExample
