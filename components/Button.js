"use client"
import React, { useState } from 'react'

export default function Dropdown({text}) {
    const [isOpen,setIsOpen] = useState(false)
    return(
    <div onClick={() => setIsOpen(prev => !prev)} className={`${isOpen && 'background-page-gradient'}background-card-gradient hover:background-page-gradient rounded-lg`}>
        <p className='text-white'>
            {text}
        </p>
    </div>
    )
}