import React from 'react'
import Navbar from './components/nav-bar'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar />
    <Outlet />
    <Footer />
    </ThemeProvider>
    </>
  )
}

export default Layout