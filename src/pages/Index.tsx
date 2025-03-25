import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";
const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);
  return <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      
      <Footer />
    </div>;
};
export default Index;