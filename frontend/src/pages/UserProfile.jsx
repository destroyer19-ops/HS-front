import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { setCredentials } from "../redux/authSlice";
import { useUpdateProfileMutation } from '../redux/usersApiSlice';


const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)

  const [updateProfile, { isLoading }] = useUpdateProfileMutation()
  useEffect(() => {
    setUser({
      ...user,
      name: userInfo.user.name,
      email: userInfo.user.email
    })
    console.log(user);
    console.log(userInfo);
  }, [userInfo])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // if (!passwordRegex.test(user.password)) {
  //   toast.error('Password must be at least 8 characters, include at least one uppercase letter, one number, and one special symbol.');
  //   return;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (user.name === '' || user.email === '' || user.password === '' || user.confirmPassword === '') {
    //   toast.error('Input fields cannot be empty');
    //   return;
    // } else 
    if (user.password !== user.confirmPassword) {
      toast.error('Passwords do not match!')
    } else {
      try {
        const res = await updateProfile({ 
          _id: userInfo.user._id,
          name: user.name, 
          email: user.email, 
          password: user.password }).unwrap()
        dispatch(setCredentials({ ...res }))
        // navigate('/')
        toast.success('Profile Updated')
      } catch (err) {
        toast.error(err?.data?.msg || err.error)
      }
    }


  }
  //   try {
  //     await axios.post('http://localhost:5000/api/v1/users/register', user);
  //     toast.success('Successfully created');
  //     setUser({ name: '', email: '', password: '' });
  //   } catch (error) {
  //     toast.error(error.response.data.msg);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-center">Update Profile</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {isLoading && <Spinner/>}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Update
            </button>
          </div>
        </form>
        {/* <p className="text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-blue-500 hover:underline"
            >
              Log In
            </Link>
          </p> */}
      </div>
    </div>
  );
};

export default UserProfile;
