"use client";
import React, { useState, useEffect } from 'react';
import CustomRadioButton from '@/components/daftar/RadioButton';
import { useRouter } from "next/navigation"
import Image from 'next/image';
import Bg from '@/public/bg-daftar.svg';
import Bg2 from '@/public/bg-daftar-2.svg';
import { useToast } from '@/hooks/use-toast';

const DaftarPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    status: 'SMA',
    institusi: 'KSEP',
    phoneNumber: '',
    media: 'Instagram',
    sesi: 1,
    image: '', // handle separately
    place: "Offline",
  });

  const [otherInstitusi, setOtherInstitusi] = useState('');
  const [otherMedia, setOtherMedia] = useState('');
  const [selectedInstitusi, setSelectedInstitusi] = useState('KSEP');
  const [selectedMedia, setSelectedMedia] = useState('Instagram');

  useEffect(() => {
    // Retrieve any previously stored data from localStorage
    const storedData = localStorage.getItem('registerData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      setSelectedInstitusi(parsedData.institusi || 'KSEP');
      setSelectedMedia(parsedData.media || 'Instagram');
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (updatedData) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error('Error submitting form');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNext = async () => {
    const updatedData = {
      ...formData,
      institusi: selectedInstitusi === 'Yang Lain' ? otherInstitusi : selectedInstitusi,
      media: selectedMedia === 'Yang Lain' ? otherMedia : selectedMedia,
    };
    
    if (
      !updatedData.email.trim() ||
      !updatedData.fullName.trim() ||
      !updatedData.phoneNumber.trim()
    ) {
      toast({
        title:"Please fill out the form!",
        description: "Make sure every form is filled",
        variant:"destructive",
      })
      return; // Do not proceed if validation fails
    }

    // Save form data to localStorage before navigating
    localStorage.setItem('registerData', JSON.stringify(updatedData));

    if (formData.place === "Online") {
      await submitForm(updatedData);
      localStorage.setItem("userFullName", formData.fullName);
      router.push('/daftar/success');
    } else if (formData.place === "Offline") {
      localStorage.setItem("userFullName", formData.fullName);
      // Navigate to the image upload page
      router.push('/daftar/tiket');
    }
  };

  return (
    <section className='-my-[120px]'>
      <div className='w-full min-h-screen h-full flex flex-col items-center relative py-[120px]'>
        <Image src={Bg2} alt="Background 2" className='absolute right-0 top-0 -z-10 w-[250px] sm:w-[300px] md:w-[400px]' />
        <Image src={Bg} alt="Background" className='absolute left-0 bottom-0 -z-10 w-[400px] sm:w-[500px] md:w-[700px]' />
        <h1 className='text-3xl poppins-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-center drop-shadow-lg'>
          Pendaftaran Main Event
        </h1>
        <div className='w-[80%] flex flex-col'>
          <form onSubmit={handleNext} className='bg-white/30 backdrop-blur-xl w-full p-5 md:p-8 rounded-2xl mt-10 text-white font-medium flex flex-col'>
          <div className='text-base md:text-lg space-y-4'>
                <p>
                INFEST (Investment Festival) 2024 adalah acara tahunan yang diselenggarakan oleh KSEP ITB (Kelompok Studi Ekonomi Pasar Modal), 
                yang bertujuan untuk mengajak masyarakat Indonesia berpartisipasi dalam investasi dan memahami lebih dalam tentang ekonomi serta 
                pasar modal. INFEST 2024 mengusung tema Investing for Tomorrow: Embarking an Era of Limitless Potential.
                </p>
                <p>
                INFEST 2024 akan diadakan pada:
                </p>
                <p>
                📅 Sabtu, 5 Oktober 2024
                </p>
                <p>
                📍 Aula Barat, Institut Teknologi Bandung
                </p>
                <p>
                🕣 08.30 - 18.30
                </p>
                <p>
                Pada INFEST 2024, terdapat 4 sesi dengan to, yaitu:
                </p>
                <p>
                1. Tech and ESG Companies: Unveiling Tomorrow's Market Leaders (08.30 - 11.30) <br />
                2. Cryptocurrency: Is Cryptocurrency the Future of Finance and Money? (12.00 - 14.00) <br />
                3. Breaking Barriers: Youth Shaping Indonesia's Financial Future (14.00 - 16.00) <br />
                4. From Zero to Millionaire: Lo Kheng Hong’s Blueprint for Success in the Stock Market (16.15 - 18.30) <br />
                </p>
            </div>

            <h1 className='mt-10 text-3xl poppins-extrabold md:text-3xl bg-gradient-to-r from-white to-[#d7c5ff] inline-block text-transparent bg-clip-text drop-shadow-md'>
              Data Diri
            </h1>
            <h3 className='-mt-1 font-semibold'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span> Required</h3>
            <h3 className='text-xl font-semibold mt-3'> Email <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              required
              className="py-3 px-5 rounded-full bg-white text-black mt-2 w-full"
            />

            <h3 className='text-xl font-semibold mt-6'> Nama Lengkap <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <input
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="py-3 px-5 rounded-full bg-white text-black mt-2 w-full"
            />
            <div className='mt-6 grid md:grid-cols-2'>
                <div className='flex flex-col'>
                    <h3 className='text-xl font-semibold mb-2'> Status <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
                    <div className='space-y-4'>
                    <label className='flex'>
                        <CustomRadioButton
                        name="status"
                        value="SMA"
                        checked={formData.status === 'SMA'}
                        onChange={handleInputChange}
                        /> <span className='ml-2 font-normal'> SMA </span>
                    </label>
                    <label className='flex'>
                        <CustomRadioButton
                        name="status"
                        value="Kuliah"
                        checked={formData.status === 'Kuliah'}
                        onChange={handleInputChange}
                        /> <span className='ml-2 font-normal'> Kuliah </span>
                    </label>
                    <label className='flex'>
                        <CustomRadioButton
                        name="status"
                        value="Publik"
                        checked={formData.status === 'Publik'}
                        onChange={handleInputChange}
                        /> <span className='ml-2 font-normal'> Publik </span>
                    </label>
                    </div>
                </div>
                <div className='flex flex-col mt-6 md:mt-0'>
                <h3 className='text-xl font-semibold mb-2'> Institusi <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
                <div className='space-y-4'>
                    <label className='flex'>
                        <CustomRadioButton
                        name="institusi"
                        value="KSEP"
                        checked={selectedInstitusi === 'KSEP'}
                        onChange={(e) => setSelectedInstitusi(e.target.value)}
                        /> <span className='ml-2 font-normal'> KSEP </span>
                    </label>
                    <label className='flex'>
                        <CustomRadioButton
                        name="institusi"
                        value="Non-KSEP"
                        checked={selectedInstitusi === 'Non-KSEP'}
                        onChange={(e) => setSelectedInstitusi(e.target.value)}
                        /> <span className='ml-2 font-normal'> Non-KSEP </span>
                    </label>
                    <div className='flex'>
                        <label className='flex'>
                            <CustomRadioButton
                            name="institusi"
                            value="Yang Lain"
                            checked={selectedInstitusi === 'Yang Lain'}
                            onChange={(e) => setSelectedInstitusi(e.target.value)}
                            /> <span className='ml-2 font-normal'> Yang Lain </span>
                        </label>
                        {selectedInstitusi === 'Yang Lain' && (
                            <input
                            type="text"
                            value={otherInstitusi}
                            onChange={(e) => setOtherInstitusi(e.target.value)}
                            placeholder="Institusi lainnya"
                            className="border-b-2 ml-2 bg-transparent focus:outline-none"
                            />
                        )}
                    </div>
                    </div>
                </div>
            </div>

            <h3 className='text-xl font-semibold mt-6'> WhatsApp (example: '081234658990) <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <input
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Phone number"
              required
              className="py-3 px-5 rounded-full bg-white text-black mt-2 w-full"
            />

            <h3 className='text-xl font-semibold mt-6'> Darimana kamu mengetahui INFEST 2024 ?<span className='text-transparent bg-clip-text bg-gradient-to-r from-[#461A64] to-[#3126B0]'> * </span></h3>
            <div className='grid md:grid-cols-2 mt-3'>
            <div className='space-y-4'>
              <label className='flex'>
                <CustomRadioButton
                  name="media"
                  value="Instagram"
                  checked={selectedMedia === 'Instagram'}
                  onChange={(e) => setSelectedMedia(e.target.value)}
                /> <span className='ml-2 font-normal'> Instagram </span>
              </label>
              <label className='flex'>
                <CustomRadioButton
                  name="media"
                  value="Tiktok"
                  checked={selectedMedia === 'Tiktok'}
                  onChange={(e) => setSelectedMedia(e.target.value)}
                /> <span className='ml-2 font-normal'> Tiktok </span>
              </label>
              <label className='flex'>
                <CustomRadioButton
                  name="media"
                  value="Teman"
                  checked={selectedMedia === 'Teman'}
                  onChange={(e) => setSelectedMedia(e.target.value)}
                /> <span className='ml-2 font-normal'> Teman </span>
              </label>
              <label className='flex'>
                <CustomRadioButton
                  name="media"
                  value="Media Partners"
                  checked={selectedMedia === 'Media Partners'}
                  onChange={(e) => setSelectedMedia(e.target.value)}
                /> <span className='ml-2 font-normal'> Media Partners </span>
              </label>
            </div>
              <div className='space-y-4'>
                <label className='mt-4 md:mt-0 flex'>
                    <CustomRadioButton
                    name="media"
                    value="Event KSEP ITB"
                    checked={selectedMedia === 'Event KSEP ITB'}
                    onChange={(e) => setSelectedMedia(e.target.value)}
                    /> <span className='ml-2 font-normal'> Event KSEP ITB </span>
                </label>
                <label className='flex'>
                <CustomRadioButton
                  name="media"
                  value="Influencers"
                  checked={selectedMedia === 'Influencers'}
                  onChange={(e) => setSelectedMedia(e.target.value)}
                /> <span className='ml-2 font-normal'> Influencers </span>
              </label>
              <div className='flex'>
              <label className='flex'>
                <CustomRadioButton
                  name="media"
                  value="Yang Lain"
                  checked={selectedMedia === 'Yang Lain'}
                  onChange={(e) => setSelectedMedia(e.target.value)}
                /> <span className='ml-2 font-normal'> Yang Lain </span>
              </label>
              {selectedMedia === 'Yang Lain' && (
                <input
                  type="text"
                  value={otherMedia}
                  onChange={(e) => setOtherMedia(e.target.value)}
                  placeholder="Media lainnya"
                  className="border-b-2 ml-2 bg-transparent focus:outline-none"
                />
              )}
              </div>
              </div>
            </div>

            {/* <h3 className='text-xl font-semibold mt-6'>Sesi apa yang kamu ikuti?</h3>
            <div className='space-y-4 mt-2'>
                <label className='flex'>
                    <CustomRadioButton
                    name="sesi"
                    value={1}
                    checked={formData.sesi === 1}
                    onChange={(e) => setFormData({ ...formData, sesi: 1 })}
                    /> <span className='ml-2 font-normal'> Sesi 1 </span>
                </label>
                <label className='flex'>
                    <CustomRadioButton
                    name="sesi"
                    value={2}
                    checked={formData.sesi === 2}
                    onChange={(e) => setFormData({ ...formData, sesi: 2 })}
                    /> <span className='ml-2 font-normal'> Sesi 2</span>
                </label>
                <label className='flex'>
                    <CustomRadioButton
                    name="sesi"
                    value={3}
                    checked={formData.sesi === 3}
                    onChange={(e) => setFormData({ ...formData, sesi: 3 })}
                    /> <span className='ml-2 font-normal'> Sesi 3 </span>
                </label>
                <label className='flex'>
                    <CustomRadioButton
                    name="sesi"
                    value={4}
                    checked={formData.sesi === 4}
                    onChange={(e) => setFormData({ ...formData, sesi: 4 })}
                    /> <span className='ml-2 font-normal'> Sesi 4</span>
                </label>
                </div> */}
                <h3 className='text-xl font-semibold mt-6'>Secara apa kamu mengikuti INFEST 2024?</h3>
                <div className='space-y-4 mt-2'>
                    <label className='flex'>
                        <CustomRadioButton
                        name="place"
                        value="Offline"
                        checked={formData.place === "Offline"}
                        onChange={handleInputChange}
                        /> <span className='ml-2 font-normal'> Offline </span>
                    </label>
                    <label className='flex'>
                        <CustomRadioButton
                        name="place"
                        value="Online"
                        checked={formData.place === "Online"}
                        onChange={handleInputChange}
                        /> <span className='ml-2 font-normal'> Online</span>
                    </label>
                    </div>
                <button
                    type="button"
                    className="background-card-gradient text-white font-semibold py-5 px-12 rounded-full self-end text-base md:text-lg mt-5 mr-5 md:mr-8 z-10 ut-button:ut-readying:bg-white/50 hover:background-page-gradient"
                    onClick={handleNext}
                >
                    Next
                </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DaftarPage;
