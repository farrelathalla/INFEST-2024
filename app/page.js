import AcaraKami from "@/components/acarakami/AcaraKami";
import TimeLineHome from "@/components/timeline-home/TimeLineHome";
import FAQHome from "@/components/home/FAQHome";
import WhatIsInfest from "@/components/home/WhatIsInfest";
import Infest2024 from "@/components/home/Infest2024";

export default function Home() {
  return (
    <main className="wrapper">
      <WhatIsInfest />
      <Infest2024 />
      <div className="mt-16" />
      <AcaraKami />
      <TimeLineHome />
      <div className="mt-16" />
      <FAQHome />
    </main>
  );
}
