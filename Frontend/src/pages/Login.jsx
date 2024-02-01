import axios from 'axios';
// import { response } from 'express';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [a, b] = useState(true)


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

            const { data } = await axios.post(`${a ? '/api/user/student/signin' : '/api/employe/signin'}`,
                {
                    email,
                    password
                },
                config
            )

            console.log(data)

            a ? navigate("/student/dashboard") : navigate("/employee/dashboard")
        }
        catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className='h-[calc(100vh-82px)] w-full flex flex-col items-center py-10 gap-5'>
            <h1 className='text-5xl font-bold'>Login to show more</h1>
            <div className='w-full max-w-md flex flex-col gap-4 shadow-lg shadow-blue-100  rounded-xl overflow-hidden py-10 px-5'>
                <div className='w-full flex'>
                    <div
                        onClick={() => b(true)}
                        className='text-2xl text-center w-1/2 cursor-pointer py-3 font-semibold'
                        style={a ? { borderBottom: "3px solid blue", color: "blue" } : { borderBottomColor: "transparent" }}>Student</div>
                    <div
                        onClick={() => b(false)}
                        className='text-2xl text-center w-1/2 cursor-pointer py-3 font-semibold'
                        style={a ? { backgroundColor: "transparent" } : { borderBottom: "3px solid blue", color: "blue" }}>Employee</div>
                </div>
                <form
                    className='w-full flex flex-col gap-4 pt-5'
                    onSubmit={ClickHandler}>
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

                    <Link to="/student/signin"
                        className='text-blue-700 text-right font-semibold text-sm'
                    >Forget Password?</Link>

                    <button
                        className='w-full px-3 py-2 rounded-md bg-blue-500 text-white font-semibold'
                        type='submit' >Login
                    </button>

                    <span className='text-center'>New to Internshala? Register
                    (
                        <Link to="/student/signup" className='text-blue-700 font-semibold'>Student</Link>
                        /
                        <Link to="/employee/signup" className='text-blue-700 font-semibold'>Company</Link>
                    )
                    </span>

                </form>
            </div>

        </div>
    )
}

export default Login