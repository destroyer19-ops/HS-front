import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import react-icons
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../redux/usersApiSlice';
import { logout } from '../redux/authSlice';

const Navbar = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSpin, setIsSpin] = useState(false); // State to control spin animation
  const [isSticky, setIsSticky] = useState(false)
  const [isDropdown, setIsDropdownOpen] = useState(false)
  const [isRotated, setIsRotated] = useState(false); // New state for rotation

  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [logoutApiCall] = useLogoutMutation()

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdown)
    setIsRotated(!isRotated)
  }
  const closeDropDown = () => {
    // setIsDropdownOpen(false)
    // setIsRotated(false)
  }
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      dispatch(logout())
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  }
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
      path: '/wish-someone',
      display: 'Wish Someone',
      id: 'wishsomeone',
    },
    {
      path: '/add-birthday',
      display: 'Add Birthday',
      id: 'Dob',
    },
    {
      path: '/contact-us',
      display: 'Contact Us',
      id: 'contactus',
    },
  ];
  useEffect(() => {
    const handlescroll = () => {
      console.log('hello');
      if (window.scrollY > 1000) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
      window.addEventListener('scroll', handlescroll)
    }
    return () => {

      window.removeEventListener('scroll', handlescroll)
    }

  }, [])
  return (
    <>

      {/* Desktop view */}
      <nav className={`h-20 pt-2 pb-2 relative bg-white backdrop-blur-md backdrop-filter lg:block hidden ${isSticky ? 'sticky top-0 left-0 w-full shadow-lg' : ''}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="logo items-center">
            <h1 className="text-4xl font-bold text-blue-600">Birthday</h1>
          </div>
          <ul className="flex list-none gap-8 items-center justify-end">
            {navlinks.map((link, index) => (
              <li className="flex items-center" key={index}>
                <Link
                  className="text-gray-600 hover:text-blue-600 text-base font-medium"
                  to={link.path}
                  id={link.id}
                >
                  {link.display}
                </Link>
              </li>
            ))}
          </ul>
          {userInfo ? (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="text-blue-600 hover:text-blue-800 text-base font-medium group"
                  onClick={handleDropDown}          >
                  {userInfo.user.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={` h-5 w-5 inline ml-2 transform ${isRotated ? 'rotate-180' : ''}  transition-transform duration-300 `}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 7.293a1 1 0 011.414 0L10 8.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414 1 1 0 011.414 0L10 8.586zM10 4a1 1 0 110 2 1 1 0 010-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdown && (

                  <div onMouseLeave={closeDropDown} className="absolute  mt-2 space-y-2 right-0 bg-white border border-gray-200 shadow-lg rounded-md text-base font-medium transform origin-top-right scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Link className='block px-4 py-2 text-gray-700 hover:text-blue-600' to={'/profile'}> Profile</Link>

                    <a href="#" className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                      Settings
                    </a>
                  </div>
                )}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white text-base font-medium rounded-full px-4 py-2 transition-all ease-in-out duration-300"
                onClick={logoutHandler}
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white text-base font-medium rounded-full px-4 py-2 transition-all ease-in-out duration-300"
            >
              <Link to="/login">Login or Create an Account</Link>
            </button>
          )}
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
          className={`fixed top-0 left-0 w-full z-50 h-full bg-gray-800 bg-opacity-50 flex items-center ease-in-out duration-300 transition-opacity ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
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
                  <hr className=' animate-pulse duration-500 ease-in-out transition-all w-full h-2 fill-[#89216B] fil' />
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
