import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import react-icons

const Navbar = ({user}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpin, setIsSpin] = useState(false); // State to control spin animation
  const [isSticky, setIsSticky] = useState(false)


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsSpin(!isSpin); // Toggle the spin animation

  };

  const navlinks = [
    {
      path: '/',
      display: 'Home',
      id: 'home',
    },
    // {
    //   path: '/who-we-are',
    //   display: 'Who We Are',
    //   id: 'whoweare',
    // },
    // {
    //   path: '/what-we-do',
    //   display: 'What We Do',
    //   id: 'whatwedo',
    // },
    {
      path: '/case-studies',
      display: 'Case Studies',
      id: 'casestudies',
    },
    {
      path: '/blog',
      display: 'Blog',
      id: 'blog',
    },
    {
      path: '/contact-us',
      display: 'Contact Us',
      id: 'contactus',
    },
  ];
useEffect(() => {
    const handlescroll = () => {
        if(window.scrollY > 1000) {
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
        window.addEventListener('scroll', handlescroll)
    }
    return () => {

        window.removeEventListener('scroll', handlescroll )
    }
    
},[])
  return (
    <>

      {/* Desktop view */}
      <nav className={`h-28 pt-5 relative bg-opacity-50 backdrop-blur-md backdrop-filter  z-50  lg:block hidden ${isSticky ? 'fixed top-0 left-0 w-full shadow-lg' : ''}`}>
        <div className="container gap-40 px-12 xl:px-20 flex items-center justify-start">
          <div className="logo items-center ">
            {/* <img src={logo} className="h-[157] w-auto" alt="" /> */}
            <h1 className='text-5xl'>Birthday</h1>
          </div>
          <ul className="flex list-none gap-8 items-center justify-end">
            {navlinks.map((link, index) => (
              <li className="justify-start items-center gap-2.5 flex" key={index}>
                <Link
                  className="text-neutral-400 text-base font-normal leading-normal tracking-wide"
                  to={link.path}
                  id={link.id}
                >
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
          {
          user ? 
          (
          <button className=' bg-white text-blue-500 hover:shadow-md transform hover:scale-105 transition-all ease-in-out duration-300 text-base font-normal rounded-full w-fit px-4 py-2'>
            Log out
          </button>

          ) :
          (
             <button className=' bg-white text-blue-500 hover:shadow-md transform hover:scale-105 transition-all ease-in-out duration-300 text-base font-normal rounded-full w-fit px-4 py-2'><Link to='/login'>
              Login or Create an Account
              </Link>               
             </button>
           )
          }
        </div>
      </nav>

      {/* Mobile View */}
     
      <nav className={`lg:hidden ${isSticky ? 'fixed top-0 left-0 w-full shadow-lg' : ''}`}>
        <div className="flex  items-center justify-between px-4 py-2 bg-opacity-50 backdrop-filter">
          <div className="logo ml-10 mt-4 items-center">
            {/* <img src={logo} className="h-[60px] md:h-[100px] items-center scale-150 w-auto" alt="" /> */}
            <h1 className='text-3xl'>Birthday</h1>
          </div>
          <button onClick={toggleModal} className={`text-neutral-500 transition-all hover:animate-spin duration-1000 ease-in-out z-[90] focus:outline-none `}>

            {isModalOpen ? (
              <FaTimes size={32} className="text-xl" />
            ) : (
              <FaBars size={32} className="text-xl" />
            )}{" "}
            {/* Toggle between burger and close icons */}
          </button>
        </div>
        <div
          className={`fixed top-0 left-0 w-full z-50 h-full bg-gray-800 bg-opacity-50 flex items-center ease-in-out duration-300 transition-opacity ${
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
                    <div className={`bg-white p-4 w-2/3 h-full max-w-sm rounded-lg transform transition-transform ease-in-out duration-300 ${isModalOpen ? 'translate-x-0' : '-translate-x-full'}`}>

            <div className="flex justify-end">
              
            </div>
            <ul className="mt-16 ml-5">
              {navlinks.map((link, index) => (
                <li key={index} className="my-4">
                  <Link
                    to={link.path}
                    id={link.id}
                    onClick={toggleModal}
                    className="text-neutral-600 hover:text-primary-500 text-base font-semibold leading-normal tracking-wide"
                  >
                    {link.display}
                  </Link>
                  <hr className=' animate-pulse duration-500 ease-in-out transition-all w-full h-2 fill-[#89216B] fil'/>
                </li>
              ))}
            </ul>
            <button className=' bg-white text-blue-500 hover:shadow-md transform hover:scale-105 transition-all ease-in-out duration-300 text-base font-normal rounded-full w-fit px-4 py-2'>
              <Link to='/login'>
            Login or Create an Account
              </Link>
          </button>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;
