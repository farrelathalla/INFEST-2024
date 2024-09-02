"use client"
import React from 'react'
import { useState } from 'react';
import CustomRadioButton from '@/components/daftar/RadioButton';
import Link from 'next/link';
import Image from 'next/image';
import Bg from '@/public/bg-daftar.svg'
import Bg2 from "@/public/bg-daftar-2.svg"

const DaftarPage = () => {
    const [selectedOption, setSelectedOption] = useState('KSEP');
    const [otherValue, setOtherValue] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        if (event.target.value !== 'Yang Lain') {
          setOtherValue(''); // Clear the input if not "Yang Lain"
        }
      };
    const handleOtherValueChange = (event) => {
    setOtherValue(event.target.value);
    };
  return (
    <section className='-my-[120px]'>
      <div className='w-full min-h-screen h-full flex flex-col items-center relative py-[120px]'>
        <Image 
            src={Bg2}
            alt="Background 2"
            className='absolute right-0 top-0 -z-10 w-[250px] sm:w-[300px] md:w-[400px]'
        />
        <Image 
            src={Bg}
            alt="Background"
            className='absolute left-0 bottom-0 -z-10 w-[400px] sm:w-[500px] md:w-[700px]'
        />
        <h1 className='text-3xl poppins-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-center drop-shadow-lg'>
            Pendaftaran Main Event
        </h1>
        <div className='w-[80%] flex flex-col'>
        <div className='bg-white/30 backdrop-blur-xl w-full p-5 md:p-8 rounded-2xl mt-10 text-white font-medium'>
            <p className='text-sm md:text-base'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                Aldus PageMaker including versions of Lorem Ipsum</p>
            <h1 className='mt-5 text-3xl poppins-extrabold md:text-3xl bg-gradient-to-r from-white to-[#d7c5ff] inline-block text-transparent bg-clip-text drop-shadow-md'>
                Data Diri
            </h1>
            <h3 className='-mt-1 font-semibold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span> Required</h3>
            <h3 className='text-xl font-semibold mt-3'> Nama Lengkap <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <input
                className="py-3 px-5 rounded-full focus:outline-[#7879ED] bg-white text-white mt-2 w-full text-sm md:text-base"
                type="text"
                placeholder="Jawaban Anda"
                value={""}
                onChange={() => {}}
              />
            <div className='mt-6 grid md:grid-cols-2'>
            <div className='flex flex-col'>
                    <h3 className='text-xl font-semibold mb-2'> Status <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
                    <form className="space-y-4">
                        <div className='flex'>
                            <CustomRadioButton
                            value="SMA"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">SMA</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="Non-KSEP"
                            name="option"
                            checked={selectedOption === 'Non-KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Kuliah</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="KSEP"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Publik</span>
                        </div>
                        </form>

                </div>
                <div className='flex flex-col mt-6 md:mt-0'>
                    <h3 className='text-xl font-semibold mb-2'> Institusi <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
                    <form className="space-y-4">
                        <div className='flex'>
                            <CustomRadioButton
                            value="KSEP"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">KSEP</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="Non-KSEP"
                            name="option"
                            checked={selectedOption === 'Non-KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Non-KSEP</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="Yang Lain"
                            name="option"
                            checked={selectedOption === 'Yang Lain'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Yang Lain</span>
                            {selectedOption === 'Yang Lain' && (
                            <div className="flex items-center">
                            <label htmlFor="other" className="block text-sm font-medium text-white ml-1">
                                :
                            </label>
                            <input
                                id="other"
                                type="text"
                                value={otherValue}
                                onChange={handleOtherValueChange}
                                className="ml-1 block w-full focus:outline-none sm:text-sm bg-transparent border-b font-normal"
                            />
                            </div>
                        )}
                        </div>
                        </form>

                </div>
            </div>
            <h3 className='text-xl font-semibold mt-6'> WhatsApp (example: '081234658990) <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <input
                className="py-3 px-5 rounded-full focus:outline-[#7879ED] bg-white text-white mt-2 w-full text-sm md:text-base"
                type="text"
                placeholder="Jawaban Anda"
                value={""}
                onChange={() => {}}
              />
            <h3 className='text-xl font-semibold mt-6'> Darimana kamu mengetahui INFEST 2024 ?<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <form className="space-y-4">
                <div className='grid md:grid-cols-2 mt-3'>
                    <div className='space-y-4'>
                    <div className='flex'>
                            <CustomRadioButton
                            value="SMA"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Instagram</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="Non-KSEP"
                            name="option"
                            checked={selectedOption === 'Non-KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Tiktok</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="KSEP"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Teman</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="KSEP"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Media Partners</span>
                        </div>
                    </div>

                    <div className='space-y-4 mt-4'>
                    <div className='flex'>
                            <CustomRadioButton
                            value="KSEP"
                            name="option"
                            checked={selectedOption === 'KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Event KSEP ITB</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="Non-KSEP"
                            name="option"
                            checked={selectedOption === 'Non-KSEP'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Influencers</span>
                        </div>
                        <div className='flex'>
                            <CustomRadioButton
                            value="Yang Lain"
                            name="option"
                            checked={selectedOption === 'Yang Lain'}
                            onChange={handleOptionChange}
                            />
                            <span className="ml-2 font-normal">Yang Lain</span>
                            {selectedOption === 'Yang Lain' && (
                            <div className="flex items-center">
                            <label htmlFor="other" className="block text-sm font-medium text-white ml-1">
                                :
                            </label>
                            <input
                                id="other"
                                type="text"
                                value={otherValue}
                                onChange={handleOtherValueChange}
                                className="ml-1 block w-full focus:outline-none sm:text-sm bg-transparent border-b font-normal"
                            />
                            </div>
                        )}
                        </div>
                    </div>
                </div>      
            </form>
        </div>
            <button className="bg-gradient-to-b from-[#3E5399] to-[#9E77FB] text-white font-semibold py-5 px-7 rounded-full text-base md:text-lg mt-5 self-end mr-5 md:mr-8 z-10" onClick={() => {}}>
                <Link href="/daftar/tiket">
                    Selanjutnya
                </Link>
            </button>
        </div>
      </div>
    </section>
  )
}

export default DaftarPage
