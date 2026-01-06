import React from 'react'
import Container from '../Container/Container'

function About() {
  return (
    <>
        <Container className='mt-10'>
            <div className='flex flex-col text-3xl font-serif items-start tracking-wide'>
                <h1>About Me!</h1>
                <div className='border-1 dark:border-white border-black w-full'></div>
            </div>
            <div className='flex mt-8'>
                <div className='order-2 hidden md:block'>
                    <img className='h-auto w-auto rounded-2xl' src='/src/assets/m1.jpg' alt='about me image'></img>
                </div>
                <div className='mr-5 space-y-4 text-left dark:text-gray-400 '>
                    <p>I&apos;m a <b>full-stack developer</b> who spends most of his time building <b>internet banking products</b> that are <b>used by thousands (sometimes millions)</b>. Over the past few years, I&apos;ve worked on <b>production-grade systems</b> for banks like Canara Bank, CTBC Bank (Taiwan), Karur Vysya Bank, and Canara GIFT City — which basically means <b>reliability, security, and “this should not break”</b> matter a lot.</p>
                    <p>Outside of work, I like <b>experimenting</b>. Lately, that&apos;s meant playing around with <b>AI agents, RAG pipelines, Multi Modal Agents</b>, etc — not because it&apos;s trendy, but because it&apos;s fun to understand <b>how things actually work</b>. I learn best by building, breaking, and fixing things (mostly in that order).</p>
                </div>
            </div>
        </Container>
    </>
  )
}

export default About