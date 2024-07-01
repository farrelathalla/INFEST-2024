import React from 'react'
import DropdownFAQ from '../DropdownFAQ'
import { faqERCData } from '@/lib/faqCompetitions'

const FAQCompetitionsERC = () => {
  return (
    <div className='mt-16 w-full flex flex-col items-center gap-y-4'>
      {faqERCData.map((item) => {
        return (
          <DropdownFAQ 
            key={item.question}
            question={item.question}
            answer={item.answer}
          />
        )
      })}
    </div>
  )
}

export default FAQCompetitionsERC