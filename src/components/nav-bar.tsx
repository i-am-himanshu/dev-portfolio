import React from 'react'
import { ModeToggle } from './mode-toggle'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <div className=' md:flex items-center relative px-4 h-14'>
            <ul className='absolute left-1/2 -translate-x-1/2 flex justify-center p-1.5 px-4 border-1 dark:border-white border-black rounded-2xl ml-10 space-x-10 '>
              <li>
                <NavLink 
                  to='#' 
                  className={({isActive}) => 
                    `duration-300 ${isActive ? "underline underline-offset-4" : ""} hover:bg-gray-400 hover:rounded-2xl hover:px-3 hover:py-1`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/works' 
                  className={({isActive}) => 
                    `duration-300 ${isActive ? "underline underline-offset-4" : ""} hover:bg-gray-400 hover:rounded-2xl hover:px-3 hover:py-1`
                  }>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/blogs' 
                  className={({isActive}) => 
                    `duration-300 ${isActive ? "underline underline-offset-4" : ""} hover:bg-gray-400 hover:rounded-2xl hover:px-3 hover:py-1`
                  }>
                  Blogs
                </NavLink>
              </li>
            </ul>
            <div className='md:ml-auto hidden md:block'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar