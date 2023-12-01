'use client'
import Link from 'next/link';
import { fetchLinks } from '../lib/links'
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from 'react';
import clsx from 'clsx';

function Navlinks() {
  const linksArray = fetchLinks();
  const [nav, setNav] = useState(false)
  return (
    <>
      <ul className='hidden md:flex items-center align-middle gap-14 md:gap-7 mr-10 capitalize border-b-2 border-primaryBlue pb-10
      xl:mr-36 2xl:mr-36
      
      '>
        {linksArray.map((link) => (
          <li key={link.name}>
            <Link href={link.href}
              className={clsx('inline-block text-decoration-none uppercase text-primaryBlue font-semibold text-lg hover:text-secondaryBlue  xl:text-2xl lg:text-xl md:text-lg', '')}
            >{link.name}</Link>
          </li>
        ))}
        <a href="" className='p-6 md:p-2 rounded-lg text-white bg-primaryBlue hover:bg-secondaryBlue hover:translate-x-1  xl:text-2xl lg:text-xl md:text-lg'>Solicita Cotización</a>
      </ul >




















      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10  md:hidden bg-primaryBlue bg-opacity-0 ">
        {nav ?
          <FaTimes className='bg-primaryBlue text-white opacity-90 ' size={32} />
          :
          <FaBars size={32} className='text-primaryBlue' />
        }
      </div>

      {
        nav && (
          <ul className='flex flex-col gap-8 justify-center items-center absolute top-0 left-0 w-full text-gray-200 h-screen bg-primaryBlue opacity-90'>
            {linksArray.map((link) => (
              <li key={link.name} className='bg-primaryBlue my-3'>
                <Link href={link.href} className={clsx('bg-primaryBlue font-medium text-3xl capitalize', '')}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
}

export default Navlinks