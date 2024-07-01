import React from "react";
import EventCard from "./EventCard";

const AcaraKami = ({ title, description, prizes }) => {
  return (
    <div className="w-full">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-[#678BFF] to-[#9E77FB] bg-clip-text text-transparent">Acara</span> Kami
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
          <EventCard title="Event" description="INFEST 2024 memiliki Pre-Event berupa workshop mengenai investasi dan Event berupa talkshow/seminar dengan career talks" image="event-card" url="event"/>
          <EventCard title="BCC" description="Business Case Competition merupakan kompetisi dalam menganalisis dan menyelesaikan studi kasus bisnis yang telah disediakan" image="bcc-card" url="business-case-competition"/>
          <EventCard title="ERC" description="Equity Research Competition merupakan kompetisi dalam menganalisis laporan keuangan perusahaan, kondisi pasar, dan faktor relevan lainnya untuk membuat rekomendasi investasi" image="erc-card" url="equity-research-competition"/>
        </div>
    </div>
  );
};

export default AcaraKami;