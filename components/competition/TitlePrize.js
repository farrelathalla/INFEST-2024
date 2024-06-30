import React from 'react';

const TitlePrize = ({ title, description, prizes }) => {
  return (
    <div className="p-6 px-20 text-center">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-[48px] font-bold bg-gradient-to-r from-[#678BFF] to-[#9E77FB] bg-clip-text text-transparent">
          {title}
        </h1>
      </div>

      {/* Description */}
      <div className="border-black rounded-lg p-4 mb-4 bg-gradient-to-r from-[#678BFF] to-[#9E77FB] shadow-lg shadow-custom text-white">
        <p>{description}</p>
      </div>

      {/* Prize Title */}
      <div className="mb-2">
        <h2 className="text-[48px] font-bold bg-gradient-to-r from-[#678BFF] to-[#9E77FB] bg-clip-text text-transparent">
          PRIZE POOL
        </h2>
      </div>

      {/* Prizes */}
      <div className="border-black shadow-custom rounded-lg p-4 bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-white">
        <ul className="align-left list-disc list-inside">
          {prizes.map((prize, index) => (
            <ul key={index} className="text-[24px] text-bold">
              Juara {index + 1}: Rp{prize} + e-sertifikat
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TitlePrize;
