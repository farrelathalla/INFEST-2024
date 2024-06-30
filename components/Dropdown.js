"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Arrow from '@/public/arrow.svg'


export default function Dropdown({question, answer}) {
    const [isOpen,setIsOpen] = useState(false)
    return(
    <div onClick={() => setIsOpen(prev => !prev)} className='background-card-gradient hover:background-page-gradient rounded-lg'>
        <div className='flex h-[50px] justify-between p-2 poppins-bold items-center'>
            <p className='text-white'>
                {question}
            </p>
            <Image src={Arrow} width={25} className={`${isOpen && 'rotate-180'}`}/>
        </div>
        {isOpen && (
            <div className='flex justify-between p-2 poppins-light'>
                <div>
                    <p className='text-white'>{answer}</p>
                </div>
            </div>
        )}
    </div>
    )
}