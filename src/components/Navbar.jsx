import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-black p-8'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-xl tracking-tight ml-2'>
          OCARDS
        </span>
      </div>
      <div className='block sm:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow sm:flex sm:items-center sm:w-auto'>
        <div className='text-sm items-end sm:flex-grow'></div>
        <div>
          <NavLink
            style={({ isActive }) => (isActive ? { color: '#0f0' } : undefined)}
            to='/'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'
          >
            HOME
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: '#0f0' } : undefined)}
            to='/ocards'
            className='block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4'
          >
            OCARDS
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar