import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='h72 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-400 flex justify-center py-2'>
        <Link to="/" className='mx-2 hover:bg-indigo-200'>Home</Link>
        <Link to="/admin"className='mx-2 hover:bg-indigo-200'>Admin</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar
