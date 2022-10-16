import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  Outlet
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './style.scss'

const Layout = () =>{
  return(
    <>
      <ToastContainer/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element: <Write/>,
      },
    ]
  },
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/login",
    element: <Login/>,
  },
  {
    path:"/register",
    element: <Register/>,
  },
  {
    path:"/post/:id",
    element:<Single/>
  },
  {
    path:"/write",
    element: <Write/>,
  },
])

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} /> 
      </div>
    </div> 
  );
}

export default App;
