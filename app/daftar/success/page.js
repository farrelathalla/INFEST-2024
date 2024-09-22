"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Bg from '@/public/bg-daftar.svg';
import Bg2 from '@/public/bg-daftar-2.svg';

const SuccessPage = () => {
  const [fullName, setFullName] = useState("");
  const [place, setPlace] = useState("")

  useEffect(() => {
    // Retrieve fullName from localStorage
    const savedFullName = localStorage.getItem("userFullName");
    const place = localStorage.getItem("place")

    if (place) setPlace(place)

    // Save the fullName in a constant and remove all localStorage data
    if (savedFullName) {
      const nameConst = savedFullName;  // Save the fullName to a constant
      setFullName(nameConst);
    }

    // Clear all localStorage data after saving fullName
    localStorage.clear();
  }, []);

  return (
    <section className='-my-[120px]'>
      <div className='w-full min-h-screen h-full flex flex-col items-center relative py-[120px]'>
        <Image src={Bg2} alt="Background 2" className='absolute right-0 top-0 -z-10 w-[250px] sm:w-[300px] md:w-[400px]' />
        <Image src={Bg} alt="Background" className='absolute left-0 bottom-0 -z-10 w-[400px] sm:w-[500px] md:w-[700px]' />
        {fullName ? (
        <>
          <h1 className='text-3xl poppins-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-center drop-shadow-lg'>
            Terima kasih telah mendaftar INFEST 2024!
          </h1>
          <div className='w-[80%] bg-white/30 backdrop-blur-xl p-5 md:p-8 rounded-2xl mt-10 text-white font-medium flex flex-col text-center'>
            <h3 className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] "> 
              {place === 'Offline' && 'Kami tunggu kehadiran anda di Aula Barat, Institut Teknologi Bandung pada 5 Oktober 2024' }
              {place === 'Online' && 'Kami menantikan kehadiran Anda di Zoom meeting. Informasi lebih lanjut akan kami kirimkan melalui email.' }
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] "> {fullName}</h3>
          </div>
        </>
        ) : (
          <div className="text-2xl md:text-3xl font-bold [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] text-white "> Silahkan Isi Data Terlebih Dahulu</div>
        )}
      </div>
    </section>
  );
};

export default SuccessPage;
