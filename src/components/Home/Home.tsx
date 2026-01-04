import React from 'react'
import Container from '../Container/Container'
import Hero from '../hero'
import About from '../About/About'

export default function Home() {
  return (
    <>
        <Container>
            <Hero />
            <About />
        </Container>
    </>
  )
}
