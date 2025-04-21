import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import { addDoc,collection, deleteDoc, onSnapshot,query,doc, updateDoc, getDoc } from 'firebase/firestore'
const UserCRUD = () => {
    const [data,setData] = useState({
        uname:'',
        age:"",
        salary:""
    })
    const [id,setId] = useState('')
    const [alldata,setAlldata]= useState([])
    useEffect(()=>{
        const q = query(collection(db, "usertable"));
        const getData = onSnapshot(q,(dt)=>{
            let arr = []
            dt.forEach((i)=>{
                arr.push({...i.data(),id:i.id})
            })
            setAlldata(arr)
        })
//id name age salary
    },[])
    const handleChange = (e)=>{
        const {name,value} = e.target
        // let nm = e.target.name
        // let val = e.target.value
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = async(e)=>{
        e.preventDefault()
        if(id!=''){
            await updateDoc(doc(db,"usertable",id),data)
        } else {
            await addDoc(collection(db,"usertable"),data)
        }
        setData({
            uname:"",
            age:"",
            salary:''
        })
        setId('')
    }
    const delData = async(id)=>{
        await deleteDoc(doc(db,"usertable",id))
    }
    const editData =async(id)=>{
        let res =  await getDoc(doc(db,"usertable",id))
        setData(res.data())
        setId(id)
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name:
        <input type="text" name="uname" id="uname" value={data.uname} onChange={handleChange}/><br /><br />
        Age:
        <input type="number" name="age" id="age" value={data.age} onChange={handleChange}/><br /><br />
        Salary:
        <input type="number" name="salary" id="salary" value={data.salary} onChange={handleChange}/><br /><br />
        <input type="submit" value='Save'/><br /><br />        
      </form>
      <br /><br />
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                    return (
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.uname}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>
                            <button onClick={()=>editData(i.id)}>Edit</button>
                            <button onClick={()=>delData(i.id)}>Delete</button>
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

export default UserCRUD
