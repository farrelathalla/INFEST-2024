'use client'
import Link from "next/link";
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

            if (difference <= 0) {
                // Waktu sudah habis
                clearInterval(interval);
                setHour(0);
                setMinute(0);
                setSecond(0);
            } else {
                const h = Math.floor(difference / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);

                setHour(h < 10 ? `0${h}` : h);
                setMinute(m < 10 ? `0${m}` : m);
                setSecond(s < 10 ? `0${s}` : s);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [date]);

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
                {hour === 0 && minute === 0 && second === 0 ? (
                    <Link href="/registration" className="text-3xl poppins-bold">Register Now!</Link>
                ) : (
                    <p className="
                        text-5xl
                        poppins-bold
                        inline-block 
                        bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
                        text-transparent 
                        bg-clip-text
                    ">
                        {hour} : {minute} : {second}
                    </p>
                )}
            </div>
        </div>
    )
}