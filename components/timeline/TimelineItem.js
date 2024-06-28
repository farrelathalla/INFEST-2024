import React from "react";

export default function TimelineItem({ content,date }){
    return (
        <li data-content={content} className="
        bg-gradient-to-r from-[#678BFF] to-[#9E77FB]
        flex flex-col items-center w-[200px] py-3 my-4 rounded-2xl text-sm
        odd:translate-x-[150px] even:translate-x-[-150px]
        relative group

        after:w-1 after:h-32 after:bg-white after:absolute after:top-0
        after:translate-y-[-70%] after:rounded-full
        odd:after:translate-x-[-150px] even:after:translate-x-[150px]

        first:after:h-10 first:after:translate-y-[-50%]
        ">
            
            <p className="poppins-semibold text-base px-3 leading-tight">{content}</p>
            <p className="poppins-medium text-sm">{date}</p>

            {/* circle glow */}
            <span className="
            size-7 rounded-full bg-white absolute
            top-0 translate-y-[65%] 
            group-odd:translate-x-[-150px] group-even:translate-x-[150px]
            before:size-7 before:rounded-full before:bg-white before:blur before:inline-block
            "></span>

        </li>
    )
}