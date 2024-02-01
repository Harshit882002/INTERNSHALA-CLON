import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")



  const ClickHandler = async (e) => {

    e.preventDefault()

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // alert("jcnjd")

      const { data } = await axios.post("/api/user/student/signup",
        {
          email,
          password,
          firstname,
          lastname
        },
        config
      )

      console.log(data)

      navigate("/student/signin")
    }
    catch (err) {
      console.log(err.message)
    }

  }

  return (
    <div className='h-[calc(100vh-82px)] w-full flex flex-col items-center py-10 gap-5'>
      <h1 className='text-5xl font-bold'>Sign-up and apply for free</h1>
      <form className='w-full max-w-md flex flex-col gap-4 shadow-lg shadow-blue-100 py-10 px-5 rounded-xl' onSubmit={ClickHandler}>
        <div>
          <label htmlFor="e">Email</label>
          <input
            className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
            type="email"
            placeholder='John@example.com'
            id='e'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="p">Password</label>
          <input
            className='w-full px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
            type="text"
            placeholder='Must be atleat 6 character'
            id='p'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='w-full flex'>
          <div className='flex flex-col'>
            <label htmlFor="f">Firstname</label>
            <input type="text"
              className='w-1/2 px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
              placeholder='John'
              id='f'
              name='firstname'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="l">Lastname</label>
            <input type="text"
              className='w-1/2 px-3 py-1.5 mt-1.5 border-[2px] rounded-md outline-blue-500'
              placeholder='Doe'
              id='l'
              name='lastname'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>

        <p className='text-xs'>By signing up, you agree to our <Link className='text-blue-700'>Terms and Conditions</Link>.</p>

        <button
          className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
          type='submit'>Sign up</button>

        <span className='text-center'>Already registered? <Link to="/student/signin" className='text-blue-700'>Login</Link></span>

      </form>
    </div>
  )
}

export default Signup