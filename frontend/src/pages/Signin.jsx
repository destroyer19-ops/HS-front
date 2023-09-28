import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaUser, FaLock } from "react-icons/fa";
import kingschatlogo from '../assets/kingschat.png'
import axios from "axios";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLoginMutation} from '../redux/usersApiSlice'
import { setCredentials } from "../redux/authSlice";
import Spinner from "../components/Spinner";
const Signin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [login, {isLoading}] = useLoginMutation()
    const {userInfo} = useSelector((state)=>state.auth)
    
    useEffect(()=> {
        if(userInfo){
            navigate('/')
        }
    },[navigate, userInfo])

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        // console.log(`${name} : ${value}`);
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user.email, user.password);

        
        if (user.email === "" || user.password === "") {
            toast.error('Input fields cannot be empty')
        } else {
            try {
                const res = await login({email: user.email, password: user.password }).unwrap()
                console.log(user);
                dispatch(setCredentials({...res}))
                console.log(res);
                setTimeout(()=>{

                    navigate('/')
                },2000)
            } catch (err) {
                toast.error(err?.data?.msg || err.error)
                console.log(err);
            }
            // try {
            //     await axios.post('http://localhost:5000/api/v1/users/login', user)
            //     toast.success('Successfully created')
            //     setUser({ ...user, email: "", password: "" })
            //     navigate('/')
            // } catch (error) {
            //     toast.error(error.response.data.msg)
            //     console.log(error);
            // }
        }
    }

    const google = () => {
        // Handle Google login
    };

    const kingschat = () => {
        // Handle KingsChat login
    };

    const facebook = async (e) => {
        e.preventDefault();
        try {
            const url = "https://hs-aexb.onrender.com/auth/facebook";
            console.log("Request URL:", url);
            window.location.href = url;

            const response = await axios.get(url, {});
            console.log("Response:", response);

            if (response.status === 200) {
                navigate("/");
            }
        } catch (error) {
            console.error("Error logging in with Facebook", error);
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#F8F8F8] via-[#ECECEC] to-[#F8F8F8] min-h-screen flex justify-center items-center">
            <div className="bg-white w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg p-8 shadow-md">
                <div className="mb-8 text-center">
                    <p className="text-4xl font-bold text-blue-600">Log In</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex items-center bg-gray-100 rounded-md p-2">
                        <FaUser className="text-gray-500" />
                        <input
                            type='email'
                            onChange={handleChange}
                            name='email'
                            value={user.email}
                            placeholder='Email'
                            className="w-full ml-2 outline-none"
                        />
                    </div>
                    <div className="mb-4 flex items-center bg-gray-100 rounded-md p-2">
                        <FaLock className="text-gray-500" />
                        <input
                            type='password'
                            onChange={handleChange}
                            placeholder='Password'
                            name='password'
                            value={user.password}
                            className="w-full ml-2 outline-none"
                        />
                    </div>
                    <div className="mb-8">
                        <button
                            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                            type="submit"
                            >
                            Log In
                        </button>
                    </div>
                             {isLoading && <Spinner/>}
                </form>
                <div className="mb-6 text-center">
                    <p className="text-gray-600 font-medium">OR</p>
                </div>
                <div className="mb-6">
                    <button
                        className="w-full flex items-center hover:bg-blue-600 hover:text-white justify-center py-3 rounded-md border border-gray-300"
                        onClick={facebook}
                    >

                        <FaFacebookSquare className="text-blue-600 hover:text-white mr-2 text-xl" />
                        Log in with Facebook
                    </button>
                </div>
                <div className="mb-6">
                    <button
                        className="w-full flex items-center hover:text-white hover:bg-blue-600 justify-center py-3 rounded-md border border-gray-300"
                        onClick={kingschat}
                    >
                        <img src={kingschatlogo} className="h-7 w-auto mr-2" alt="" />
                        Log in with KingsChat
                    </button>
                </div>
                <div className="mb-4 text-center">
                    <p className="text-sm text-gray-600">
                        <a href="/#" className="text-blue-600 hover:underline">
                            Forgot your password?
                        </a>
                    </p>
                    <p 
                className='mt-4 text-sm'>
                    Don't have an account?{' '}
                    <span className='text-blue-500 hover:underline'>
                        <Link to='/register'>Sign Up</Link>
                    </span>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
