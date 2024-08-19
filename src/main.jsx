import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import './index.css'
import Member from './member.jsx'
import Profile from './profile.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element:<App/>

  },

  {
    path: 'member',
    element:<Member/>

  },

  {
    path: 'profile',
    element:<Profile/>

  },






])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
