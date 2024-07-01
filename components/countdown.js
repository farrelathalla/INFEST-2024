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
            const h = Math.floor(difference / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);
            if (h>9){
                setHour(h)
            }else{
                setHour("0"+h)
            }
            if (m>9){
                setMinute(m)
            }else{
                setMinute("0"+m)
            }
            if (s>9){
                setSecond(s)
            }else{
                setSecond("0"+s)
            }

        },1000)
        return () => clearInterval(interval)
    },[])

    return (
        <div className="text-center w-full">
            <h2 className='
            relative
            mb-4
            text-[36px] sm:text-[48px]
            poppins-bold 
            inline-block  
            bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
            text-transparent 
            bg-clip-text
            '>{title}</h2>

            <div className="w-full md:max-w-[500px] py-8 rounded-[8px] mx-auto bg-[#282828] text-center shadow-dark">
                <p className="
                text-5xl
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