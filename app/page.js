import AcaraKami from "@/components/acarakami/AcaraKami";
import TimeLineHome from "@/components/timeline-home/TimeLineHome";
import FAQHome from "@/components/home/FAQHome";

export default function Home() {
  return (
    <main className="wrapper">
      <AcaraKami />
      <TimeLineHome />
      <FAQHome />
    </main>
  );
}
