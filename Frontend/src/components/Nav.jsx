import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
// import Logo from '/logo.png'


const Nav = ({view}) => {
  return (
    <div className='border-b-2 border-zinc-300'>
      <nav className='flex w-[80%]  m-auto justify-between items-center '>

        <NavLink to="/" className='h-20'><img className='h-[100%] bg-[url(/logo.png)] ' src="/logo.png" alt="" /></NavLink>

        <div className='flex gap-16' id="navleft">
          <NavLink>Internships</NavLink>
          <NavLink>Jobs</NavLink>
          <NavLink>Courses</NavLink>
        </div>
        <div className='flex gap-16' id="navright">
          <div className='flex items-center gap-3'>
            <CiSearch size='25' />
            <NavLink >Search</NavLink>
          </div>

          <NavLink to="/student/signin">Login</NavLink>
          <NavLink to="/student/signup">Register</NavLink>
          <NavLink className='border-l-2 border-zinc-500 pl-3'>Hire Talent</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Nav