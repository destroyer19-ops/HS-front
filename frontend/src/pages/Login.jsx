import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaComment } from 'react-icons/fa'; // Import necessary icons
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const google = () => {
    // Handle Google login
  };

  const kingschat = () => {
    // Handle KingsChat login
  };

  const facebook = async (e) => {
    e.preventDefault();
    try {
      const url = 'https://hs-aexb.onrender.com/auth/facebook';
      console.log('Request URL:', url);
      window.location.href = url;

      const response = await axios.get(url, {});
      console.log('Response:', response);

      if (response.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error logging in with Facebook', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-md shadow-md p-8 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center text-blue-700 mb-4">
          Sign in
        </h1>
        <form className="space-y-4">
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Email"
              className="rounded-md py-2 px-3 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-md py-2 px-3 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-200 transform focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-200 transform focus:outline-none focus:ring focus:ring-blue-300"
            onClick={kingschat}
          >
            <FaComment className="mr-2" /> Login with KingsChat
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-200 transform focus:outline-none focus:ring focus:ring-blue-300"
            onClick={facebook}
          >
            <FaFacebook className="mr-2" /> Login with Facebook
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-200 transform focus:outline-none focus:ring focus:ring-blue-300"
            onClick={google}
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>
        </form>
        <p className="mt-8 text-xs text-center text-gray-700">
          Don't have an account?{' '}
          <a
            href="https://hs-birthday-api.vercel.app/"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
