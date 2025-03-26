import React, { useState } from 'react'

const ContextExample = () => {
    const [name,setName] = useState("Testing..")
  return (
    <div>
      <h3>Component 1 called...</h3>
      <h4>Name is -- {name}</h4>
      <Component2 name={name}/>
    </div>
  )
}

const Component2 = (props)=>{
    return (
        <div>
            <h3>Component2 called...</h3>
            <Component3 name={props.name}/>
        </div>
    )
}

const Component3 = (props)=>{
    return (
        <div>
            <h3>Component3 called...</h3>
            <Component4 name={props.name}/>
        </div>
    )
}
const Component4 = (props)=>{
    return (
        <div>
            <h3>Component4 called...</h3>
            <h3>Final Name is -- {props.name}</h3>
        </div>
    )
}
export default ContextExample
