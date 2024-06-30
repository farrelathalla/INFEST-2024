import React from 'react'
import TimelineList from '@/components/timeline/TimelineList'
import TimelineItem from '@/components/timeline/TimelineItem'
import Countdown from '@/components/countdown'
import TitlePrize from '@/components/competition/TitlePrize'
import { ERC_TITLE, ERC_DESC, ERC_PRIZE } from "@/components/competition/copywrite";

const EquityResearchCompetitionPage = () => {
  return (
    <div className='overflow-x-hidden wrapper'>
      <TitlePrize title={ERC_TITLE} description={ERC_DESC} prizes={ERC_PRIZE} />
      {/* Timeline */}
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
    </div>
  )
}

export default EquityResearchCompetitionPage