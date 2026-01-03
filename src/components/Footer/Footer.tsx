import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='mt-10'>
            <p className='font-mono'>Built by <Link to='https://x.com/MainHuHimanshu' className='underline underline-offset-2'>@MainHuHimanshu</Link>. Source Code is available on <Link to='https://github.com/i-am-himanshu/dev-portfolio' className='underline underline-offset-2'>Github</Link>.</p>
        </div>
    </>
  )
}

export default Footer