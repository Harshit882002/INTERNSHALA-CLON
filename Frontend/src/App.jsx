import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Student from './pages/Student'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path='/user/student'/>
      </Routes> */}
      <div>
          <Link to="/student/signin">login</Link>
          <Link to="/student">current user</Link>
          
      </div>
      <Routes>
        <Route path='/student/signin' element={<Login />}/>
        <Route path='/student' element={<Student />}/>
      </Routes>
      {/* <Nav/> */}
    </>
  )
}

export default App