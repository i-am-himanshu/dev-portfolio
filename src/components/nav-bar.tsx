import React from 'react'
import { ModeToggle } from './mode-toggle'
import { NavLink } from 'react-router-dom'
import Container from './Container/Container'

function Navbar() {
  return (
    <Container>
    <header>
      <nav>
        <div>
          <div className=' flex justify-between items-center relative px-10 h-14'>
            <ul className='flex justify-center p-1.5 px-4 border-1 dark:border-white border-black rounded-2xl space-x-14 '>
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
            <div className=''>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
    </Container>
  )
}

export default Navbar