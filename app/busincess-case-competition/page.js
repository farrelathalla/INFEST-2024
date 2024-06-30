import React from 'react'
import TitlePrize from '@/components/competition/TitlePrize'
import { BCC_TITLE, BCC_DESC, BCC_PRIZE } from "@/components/competition/copywrite";

const BusinessCaseCompetitionPage = () => {
  return (
    <div>
      <TitlePrize title={BCC_TITLE} description={BCC_DESC} prizes={BCC_PRIZE} />
    </div>
  )
}

export default BusinessCaseCompetitionPage