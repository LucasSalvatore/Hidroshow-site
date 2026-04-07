import { useState, useEffect } from "react";
import Navbar from "@/components/hidroshow/Navbar";
import Hero from "@/components/hidroshow/Hero";
import About from "@/components/hidroshow/About";
import Problem from "@/components/hidroshow/Problem";
import Solution from "@/components/hidroshow/Solution";
import Products from "@/components/hidroshow/Products";
import SWOT from "@/components/hidroshow/SWOT";
import Contact from "@/components/hidroshow/Contact";
import Footer from "@/components/hidroshow/Footer";

export default function Index() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["about", "problem", "solution", "products", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Problem />
      <Solution />
      <Products />
      <SWOT />
      <Contact />
      <Footer />
    </div>
  );
}
