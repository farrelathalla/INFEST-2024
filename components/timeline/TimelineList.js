import React from "react";

export default function TimelineList({ title="Timeline", children}){
    return (
        <div className="relative mx-auto text-center">
            <h2 className='
            relative
            mb-10
            text-[48px]
            poppins-bold 
            inline-block 
            bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
            text-transparent 
            bg-clip-text
            '>{title}</h2>

            <ul className="
            mx-auto
            flex flex-col
            items-center
            w-[80%]">
                {children}
            </ul>

        </div>
    )
}