"use client"

import AcaraKami from "@/components/acarakami/AcaraKami";
import TimeLineHome from "@/components/timeline-home/TimeLineHome";
import FAQHome from "@/components/home/FAQHome";
import WhatIsInfest from "@/components/home/WhatIsInfest";
import Infest2024 from "@/components/home/Infest2024";
import Aos from "aos";
import { useEffect, useRef } from "react";
import { useWindowScroll } from 'react-use';
import Image from "next/image";
import BG1 from "@/public/ornaments/12.svg"
import BG2 from "@/public/ornaments/9.svg"
import BG3 from "@/public/ornaments/11.svg"

export default function Home() {
  const { y } = useWindowScroll(); // Get scroll position
  const refBG1 = useRef(null); // Ref for BG1
  const refBG2 = useRef(null); // Ref for BG2
  const refBG3 = useRef(null); // Ref for BG3

  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of the animations in milliseconds
    });

    // Update image positions based on scroll
    const handleScroll = () => {
      const scrollFactor = 0.5; // Adjust scroll speed factor
      if (refBG1.current && refBG2.current && refBG3.current) {
        const translateY = `${-y * scrollFactor}px`; // Calculate translateY based on scroll
        refBG1.current.style.transform = `translateY(${translateY})`;
        refBG2.current.style.transform = `translateY(${translateY})`;
        refBG3.current.style.transform = `translateY(${translateY})`;

        // Apply sparkle effect
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [y])

  return (
    <main className="relative flex items-center justify-center overflow-x-hidden w-full">
      <div className="wrapper">
        <WhatIsInfest />
        <Infest2024 />
        <div className="mt-16" />
        <AcaraKami />
        <TimeLineHome />
        <div className="mt-16" />
        <FAQHome />
      </div>
      <div className="parallax-image sparkle-effect -z-20 absolute left-0 transform translate-x-[-20vw] translate-y-[-100vh]">
        <Image ref={refBG1} src={BG1} height={750} width={750} className="object-cover" />
      </div>
      <div className="parallax-image sparkle-effect -z-20 absolute right-0 transform translate-x-[25vw] translate-y-[-10vh]">
        <Image ref={refBG2} src={BG2} height={750} width={750} className="object-cover" />
      </div>
      <div className="parallax-image sparkle-effect -z-20 absolute left-0 bottom-0 transform translate-x-[-20vw] translate-y-[-10vh]">
        <Image ref={refBG3} src={BG3} height={750} width={750} className="object-cover" />
      </div>
    </main>
  );
}
