import React from "react";

export default function TimelineList({ title="Timeline", children}){
    return (
        <div className="text-center">
            <h2 className='
            relative
            mb-6 sm:mb-10
            text-[36px] sm:text-[48px]
            poppins-bold 
            inline-block 
            bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
            text-transparent 
            bg-clip-text
            drop-shadow-2xl 
            '>{title}</h2>

            <ul className="
            mx-auto
            flex flex-col
            items-center
            w-[80%]
            mb-10">
                {children}
            </ul>

        </div>
    )
}