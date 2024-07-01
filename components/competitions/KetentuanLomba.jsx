import Link from 'next/link'
import React from 'react'

const KetentuanLomba = ({ title, competition, buttonTitle }) => {
  return (
    <div className='text-center flex flex-col items-center gap-y-8'>
      <h3 className='text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] font-bold'>{title}</h3>
      {
        competition === 'BCC' && (
          <div className='text-[14px] md:text-[16px] rounded-[28px] bg-gradient-to-br from-[#678BFF] to-[#9E77FB] max-w-[750px] px-8 md:px-16 py-8 text-start flex flex-col gap-y-2' style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}>
            <p>1. Tim beranggotakan <span className='font-bold'>2-3 orang</span> mahasiswa aktif program Diploma/ S1 di Indonesia yang berasal dari perguruan tinggi yang sama.</p>
            <p>2. Setiap anggota tim harus memiliki <span className='font-bold'>Kartu Tanda Mahasiswa (KTM)</span> yang akan dikumpulkan melalui form registrasi.</p>
            <p>3. <span className='font-bold'>Setiap perguruan tinggi</span> boleh mengirim <span className='font-bold'>lebih dari 1 tim.</span></p>
            <p>4. Setiap peserta <span className='font-bold'>tidak</span> diperbolehkan berada pada <span className='font-bold'>lebih dari 1 tim.</span></p>
            <p>5. Anggota dalam tim <span className='font-bold'>tidak boleh digantikan</span> oleh siapa pun dengan alasan apa pun.</p>
            <p>6. <span className='font-bold'>1 tim</span> hanya boleh mengirimkan <span className='font-bold'>1 karya.</span></p>
            <p>7. Peserta <span className='font-bold'>wajib</span> melakukan registrasi dan <span className='font-bold'>membayar biaya pendaftaran</span> sesuai mekanisme pendaftaran.</p>
            <p>8. Peserta <span className='font-bold'>wajib mengikuti akun Instagram</span> @infest.bdg untuk mendapatkan informasi mengenai perlombaan.</p>
            <p>9. Peserta <span className='font-bold'>wajib mem-posting twibbon</span> yang disediakan oleh panitia untuk mengikuti lomba.</p>
            <p>10. Peserta <span className='font-bold'>tidak diperbolehkan menuliskan nama institusi asal peserta.</span></p>
            <p>11. Peserta <span className='font-bold'>tidak diperbolehkan untuk menyebarkan case perusahaan kepada pihak eksternal</span> yang tidak mengikuti perlombaan Business Case Competition ini.</p>
            <p>12. Peserta <span className='font-bold'>wajib mengikuti ketentuan panitia</span> dan <span className='font-bold'>keputusan panitia tidak dapat diganggu gugat.</span></p>
            <p>13. Biaya Pendaftaran Free* <br></br><span className='text-sm'>*Jika peserta dinyatakan lolos Qualification, maka peserta harus membayar Rp175.000,00 untuk dapat melanjutkan ke tahap Preliminary Round.</span></p>
            <Link href='https://forms.gle/NgCTTZcgnCqwBrCZA' target='_blank' className='w-full flex justify-end mt-10'>
              <button className='bg-gradient-to-b from-[#678BFF] to-[#0E1492] rounded-md px-10 py-2 font-semibold'>
                {buttonTitle}
              </button>
            </Link>
          </div>
        )
      }
      {
        competition === 'ERC' && (
          <div className='text-[14px] md:text-[16px] rounded-[28px] bg-gradient-to-br from-[#678BFF] to-[#9E77FB] max-w-[750px] px-8 md:px-16 py-8 text-start flex flex-col gap-y-2' style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}>
            <p>1. Tim beranggotakan <span className='font-bold'>2-3 orang</span> mahasiswa aktif program Diploma/ S1 di Indonesia yang berasal dari perguruan tinggi yang sama.</p>
            <p>2. Setiap anggota tim harus memiliki <span className='font-bold'>Kartu Tanda Mahasiswa (KTM)</span> yang akan dikumpulkan melalui form registrasi.</p>
            <p>3. <span className='font-bold'>Setiap perguruan tinggi</span> boleh mengirim <span className='font-bold'>lebih dari 1 tim.</span></p>
            <p>4. Setiap peserta <span className='font-bold'>tidak</span> diperbolehkan berada pada <span className='font-bold'>lebih dari 1 tim.</span></p>
            <p>5. Anggota dalam tim <span className='font-bold'>tidak boleh digantikan oleh siapa pun</span> dengan alasan apa pun.</p>
            <p>6. <span className='font-bold'>1 tim</span> hanya boleh mengirimkan <span className='font-bold'>1 karya.</span></p>
            <p>7. Peserta <span className='font-bold'>tidak</span> sedang <span className='font-bold'>bekerja di sekuritas.</span></p>
            <p>8. Peserta <span className='font-bold'>wajib mengikuti akun Instagram</span> @infest.bdg untuk mendapatkan informasi mengenai perlombaan.</p>
            <p>9. Peserta <span className='font-bold'>wajib</span> melakukan <span className='font-bold'>registrasi</span> dan <span className='font-bold'>membayar biaya pendaftaran</span> sesuai mekanisme pendaftaran.</p>
            <p>10. Peserta <span className='font-bold'>wajib mengikuti akun Instagram</span> @infest.bdg untuk mendapatkan informasi mengenai perlombaan.</p>
            <p>11. Peserta <span className='font-bold'>wajib mem-posting twibbon</span> yang disediakan oleh panitia untuk mengikuti lomba.</p>
            <p>12. Peserta <span className='font-bold'>wajib mengikuti ketentuan panitia</span> dan <span className='font-bold'>keputusan panitia tidak dapat diganggu gugat.</span></p>
            <p>13. Biaya Pendaftaran: <br></br> - <span className='font-bold'>Early-Bird Registration:</span> Rp150.000,00 <br></br>- <span className='font-bold'>Normal Registration:</span> Rp200.000,00</p>
            <Link href='' target='_blank' className='w-full flex justify-end mt-10'>
              <button className='bg-gradient-to-b from-[#678BFF] to-[#0E1492] rounded-md px-10 py-2 font-semibold'>
                {buttonTitle}
              </button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default KetentuanLomba