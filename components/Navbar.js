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
    <div>
      <div className='flex justify-between items-center bg-[#CCCBE7]'>
        <div className=''>
          <Image
            src={Logo}
            width={500}
            className='min-h-full'
          />
        </div>
        <div className='flex'>
          <Link href='/' className={`text-transparent md:text-3xl md:poppins-bold m-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
            pathname === '/'? 'text-transparent':'text-[#092C4C]'
          }`}>Home</Link>
          <Link href='/event'className={`text-transparent md:text-3xl md:poppins-bold m-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
            pathname === '/event'? 'text-transparent':'text-[#092C4C]'
          }`}>Event</Link>
          <Link href='/busincess-case-competition' className={`text-transparent md:text-3xl md:poppins-bold m-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
            pathname === '/busincess-case-competition'? 'text-transparent':'text-[#092C4C]'
          }`}>BCC</Link>
          <Link href='/equity-research-competition' className={`text-transparent md:text-3xl md:poppins-bold m-8 md:hover:text-transparent md:bg-clip-text md:background-page-gradient ${
            pathname === '/equity-research-competition'? 'text-transparent':'text-[#092C4C]'
          }`}>ERC</Link>
        </div>
        <div className='hidden md:block'>
          <button href='' className='md:text-2xl text-white poppins-semibold background-card-gradient md:px-10 md:py-3 rounded-md hover:background-page-gradient shadow-dark mr-[90px]'>Daftar</button>
        </div>
        <div  className='w-[500px] h-[500px] block md:hidden'>
          <Image src={Menu} width={30}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar