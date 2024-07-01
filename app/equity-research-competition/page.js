import React from 'react'
import TimelineList from '@/components/timeline/TimelineList'
import TimelineItem from '@/components/timeline/TimelineItem'
import Countdown from '@/components/countdown'
import TitlePrize from '@/components/competition/TitlePrize'
import { ERC_TITLE, ERC_DESC, ERC_PRIZE } from "@/components/competition/copywrite";
import FAQCompetitions from '@/components/competitions/FAQCompetitions'

import BG1 from "@/public/ornaments/12.svg"
import BG2 from "@/public/ornaments/3.svg"
import BG3 from "@/public/ornaments/11.svg"
import Image from 'next/image'

const EquityResearchCompetitionPage = () => {
  return (
    <div className="relative flex items-center justify-center overflow-x-hidden w-full">
      <div className='overflow-x-hidden wrapper'>
        <TitlePrize title={ERC_TITLE} description={ERC_DESC} prizes={ERC_PRIZE} />
        {/* Timeline */}
        <div className='mt-16'></div>
        <TimelineList>
          <TimelineItem date="5-12 Juli 2024" content="Early-bird Registration" />
          <TimelineItem date="13-20 Juli 2024" content="Normal Registration" />
          <TimelineItem date="21-24 Juli 2024" content="Extended Registration" />
          <TimelineItem date="29 Juli-29 Agustus 2024" content="Pengerjaan Paper" />
          <TimelineItem date="29 Agustus 2024 (23.59 WIB)" content="Pengumpulan Paper" />
          <TimelineItem date="12 September 2024" content="Pengumuman Finalis" />
          <TimelineItem date="12-25 September 2024" content="Pengerjaan Presentasi" />
          <TimelineItem date="25 September 2024 (23.59 WIB)" content="Pengumpulan Presentasi" />
          <TimelineItem date="26 September 2024" content="Techinal Meeting Finalis" />
          <TimelineItem date="5 Oktober 2024" content="Presentasi Finalis" />
          <TimelineItem date="5 Oktober 2024" content="Pengumuman Juara" />
        </TimelineList>

        {/* Countdown */}
        <Countdown date={"07/04/2024 23:59:59"}  />

        <FAQCompetitions />
      </div>
      <Image 
        src={BG1}
        height={900}
        width={900}
        className="sparkle-effect -z-20 absolute right-0 transform translate-x-[20vw] translate-y-[-150vh] overflow-hidden"
      />
      <Image 
        src={BG2}
        height={1300}
        width={1300}
        className="sparkle-effect -z-20 absolute object-cover left-0 transform translate-x-[-25vw] translate-y-[-10vh]  overflow-hidden"
      />
      <Image 
        src={BG3}
        height={1000}
        width={1000}
        className="sparkle-effect -z-20 absolute object-cover right-0 bottom-0 transform translate-x-[35vw] translate-y-[-10vh] overflow-hidden"
      />
    </div>
  )
}

export default EquityResearchCompetitionPage