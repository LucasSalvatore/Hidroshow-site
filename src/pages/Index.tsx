import Navbar from "@/components/hidroshow/Navbar";
import Hero from "@/components/hidroshow/Hero";
import SystemCapacity from "@/components/hidroshow/SystemCapacity";
import ImageBand from "@/components/hidroshow/ImageBand";
import Footer from "@/components/hidroshow/Footer";
import stationsOutdoor from "@/assets/field-deployment.jpg";

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
      </main>
      <Footer />
    </div>
  );
}
