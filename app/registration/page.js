import React from 'react'

import KetentuanLomba from '@/components/competitions/KetentuanLomba'
import { registrationData } from '@/lib/registration'

const RegistrationPage = () => {
  return (
    <div className="wrapper flex flex-col items-center justify-end gap-y-20">
      {registrationData.map((item) => {
        return (
          <div key={item.id}>
            <KetentuanLomba 
              title={item.title}
              competition={item.competition}
              buttonTitle={item.buttonTitle}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RegistrationPage