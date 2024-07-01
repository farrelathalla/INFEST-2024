import React from "react";

export default function TimelineItem({ content,date }){
    return (
        <li data-content={content} className="
        bg-gradient-to-r from-[#678BFF] to-[#9E77FB]
        flex flex-col items-center w-[125px] sm:w-[200px] py-3 my-4 rounded-2xl text-sm
        sm:odd:translate-x-[150px] sm:even:translate-x-[-150px]
        odd:translate-x-[90px] even:translate-x-[-90px]
        relative group shadow-[0px_0px_7px_1px_#457ECC] md:shadow-[0px_0px_10px_2px_#457ECC]
        after:w-1 after:h-24 sm:after:h-36 after:bg-white after:absolute after:top-0
        after:translate-y-[-70%] after:rounded-full
        sm:odd:after:translate-x-[-150px] sm:even:after:translate-x-[150px]
        odd:after:translate-x-[-90px] even:after:translate-x-[90px]
        first:after:h-10 first:after:translate-y-[-50%]
        ">
            
            <p className="poppins-semibold text-[10px] sm:text-base px-2 leading-tight">{content}</p>
            <p className="poppins-medium text-[8px] sm:text-sm px-2 leading-tight">{date}</p>

            {/* circle glow */}
            <span className="
            size-5 sm:size-7 rounded-full bg-white absolute
            top-0 translate-y-[65%] 
            sm:group-odd:translate-x-[-150px] sm:group-even:translate-x-[150px]
            group-odd:translate-x-[-90px] group-even:translate-x-[90px]
            sm:before:size-7 before:rounded-full before:bg-white before:blur before:inline-block
            before:size-5
            "></span>

        </li>
    )
}