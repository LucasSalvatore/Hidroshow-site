import Navbar from "@/components/hidroshow/Navbar";
import Hero from "@/components/hidroshow/Hero";
import SystemCapacity from "@/components/hidroshow/SystemCapacity";
import Footer from "@/components/hidroshow/Footer";
import CyclingBackdrop from "@/components/hidroshow/CyclingBackdrop";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="relative bg-[hsl(var(--reservoir))]">
        <CyclingBackdrop />
        <div className="relative">
          <Hero />
          <SystemCapacity />
        </div>
      </div>
      <Footer />
    </div>
  );
}
