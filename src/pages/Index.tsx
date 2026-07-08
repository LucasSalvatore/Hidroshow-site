import Navbar from "@/components/hidroshow/Navbar";
import Hero from "@/components/hidroshow/Hero";
import SystemCapacity from "@/components/hidroshow/SystemCapacity";
import Advertisement from "@/components/hidroshow/Advertisement";
import Footer from "@/components/hidroshow/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SystemCapacity />
      <Advertisement />
      <Footer />
    </div>
  );
}
