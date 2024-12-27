import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Signup from './components/SignUp.jsx'

 const root =ReactDOM.createRoot(document.getElementById('root'));
 let allrouts = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/signup',
      element: <Signup/>
    }
  ]
 )
 
 
 
 
 root.render(
  <React.StrictMode>
    <RouterProvider router={allrouts}/>
  </React.StrictMode>,
)
