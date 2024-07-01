import React from "react";
import Link from "next/link";

import "./eventcard.css";

const EventCard = ({ title, description, image, url }) => {
  return (
    <div
      className={`flex-initial md:max-w-[385px] shadow-primary w-full h-[300px] md:h-[500px] rounded-3xl px-5 md:px-7 pt-8 md:pt-12 bg-cover ${image} relative`}
    >
      <h2 className="text-3xl md:text-5xl font-bold ">
        <span className="bg-gradient-to-r from-[#678BFF] to-[#9E77FB] bg-clip-text text-transparent">{title}</span>
      </h2>
      <p className="poppins-semibold text-base md:text-xl xl:text-2xl mt-2 md:mt-4">{description}</p>
      <Link href={`/${url}`} className="absolute bottom-8 right-1/2 translate-x-2/4 md:translate-x-0 md:right-8">
        <button className="bg-gradient-to-b from-[#3E5399] to-[#9E77FB] w-[120px] h-[44px] md:w-[140px] md:h-[50px] rounded">
          <p className="text-white poppins-semibold text-base md:text-xl">More</p>
        </button>
      </Link>
    </div>
  );
};

export default EventCard;
