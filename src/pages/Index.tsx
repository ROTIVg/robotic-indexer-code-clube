
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { MapPin, Mail, Phone, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      
      {/* Biblioteca/Materiais Section */}
      <section id="biblioteca" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
              BIBLIOTECA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Materiais Educacionais</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acesse nossa coleção de recursos didáticos para aprendizado de programação, 
              robótica e tecnologias relacionadas.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img 
                  className="h-48 w-full object-cover md:w-48" 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                  alt="Biblioteca de recursos" 
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-code-green mr-2" />
                  <div className="uppercase tracking-wide text-sm text-code-green font-semibold">Biblioteca Digital</div>
                </div>
                <p className="mt-2 text-gray-600">
                  Uma coleção completa de materiais didáticos, apostilas, tutoriais e referências para 
                  alunos e professores.
                </p>
                <div className="mt-6">
                  <Button asChild>
                    <Link to="/materiais" className="inline-flex items-center">
                      Acessar Biblioteca
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Index;
