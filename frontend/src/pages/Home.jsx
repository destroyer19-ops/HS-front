import React from 'react'
import FeturedBirthday from '../components/FeturedBirthday'
import Navbar from '../components/Navbar'
import ImageAnim from '../components/ImageAnim'

const Home = () => {
  return (
    <div className='h-screen justify-center px-10 bg-grey-100'>
      {/* <Navbar/> */}
      {/* <FeturedBirthday/> */}
      <ImageAnim/>
    </div>
  )
}

export default Home