import React from 'react'
import TimelineList from '@/components/timeline/TimelineList'
import TimelineItem from '@/components/timeline/TimelineItem';
import Countdown from '@/components/countdown'

const EquityResearchCompetitionPage = () => {
  return (
    <div>
      {/* Timeline */}
      <TimelineList>
        <TimelineItem date="1-13 Juli 2024" content="Open Registration" />
        <TimelineItem date="29 Juli-29 Agustus 2024" content="Pengerjaan Paper" />
        <TimelineItem date="29 Agustus 2024 (23.59)" content="Pengumpulan Paper" />
        <TimelineItem date="12 September 2024" content="Pengumuman Finalis" />
        <TimelineItem date="12-25 September 2024" content="Pengerjaan Presentasi" />
        <TimelineItem date="25 September 2024" content="Pengumpulan Presentasi" />
        <TimelineItem date="26 September 2024" content="Techinal Meeting Finalis" />
        <TimelineItem date="5 Oktober 2024" content="Presentasi Finalis" />
        <TimelineItem date="5 Oktober 2024" content="Pengumuman Juara" />
      </TimelineList>

      {/* Countdown */}
      <Countdown date={"06/30/2024 23:59:59"}  />
    </div>
  )
}

export default EquityResearchCompetitionPage