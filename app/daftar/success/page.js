'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Bg from '@/public/bg-daftar.svg';
import Bg2 from '@/public/bg-daftar-2.svg';

const page = () => {
    const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Access localStorage only after the component has mounted
    const data = JSON.parse(localStorage.getItem("registerData"));
    if (data) {
      setFormData(data);
    }
  }, []);
  return (
    <section className='-my-[120px]'>
      <div className='w-full min-h-screen h-full flex flex-col items-center relative py-[120px]'>
        <Image src={Bg2} alt="Background 2" className='absolute right-0 top-0 -z-10 w-[250px] sm:w-[300px] md:w-[400px]' />
        <Image src={Bg} alt="Background" className='absolute left-0 bottom-0 -z-10 w-[400px] sm:w-[500px] md:w-[700px]' />
        {formData ? (
        <>
            <h1 className='text-3xl poppins-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-center drop-shadow-lg'>
            Terima kasih telah mendaftar INFEST 2024!
          </h1>
          <div className='w-[80%] bg-white/30 backdrop-blur-xl p-5 md:p-8 rounded-2xl mt-10 text-white font-medium flex flex-col text-center'>
              <h3 className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] "> Kami tunggu kehadiran anda di Aula Barat, Institut Teknologi Bandung pada 5 Oktober 2024 </h3>
              <h3 className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] "> {formData.fullName}</h3>
          </div>
        </>
        ) : (
            <div className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] "> Silahkan Isi Data Terlebih Dahulu</div>
        )}
        </div>
    </section>
  )
}

export default page
