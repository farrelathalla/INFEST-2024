'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/logoinfest.svg'
import Menu from '@/public/garistiga.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Skibidi from "@/public/infestskibidi.png"

const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const pathname = usePathname()

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className='flex justify-between items-center bg-white md:bg-[#CCCBE7] fixed top-0 w-screen z-20 h-[80px] ' style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}>
      <div className=''>
        <Image
          src={Logo}
          className='h-[80px] min-w-[400px] flex-shrink-0 relative hidden md:block ml-[-35px]'
        />
        <h3 className='flex md:hidden bg-clip-text text-transparent bg-gradient-to-r from-[#37217B] to-[#457ECC] text-5xl text-start font-extrabold ml-8'>
          INFEST
        </h3>
      </div>
      <div className='hidden lg:flex'>
        <Link href='/' className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:hover:background-page-gradient md:bg-clip-text ${
          pathname === '/'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>Home</Link>
        <Link href='/event'className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:bg-clip-text md:hover:background-page-gradient  ${
          pathname === '/event'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>Event</Link>
        <Link href='/business-case-competition' className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
          pathname === '/busincess-case-competition'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>BCC</Link>
        <Link href='/equity-research-competition' className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
          pathname === '/equity-research-competition'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>ERC</Link>
      </div>
      <div className='hidden lg:block'>
        <Link href='/daftar' className='text-white poppins-semibold background-card-gradient md:px-10 md:py-3 rounded-md hover:background-page-gradient mr-[90px]'>Daftar</Link>
      </div>
      <button className='flex lg:hidden mr-[35px]' onClick={toggleNav}>
        <Image 
          src={Menu}
          height={36}
          width={36}
          className='cursor-pointer'
        />
      </button>
      <div
        className={`absolute right-0 top-0 z-30 w-[350px] h-screen flex lg:hidden flex-col items-center justify-center gap-y-8 bg-white transition-transform duration-300 ${
          isNavVisible ? 'translate-x-0' : 'translate-x-[350px]'
        }`}
        style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}
      >
        <button className='absolute top-4 right-12 text-3xl font-bold' onClick={toggleNav}>
          X
        </button>
        <Link href='/' className={`text-xl poppins-regular mx-8 hover:text-transparent hover:background-page-gradient bg-clip-text ${
          pathname === '/' ? 'text-transparent background-page-gradient poppins-bold' : 'text-[#092C4C]'
        }`}>
          Home
        </Link>
        <Link href='/event' className={`text-xl poppins-regular mx-8 hover:text-transparent bg-clip-text hover:background-page-gradient  ${
          pathname === '/event' ? 'text-transparent background-page-gradient poppins-bold' : 'text-[#092C4C]'
        }`}>
          Event
        </Link>
        <Link href='/business-case-competition' className={`text-xl poppins-regular mx-8 hover:text-transparent bg-clip-text background-page-gradient ${
          pathname === '/business-case-competition' ? 'text-transparent background-page-gradient poppins-bold' : 'text-[#092C4C]'
        }`}>
          BCC
        </Link>
        <Link href='/equity-research-competition' className={`text-xl poppins-regular mx-8 hover:text-transparent bg-clip-text background-page-gradient ${
          pathname === '/equity-research-competition' ? 'text-transparent background-page-gradient poppins-bold' : 'text-[#092C4C]'
        }`}>
          ERC
        </Link>
        <Link href='/daftar' className='text-white poppins-semibold mt-20 background-card-gradient px-10 py-3 rounded-md hover:background-page-gradient '>Daftar</Link>
      </div>
    </div>
  )
}

export default Navbar