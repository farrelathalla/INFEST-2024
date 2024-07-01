import React from 'react'
import DropdownFAQ from '../DropdownFAQ'
import { faqData } from '@/lib/faqHome'

const FAQHome = () => {
  return (
    <div className='mt-16 w-full flex flex-col items-center gap-y-4'>
      {faqData.map((item) => {
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

export default FAQHome