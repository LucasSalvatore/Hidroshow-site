import Navbar from "@/components/hidroshow/Navbar";
import Hero from "@/components/hidroshow/Hero";
import SystemCapacity from "@/components/hidroshow/SystemCapacity";
import ImageBand from "@/components/hidroshow/ImageBand";
import Problem from "@/components/hidroshow/Problem";
import Solution from "@/components/hidroshow/Solution";
import Station from "@/components/hidroshow/Station";
import About from "@/components/hidroshow/About";
import Impact from "@/components/hidroshow/Impact";
import SocialProof from "@/components/hidroshow/SocialProof";
import Contact from "@/components/hidroshow/Contact";
import Footer from "@/components/hidroshow/Footer";
import stationsOutdoor from "@/assets/stations-outdoor.jpg";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SystemCapacity />
        <ImageBand
          src={stationsOutdoor}
          alt="Two Hidroshow multi-tap water stations deployed in a festival crowd, attendees refilling reusable bottles with the main stage behind"
          height="74vh"
          eyebrow="IN THE FIELD · UNIT 001"
          caption="Free water, exactly where the crowd is."
          sub="Multi-tap hydration stations on the ground at a live event — no queues, no single-use bottles."
        />
        <Problem />
        <Solution />
        <Station />
        <About />
        <Impact />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
