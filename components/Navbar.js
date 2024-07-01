'use client'

import React from 'react'
import Image from 'next/image'
import Logo from '@/public/logoinfest.svg'
import Menu from '@/public/garistiga.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='flex justify-between items-center bg-[#CCCBE7] fixed top-0 w-screen z-20 h-[80px] ' style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}>
      <div className=''>
        <Image
          src={Logo}
          className='h-[80px] ml-[-35px]'
        />
      </div>
      <div className='flex'>
        <Link href='/' className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:hover:background-page-gradient md:bg-clip-text ${
          pathname === '/'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>Home</Link>
        <Link href='/event'className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:bg-clip-text md:hover:background-page-gradient  ${
          pathname === '/event'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>Event</Link>
        <Link href='/busincess-case-competition' className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
          pathname === '/busincess-case-competition'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>BCC</Link>
        <Link href='/equity-research-competition' className={`md:text-2xl md:poppins-bold mx-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
          pathname === '/equity-research-competition'? 'text-transparent md:background-page-gradient':'text-[#092C4C]'
        }`}>ERC</Link>
      </div>
      <div className='hidden md:block'>
        <button href='' className='text-white poppins-semibold background-card-gradient md:px-10 md:py-3 rounded-md hover:background-page-gradient mr-[90px]'>Daftar</button>
      </div>
    </div>
  )
}

export default Navbar