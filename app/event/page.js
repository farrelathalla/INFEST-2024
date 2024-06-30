import React from 'react'

const EventPage = () => {
  const gradient_font = 'bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-transparent bg-clip-text'

  return (
    <div className="wrapper">
      <section className='flex flex-col justify-center items-center md:items-start w-full'>
        <h1 className={`my-[1vw] font-bold ${gradient_font} text-[36px] md:text-[4vw]`}>Pre Event</h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className='
          my-[1vw] 
          px-[2vw] py-[4vw] 
          bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
          rounded-xl w-full md:w-[50%]
          text-white text-justify
          shadow-[0px_0px_15px_3px_#457ECC] md:shadow-[0px_0px_20px_5px_#457ECC]'>
            INFEST 2024 memiliki pre-event berupa workshop yang akan dilaksanakan selama dua hari. Dalam acara ini, peserta akan mendapatkan pengetahuan lebih mendalam mengenai <b className='text-purple-primary'>investasi dan kesempatan untuk menerapkan secara langsung</b> sebagai hasil dari materi yang disampaikan, sambil membangun relasi antar investor.
          </p>
          <div className='flex flex-row justify-center items-center w-full md:w-auto space-x-4'>
            <div className='
            my-[1pc] md:my-[1vw]
            py-[2vw] md:px-[6vw]
            bg-dark-primary 
            text-center w-full md:w-auto
            rounded-md'>
              <p className= {`${gradient_font} font-medium`}>Pre Event 1</p>
              <p className= {`${gradient_font} font-medium`}>10/08/24</p>
            </div>
            <div className='
            my-[1pc] md:my-[1vw]
            py-[2vw] md:px-[6vw]
            bg-dark-primary 
            text-center w-full md:w-auto
            rounded-md'>
              <p className= {`${gradient_font} font-medium`}>Pre Event 2</p>
              <p className= {`${gradient_font} font-medium`}>11/08/24</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-center md:items-end'>
        <h1 className={`my-[1vw] font-bold ${gradient_font} text-[36px] md:text-[4vw]`}>Main Event</h1>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full'>
          <div className='
          my-[1vw] mx-[4vw]
          p-[3.5vw]
          bg-dark-primary 
          text-center 
          rounded-xl
          w-full md:w-[45%]'>
            <p className= {`${gradient_font} underline font-semibold md:text-[2.25vw]`}>5 Oktober 2024</p>
            <p className= {`${gradient_font} underline font-semibold md:text-[2.25vw]`}>CC Timur ITB</p>
          </div>
          <p className='
          my-[1vw] 
          px-[2vw] py-[4vw] 
          bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
          rounded-xl w-full md:w-[50%]
          text-white text-justify 
          shadow-[0px_0px_15px_3px_#457ECC] md:shadow-[0px_0px_20px_5px_#457ECC]'>
            Kegiatan main event INFEST 2024 memiliki mata acara utama talkshow/seminar yang akan dilaksanakan selama satu hari disertai kegiatan career talks pada booth yang disediakan. Dalam kegiatan talkshow/seminar ini, akan disampaikan topik yang menarik seputar <b className='text-purple-primary'>investasi dan keuangan, ekonomi, dan pasar modal pada masa sekarang.</b>
          </p>
        </div>
      </section>
    </div>
  )
}

export default EventPage