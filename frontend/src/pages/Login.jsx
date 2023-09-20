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
      const url = 'https://hs-birthday-api.vercel.app/';
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
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-lg shadow-rose-600/40 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 uppercase">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mt-6">
            <button className="w-full flex items-center justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={kingschat}>
              <FaComment className="mr-2" /> Login with KingsChat
            </button>
          </div>
          <div className="mt-6">
            <button className="w-full flex items-center justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={facebook}>
              <FaFacebook className="mr-2" /> Login with Facebook
            </button>
          </div>
          <div className="mt-6">
            <button className="w-full flex items-center justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={google}>
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{' '}
          <a
            href="https://hs-birthday-api.vercel.app/"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up on KingsChat
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
