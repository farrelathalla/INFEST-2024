'use client'
import React from "react";
import { useState, useEffect } from "react";

export default function Countdown({ title="Countdown",date }){
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);
    const [second,setSecond] = useState(0);
    
    useEffect(() => {
        const target = new Date(date).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            setHour(Math.floor(difference / (1000 * 60 * 60)))
            setMinute(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
            setSecond(Math.floor((difference % (1000 * 60)) / 1000))

        },1000)
        return () => clearInterval(interval)
    },[])

    return (
        <div className="text-center">
            <h2 className='
            relative
            mb-4
            text-[24px]
            poppins-bold 
            inline-block 
            bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
            text-transparent 
            bg-clip-text
            '>{title}</h2>

            <div className="w-[150px] px-3 py-3 rounded-lg mx-auto bg-white text-center">
                <p className="
                text-[20px]
                poppins-bold
                inline-block 
                bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
                text-transparent 
                bg-clip-text
                ">{hour} : {minute} : {second}</p>
            </div>
        </div>
    )
}