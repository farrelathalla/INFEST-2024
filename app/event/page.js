import React from 'react'

const EventPage = () => {
  const gradient_font = 'bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-transparent bg-clip-text'

  return (
    <div className="wrapper">
      <section className='flex flex-col justify-center items-start'>
        <h1 className={`my-[1vw] font-bold ${gradient_font} text-[4vw]`}>Pre Event</h1>
        <div className="flex flex-row items-center justify-between">
          <p className='
          my-[1vw] 
          px-[2vw] py-[4vw] 
          bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
          rounded-xl 
          text-white w-[50%] text-justify 
          shadow-[0px_0px_20px_5px_#457ECC]'>
            INFEST 2024 memiliki pre-event berupa workshop yang akan dilaksanakan selama dua hari. Dalam acara ini, peserta akan mendapatkan pengetahuan lebih mendalam mengenai <b className='text-purple-primary'>investasi dan kesempatan untuk menerapkan secara langsung</b> sebagai hasil dari materi yang disampaikan, sambil membangun relasi antar investor.
          </p>
          <div className='flex flex-row justify-center items-center'>
            <div className='my-[1vw] bg-dark-primary text-center rounded-md py-[1vw] px-[2vw] mr-[2vw]'>
              <p className= {`${gradient_font} font-medium`}>Pre Event 1</p>
              <p className= {`${gradient_font} font-medium`}>10/08/24</p>
            </div>
            <div className='my-[1vw] bg-dark-primary text-center rounded-md py-[1vw] px-[2vw] ml-[2vw]'>
              <p className= {`${gradient_font} font-medium`}>Pre Event 2</p>
              <p className= {`${gradient_font} font-medium`}>11/08/24</p>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center items-end'>
        <h1 className={`my-[1vw] font-bold ${gradient_font} text-[4vw]`}>Main Event</h1>
        <div className='flex flex-row justify-between items-center'>
          <div className='my-[1vw] bg-dark-primary text-center rounded-xl p-[3.5vw] mx-[4vw]'>
            <p className= {`${gradient_font} underline font-semibold text-[2.25vw]`}>5 Oktober 2024</p>
            <p className= {`${gradient_font} underline font-semibold text-[2.25vw]`}>CC Timur ITB</p>
          </div>
          <p className='
          my-[1vw] 
          px-[2vw] py-[4vw] 
          bg-gradient-to-r from-[#678BFF] to-[#9E77FB] 
          rounded-xl 
          text-white w-[50%] text-justify 
          shadow-[0px_0px_20px_5px_#457ECC]'>
            Kegiatan main event INFEST 2024 memiliki mata acara utama talkshow/seminar yang akan dilaksanakan selama satu hari disertai kegiatan career talks pada booth yang disediakan. Dalam kegiatan talkshow/seminar ini, akan disampaikan topik yang menarik seputar <b className='text-purple-primary'>investasi dan keuangan, ekonomi, dan pasar modal pada masa sekarang.</b>
          </p>
        </div>
      </section>
    </div>
  )
}

export default EventPage