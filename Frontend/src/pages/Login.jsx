import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const ClickHandler = async (e) => {

    e.preventDefault()

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // alert("jcnjd")

      const { data } = await axios.post("/api/user/student/signin",
        {
          email,
          password
        },
        config
      )

      console.log(data)

      navigate("/student")
    }
    catch (err) {
      console.log(err.message)
    }

  }

  return (
    <form  onSubmit={ClickHandler}>
        <input type="email"
          placeholder='Enter email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="text"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' >login</button>

      </form>
  )
}

export default Login