import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dob from './pages/Dob'
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  const user = false
  return (
    <div className='bg-gray-300'>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/add-birthday' element={user ? <Dob/> : <Navigate to='/login'/>}/>
      </Routes>
      {/* <Home/> */}
      {/* <Login/> */}
    </div>
  )
}

export default App