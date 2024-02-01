import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Student from './pages/Student'
import Nav from './components/Nav'
import Signup from './pages/Signup'
import Homepage from './pages/Homepage'
import Employee from './pages/Employee'


const App = () => {
  return (
    <>
    {/* <Routes>
      <Route path='/user/student'/>
    </Routes> */}
    {/* <div>
      <Link to="/student/signin">login</Link>
      <Link to="/student">current user</Link>
    </div> */}
    <Nav />

    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/student/signin' element={<Login />} />
      <Route path='/employee/signin' element={<Login />} />
      <Route path='/student/signup' element={<Signup />} />
      <Route path='/employee/signup' element={<Signup />} />
      <Route path='/student/dashboard' element={<Student />} />
      <Route path='/employee/dashboard' element={<Employee />} />

    </Routes>
  </>
  )
}

export default App