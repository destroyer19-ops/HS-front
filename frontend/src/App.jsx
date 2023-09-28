import React from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dob from './pages/Dob'
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup'

const App = () => {
  const user = false
  return (
    <div className=''>
      <Navbar user={user}/>
      <div className="my-2">

      <Outlet/>
      </div>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/signin' element={user ? <Navigate to='/'/> : <Signin/>}/>
        <Route path='/signup' element={user ? <Navigate to='/'/> : <Signup/>}/>
        <Route path='/add-birthday' element={user ? <Dob/> : <Navigate to='/login'/>}/>
      </Routes> */}
      {/* <Home/> */}
      {/* <Login/> */}
      <ToastContainer />

    </div>
  )
}

export default App