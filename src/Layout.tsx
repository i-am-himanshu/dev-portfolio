import React from 'react'
import Navbar from './components/nav-bar'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

function Layout() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar />
    <Outlet />
    </ThemeProvider>
    </>
  )
}

export default Layout