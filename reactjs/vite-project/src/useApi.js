import React,{useState,useEffect} from 'react'
import axios from 'axios'
const useApi = (url) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(url)
            .then((res)=>setData(res.data))      
    })
    return [data]
}

export default useApi
