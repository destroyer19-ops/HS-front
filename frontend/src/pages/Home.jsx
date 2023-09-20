import React from 'react'
import FeturedBirthday from '../components/FeturedBirthday'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-purple-900 to-blue-500
    text-white'>
      {/* <Navbar/> */}
      <FeturedBirthday/>
    </div>
  )
}

export default Home