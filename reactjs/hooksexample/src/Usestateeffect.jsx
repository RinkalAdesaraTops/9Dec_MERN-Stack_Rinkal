import React, { useEffect, useState,useRef } from 'react'
import axios from 'axios'
const Usestateeffect = () => {
    const [data,setData] = useState([])
    let a = useRef(100)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>setData(res.data))
        // fetch("https://jsonplaceholder.typicode.com/todos")
        // .then((a)=>a.json())
        // .then((res)=>setData(res))
    },[])
    const addCounter = ()=>{
        console.log(a);
        a.current += 1
    }
  return (
    <div>
        <h3>A is -- {a.current}</h3>
        <button onClick={addCounter}>Add</button>
        <table>
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((i)=>{
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td><input type='checkbox' checked={i.completed}/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Usestateeffect
