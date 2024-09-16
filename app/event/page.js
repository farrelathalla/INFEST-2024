"use client"

import React from 'react'
import { useEffect, useRef } from "react";
import { useWindowScroll } from 'react-use';
import BG1 from "@/public/ornaments/10.svg"
import Image from 'next/image'
import Link from 'next/link';

const EventPage = () => {
  const gradient_font = 'bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-transparent bg-clip-text'

  const { y } = useWindowScroll(); // Get scroll position
  const refBG1 = useRef(null); // Ref for BG1

  useEffect(() => {
    // Update image positions based on scroll
    const handleScroll = () => {
      const scrollFactor = 0.5; // Adjust scroll speed factor
      if (refBG1.current) {
        const translateY = `${-y * scrollFactor}px`; // Calculate translateY based on scroll
        refBG1.current.style.transform = `translateY(${translateY})`;

      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y])

  return (
    <div className="relative flex items-center justify-center overflow-x-hidden w-full">
      <div className="wrapper flex flex-col gap-y-8 md:gap-y-2 mt-[-30px]">
        <section className='flex flex-col justify-center items-center md:items-start w-full'>
          <h1 className={`my-[1vw] font-bold ${gradient_font} text-[36px] md:text-[4vw]`}>Pre Event</h1>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className='
            my-[1vw] 
            px-4 md:px-[2vw] py-[4vw] 
            bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
            rounded-xl w-full md:w-[50%]
            text-white text-justify flex flex-col gap-y-8
            shadow-[0px_0px_15px_3px_#457ECC] md:shadow-[0px_0px_20px_5px_#457ECC]'>
              <p>
                INFEST 2024 memiliki pre-event berupa workshop yang akan dilaksanakan selama dua hari. Dalam acara ini, peserta akan mendapatkan pengetahuan lebih mendalam mengenai <b className='text-purple-primary'>investasi dan kesempatan untuk menerapkan secara langsung</b> sebagai hasil dari materi yang disampaikan, sambil membangun relasi antar investor.
              </p>
            </div>
            <div className='flex flex-row justify-center items-center w-full md:w-auto space-x-4'>
              <div className='
              my-[1pc] md:my-[1vw]
              py-[2vw] md:px-[6vw]
              bg-dark-primary 
              text-center w-full md:w-auto
              rounded-[14px]'>
                <p className= {`${gradient_font} font-medium`}>Pre Event 1</p>
                <p className= {`${gradient_font} font-medium`}>10/08/24</p>
              </div>
              <div className='
              my-[1pc] md:my-[1vw]
              py-[2vw] md:px-[6vw]
              bg-dark-primary 
              text-center w-full md:w-auto
              rounded-[14px]'>
                <p className= {`${gradient_font} font-medium`}>Pre Event 2</p>
                <p className= {`${gradient_font} font-medium`}>11/08/24</p>
              </div>
            </div>
          </div>
        </section>
        <section className='flex flex-col justify-center items-center md:items-end'>
          <h1 className={`my-[1vw] font-bold ${gradient_font} text-[36px] md:text-[4vw]`}>Main Event</h1>
          <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full'>
            <div className='
            mt-4 md:mt-0
            my-[1vw] mx-[4vw]
            p-[3.5vw]
            bg-dark-primary 
            text-center 
            rounded-xl
            w-full md:w-[45%]'>
              <p className= {`${gradient_font} underline font-semibold md:text-[2.25vw]`}>5 Oktober 2024</p>
              <p className= {`${gradient_font} underline font-semibold md:text-[2.25vw]`}>Institut Teknologi Bandung</p>
            </div>
            <div className='
            my-[1vw] 
            px-4 md:px-[2vw] py-[4vw] 
            bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
            rounded-xl w-full md:w-[50%]
            text-white text-justify 
            shadow-[0px_0px_15px_3px_#457ECC] md:shadow-[0px_0px_20px_5px_#457ECC]'>
              Kegiatan main event INFEST 2024 memiliki mata acara utama talkshow/seminar yang akan dilaksanakan selama satu hari disertai kegiatan career talks pada booth yang disediakan. Dalam kegiatan talkshow/seminar ini, akan disampaikan topik yang menarik seputar <b className='text-purple-primary'>investasi dan keuangan, ekonomi, dan pasar modal pada masa sekarang.</b>
              <Link className="w-full flex justify-center mt-[28`px]" href={"/daftar"} target='_blank'>
                <button className={`bg-dark-primary rounded-md px-6 py-3`}>
                  <p className= {`${gradient_font} font-medium`}>Register Main Event</p>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="parallax-image sparkle-effect -z-20 absolute object-cover left-0 bottom-0 transform translate-x-[-15vw] translate-y-[-10vh]">
        <Image 
          src={BG1}
          ref={refBG1}
          height={750}
          width={750}
          className="object-cover"
        />
      </div>
    </div>
  
  )
}

export default EventPage