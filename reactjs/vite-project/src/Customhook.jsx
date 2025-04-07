import React, { useEffect, useState } from 'react'
import useApi from './useApi'

const Customhook = () => {
    const [post] = useApi("https://jsonplaceholder.typicode.com/posts")
    const [user] = useApi("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
      <table>
        <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        {
            post.map((i)=>{
                return (
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.body}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Customhook
