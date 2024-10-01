"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Arrow from '@/public/arrow.svg'


export default function DropdownFAQ({question, answer}) {
    const [isOpen,setIsOpen] = useState(false)
    return(
    <div onClick={() => setIsOpen(prev => !prev)} className='transation-all cursor-pointer w-full md:max-w-[550px] lg:max-w-[750px] px-8 py-4 background-card-gradient rounded-[14px] shadow-primary'>
        <div className='flex h-[50px] text-[14px] md:text-[16px] justify-between poppins-bold items-center'>
            <p className='text-white'>
                {question}
            </p>
            <Image src={Arrow} width={20} className={`${isOpen && 'rotate-180'}`}/>
        </div>
        {isOpen && (
            <div className='flex justify-between poppins-regular pt-2'>
                <div>
                    <p className='text-white text-[14px] md:text-[16px]'>{answer}</p>
                </div>  
            </div>  
        )}
    </div>
    )
}