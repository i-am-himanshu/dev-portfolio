import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import Container from './Container/Container'

function Hero() {
  return (
    <Container>
      <div className="mt-5 width-max-2xl mx-auto text-center p-4 rounded-2xl md:flex">
          <img className="rounded-xl w-auto md:h-90 h-auto" src="/src/assets/b1.jpeg" alt="hero image" />
          <div className='mx-auto flex flex-col items-center p-10 '>
              <h1 className='font-bold text-4xl '>Hey, I',m Himanshu.</h1>
              <p className='mt-3 font-bold text-4xl text-gray-500 '> I write code and try not to break things.</p>
              <p className='mt-10 font-sans space-x-1 text-xl dark:text-gray-400'>Building internet banking products for millions of users, experimenting with AI agents, and learning something new every day. Feel free to say hi.</p>
              <Button className='mt-10 w-40 text-xl h-10 p-4 bg-blue-400'><Link to='https://x.com/MainHuHimanshu'>Say Hi 👋</Link></Button>
          </div>
          
      </div>
    </Container>

  )
}

export default Hero