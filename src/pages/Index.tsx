import Navbar from "@/components/hidroshow/Navbar";
import Hero from "@/components/hidroshow/Hero";
import SystemCapacity from "@/components/hidroshow/SystemCapacity";
import Problem from "@/components/hidroshow/Problem";
import Solution from "@/components/hidroshow/Solution";
import Impact from "@/components/hidroshow/Impact";
import SocialProof from "@/components/hidroshow/SocialProof";
import Contact from "@/components/hidroshow/Contact";
import Footer from "@/components/hidroshow/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SystemCapacity />
        <Problem />
        <Solution />
        <Impact />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
