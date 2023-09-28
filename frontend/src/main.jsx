import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import store from './redux/Store'
import { Provider } from 'react-redux'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import UserProfile from './pages/UserProfile.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/register' element={<Signup />} />
      {/* Private Routes  */}
      {/* <Route path='' element={<PrivateRoute />}> */}
        <Route path='/profile' element={<UserProfile />} />
      {/* </Route> */}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>

)
