import React from 'react'
import Image from 'next/image'
import Linkedin from '@/public/linkedin.svg'
import Copyright from '@/public/copyright.svg'
import Instagram from '@/public/instagram.svg'
import Line from '@/public/line.svg'
import Tiktok from '@/public/tiktok.svg'
import Whatsapp from '@/public/whatsapp.svg' 
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col bg-[#282828] shadow-dark w-full h-full text-white py-8 md:px-[60px] poppins-regular items-center'>
      <div className='flex flex-col w-full lg:flex-row gap-20 md:justify-between text-center'>
        <div className='flex flex-col items-center m-5 md:m-0'>
          <h1 className='poppins-semibold text-3xl text-transparent bg-clip-text background-card-gradient'>Social Media</h1>
          <p className='m-3 text-lg w-[300px] md:w-[400px] mt-5'>Follow us on social media to find out the latest updates on our event</p>
          <div className='flex justify-center m-3'>
            <Link href="https://www.linkedin.com/company/investment-festival-itb/mycompany/" target='_blank'>
              <Image
                src={Linkedin}
                width={40}
                className='m-3'
              />
            </Link>
            <Link href="https://www.instagram.com/infest.bdg/" target='_blank'>
              <Image
                src={Instagram}
                width={40}
                className='m-3'
              />
            </Link>
            <Link href="https://www.tiktok.com/@infest.bdg" target='_blank'>
              <Image 
                src={Tiktok}
                width={40}
                className='m-3'
              />
            </Link>
          </div>
        </div>
        <div className='md:m-0 w-full flex flex-col items-center'>
          <h1 className='poppins-semibold text-3xl text-transparent bg-clip-text background-card-gradient'>Contact Information</h1>
          <div className='flex justify-between w-full px-8 md:max-w-[500px] '>
            <div className='my-3 text-left'>
              <h2 className='poppins-medium text-2xl my-2'>Event</h2>
              <div className='flex flex-col '>
                <c className='text-left text-md'>
                  <div className='poppins-bold'>Audie Quisha</div>
                  <div className='flex '>
                    <Image src={Whatsapp} width={15}/>
                    <n className='mx-2' >0895366452252</n>
                  </div>
                  <div className='flex'>
                    <Image src={Line} width={15}/>
                    <n className='mx-2'>audiejee</n>
                  </div>
                </c>
                <c className='text-left text-md'>
                  <div className='poppins-bold'>Daffa Andika</div>
                  <div className='flex '>
                    <Image src={Whatsapp} width={15}/>
                    <n className='mx-2' >089684631728</n>
                  </div>
                  <div className='flex'>
                    <Image src={Line} width={15}/>
                    <n className='mx-2'>daffaandikaarya</n>
                  </div>
                </c>
                <c className='text-left text-md'>
                  <div className='poppins-bold'>Patricia Auriela</div>
                  <div className='flex'>
                    <Image src={Whatsapp} width={15}/>
                    <n className='mx-2' >089652246656</n>
                  </div>
                  <div className='flex'>
                    <Image src={Line} width={15}/>
                    <n className='mx-2'>patriciaauriela</n>
                  </div>
                </c>
              </div>
            </div>
            <div className='my-3 text-right'>
            <h2 className='poppins-medium text-2xl my-2'>Competition</h2>
              <div className='flex flex-col'>
                <c className='text-md '>
                  <div  className='poppins-bold'>Reivaldo Joan</div>
                  <div className='flex justify-end'>
                    <n className='mx-2' >0895348018385</n>
                    <Image src={Whatsapp} width={15}/>
                  </div>
                  <div className='flex justify-end'>
                    <n className='mx-2'>vass270204</n>
                    <Image src={Line} width={15}/>
                  </div>
                </c>
                <c className='text-md '>
                  <div  className='poppins-bold'>Vincent Andrew S.</div>
                  <div className='flex justify-end'>
                    <n className='mx-2' >089604076107</n>
                    <Image src={Whatsapp} width={15}/>
                  </div>
                  <div className='flex justify-end'>
                    <n className='mx-2'>reivaldojoan210</n>
                    <Image src={Line} width={15}/>
                  </div>
                </c>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-12'>
        <Image
          src={Copyright}
          with={20}
        />
        <div className='m-2 text-lg poppins-medium'>INFEST ITB 2024</div>
      </div>
    </div>
  )
}

export default Footer