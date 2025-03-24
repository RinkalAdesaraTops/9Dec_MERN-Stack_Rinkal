import React, { useState } from 'react'

const Crud = () => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [id,setId] = useState('')
    const [data,setData] = useState([])
    const handleChange = (e)=>{
        setAge(e.target.value)
    }
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            let res = data.map((i,index)=>{
                    if(index == id){
                        i.name = name
                        i.age = age
                    }
                    return i
            })
            setData(res)
        } else {
            setData([
                ...data,
                {
                    "name":name,
                    "age":age
                }
            ])
        }
        
        setName('')
        setAge('')
        setId('')
        // localStorage.setItem("userinfo",JSON.stringify(data))
    }
    const delData = (id)=>{
        let res = data.filter((i,index)=>{
                return index != id
        })
        setData(res)
    }
    const editData = (id)=>{
        let res = data.find((i,index)=>{
                return index == id
        })
       setName(res.name)
       setAge(res.age)
       setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        
        <label htmlFor="">Age:</label>
        <input type="number" name="age" id="age" value={age} onChange={handleChange}/><br /><br />
        <input type="submit" value='Save' /><br /><br />
      </form>
      <br /><br />
      <table border={'2'}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                            <button onClick={()=>editData(index)}>Edit</button>
                                <button onClick={()=>delData(index)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Crud
