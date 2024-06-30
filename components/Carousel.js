"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Carousel({title,desc,image,link}) {
    const [isOpen,setIsOpen] = useState(false)
    return(
        <div className='relative rounded-[28px] w-full h-[300px] md:h-[200px] md:w-[500px]'>
            <Image src={image} className='-z-0 absolute rounded-[28px] object-cover h-full w-full'/>
            <div className='relative rounded-[28px] h-full w-full bg-gradient-to-r from-black/75 to-transparent z-20 flex justify-around md:justify-between md:items-end px-12 md:pb-16 flex-col md:flex-row'>
                <div className='flex flex-col justify-center'>
                    <h1 className='poppins-bold text-4xl text-transparent bg-clip-text background-card-gradient'>{title}</h1>
                    <p className='poppins-regular text-white text-md'>{desc}</p>
                </div>
                <Link href={link} className='w-full flex justify-center'>
                    <button className='h-[40px] px-8 rounded-md text-white poppins-semibold background-card-gradient hover:background-page-gradient'>
                        More
                    </button>
                </Link>
            </div>

        </div>
    )
}