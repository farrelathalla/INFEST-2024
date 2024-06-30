import React from 'react'
import TimelineList from '@/components/timeline/TimelineList'
import TimelineItem from '@/components/timeline/TimelineItem'
import Countdown from '@/components/countdown'
import TitlePrize from '@/components/competition/TitlePrize'
import { BCC_TITLE, BCC_DESC, BCC_PRIZE } from "@/components/competition/copywrite";

const BusinessCaseCompetitionPage = () => {
  return (    
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
    </div>
  )
}

export default BusinessCaseCompetitionPage