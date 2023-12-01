import React from 'react'
import Navlinks from './Navlinks'
import Logo from './ui/Logo'
import Link from 'next/link'

function navbar() {
  return (
    <div className='flex justify-between items-center w-full px-2 py-10 md:py-5 md:pl-32  '>
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <Navlinks />
    </div>
  )
}

export default navbar