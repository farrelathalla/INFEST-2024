"use client"

import React from 'react'
import TimelineList from '@/components/timeline/TimelineList'
import TimelineItem from '@/components/timeline/TimelineItem'
import Countdown from '@/components/countdown'
import TitlePrize from '@/components/competition/TitlePrize'
import { BCC_TITLE, BCC_DESC, BCC_PRIZE } from "@/components/competition/copywrite";
import FAQCompetitions from '@/components/competitions/FAQCompetitions'

import BG1 from "@/public/ornaments/12.svg"
import BG2 from "@/public/ornaments/3.svg"
import BG3 from "@/public/ornaments/11.svg"
import Image from 'next/image'

const BusinessCaseCompetitionPage = () => {
  return (    
    <div className="relative flex items-center justify-center overflow-x-hidden w-full">
      <div className='overflow-x-hidden wrapper'>
        <TitlePrize title={BCC_TITLE} description={BCC_DESC} prizes={BCC_PRIZE} />
        {/* Timeline */}
        <div className='mt-16'></div>
        <TimelineList>    
          <TimelineItem date="1-10 Juli 2024" content="Normal Registration" />
          <TimelineItem date="11-13 Juli 2024" content="Extended Registration" />
          <TimelineItem date="15 Juli 2024" content="Case distribution" />
          <TimelineItem date="15 Juli-29 Juli 2024" content="Pengerjaan" />
          <TimelineItem date="29 Juli 2024 (23.59 WIB)" content="Pengumpulan Infografis" />
          <TimelineItem date="3 Agustus 2024" content="Pengumuman Lolos Qualification Round" />
          <TimelineItem date="9 Agustus 2024" content="Batas Pendaftaran Ulang" />
          <TimelineItem date="3 Agustus - 21 Agustus 2024" content="Pengerjaan Paper" />
          <TimelineItem date="21 Agustus 2024 (23.59 WIB)" content="Pengumpulan Paper" />
          <TimelineItem date="4 September 2024" content="Pengumuman Finalis" />
          <TimelineItem date="4 September - 22 September 2024" content="Pengerjaan Presentasi " />
          <TimelineItem date="22 September 2024 (23.59 WIB)" content="Pengumpulan Presentasi" />
          <TimelineItem date="24 September 2024 " content="Technical Meeting Finalis" />
          <TimelineItem date="5 Oktober 2024" content="Presentasi Final" />
        </TimelineList>

        {/* Countdown */}
        <Countdown date={"07/04/2024 23:59:59"}  />

        <FAQCompetitions />
      </div>
      <Image 
        src={BG1}
        height={900}
        width={900}
        className="sparkle-effect -z-20 absolute left-0 transform translate-x-[-20vw] translate-y-[-150vh] "
      />
      <Image 
        src={BG2}
        height={1300}
        width={1300}
        className="sparkle-effect -z-20 absolute object-cover right-0 transform translate-x-[25vw] translate-y-[-10vh]"
      />
      <Image 
        src={BG3}
        height={1000}
        width={1000}
        className="sparkle-effect -z-20 absolute object-cover left-0 bottom-0 transform translate-x-[-35vw] translate-y-[-10vh]"
      />
    </div>
  )
}

export default BusinessCaseCompetitionPage