import React from 'react';
import Video from "@/public/infestReels.mp4";

const WhatIsInfest = () => {
  return (
    <div className='w-full flex flex-col items-center gap-y-4'>
      <h1 className='text-3xl poppins-extrabold md:text-5xl'>
        Apa itu <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB]'>INFEST?</span>
      </h1>
      <div>
        <div className='mt-4 g-gradient-to-r from-[#678BFF] to-[#9E77FB] rounded-[14px] shadow-primary p-4 bg-gradient-to-br px-8 py-4 max-w-[750px]'>
          <p>
            <span className='text-center font-extrabold text-transparent bg-gradient-to-r bg-clip-text from-[#461A64] to-[#3126B0]'>
              Investment Festival (INFEST)
            </span> adalah acara tahunan yang diselenggarakan oleh KSEP ITB. Dimeriahkan dengan lomba equity research, business case competition (BCC), dan talkshow/seminar yang menjadi acara utama.
          </p>
        </div>
        {/* <div className='w-[90vw] md:w-[75vw] lg:w-[75vw] md:max-w-[800px] h-auto flex items-center justify-center'>
          <video controls='controls' width="99%" height="99%" className='z-10'>
            <source src={Video} type="video/mp4"/>
          </video>
        </div> */}
      </div>
    </div>
  );
};

export default WhatIsInfest;
