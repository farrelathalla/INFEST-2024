import React from 'react';

const TitlePrize = ({ title, description, prizes }) => {
  return (
    <div className="w-full text-center flex flex-col items-center" >
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#678BFF] to-[#9E77FB] bg-clip-text text-transparent">
          {title}
        </h1>
      </div>

      {/* Description */}
      <div className="w-full border-black rounded-[28px] px-8 py-4 md:px-16 md:py-8 mb-4 bg-gradient-to-r from-[#678BFF] to-[#9E77FB] max-w-[750px] text-white" style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}>
        <p>{description}</p>
      </div>

      {/* Prize Title */}
      <div className="mb-4 mt-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#678BFF] to-[#9E77FB] bg-clip-text text-transparent">
          Hadiah
        </h2>
      </div>

      {/* Prizes */}
      <div className="border-black rounded-[28px] w-full max-w-[750px] p-4 bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-white" style={{ boxShadow: '0 4px 8px rgba(113, 103, 255, 0.5), 0 6px 20px rgba(113, 103, 255, 0.5)' }}>
        <ul className="align-left list-disc list-inside">
          {prizes.map((prize, index) => (
            <ul key={index} className="text-[18px] md:text-[22px] text-bold">
              Juara {index + 1}: Rp{prize} + e-sertifikat
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TitlePrize;