import React, { useEffect, useState } from 'react'
import axios from "axios"

const Student = () => {
    const [d, setD] = useState({})

    const fetchData = async () => {
        const response = await axios.get("/api/user/student")
        setD(response.data)
       console.log(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    // const  data  = axios.get("/user/student")
    // console.log(data)
  return (
    <div>
      <div>{d.firstname}</div>
      <div>{d.email}</div>
    </div>
  )
}

export default Student