import React from 'react'
import TitlePrize from '@/components/competition/TitlePrize'
import { ERC_TITLE, ERC_DESC, ERC_PRIZE } from "@/components/competition/copywrite";

const EquityResearchCompetitionPage = () => {
  return (
    <TitlePrize title={ERC_TITLE} description={ERC_DESC} prizes={ERC_PRIZE} />
  )
}

export default EquityResearchCompetitionPage