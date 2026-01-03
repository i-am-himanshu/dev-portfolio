
import { ThemeProvider } from "@/components/theme-provider"

import './App.css'
import   Navbar   from "./components/nav-bar"
import  Hero  from "./components/hero"

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          
        <Hero />
      </ThemeProvider>
    </>
  )
}

export default App
