
import React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-code-green/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-code-red/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-slide-down mb-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-4">
              Grupo de Robótica
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-down" style={{ animationDelay: "0.1s" }}>
            Inovação e Tecnologia no <span className="text-code-green">Code</span><span className="text-code-red">Clube</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 animate-slide-down" style={{ animationDelay: "0.2s" }}>
            Desenvolvendo mentes criativas através da robótica, programação e trabalho em equipe.
            Venha fazer parte dessa revolução tecnológica.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a 
              href="#projetos" 
              className="btn-transition bg-code-green hover:bg-code-green/90 text-white px-6 py-3 rounded-lg font-medium"
            >
              Nossos Projetos
            </a>
            <a 
              href="#contato" 
              className="btn-transition border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-lg font-medium"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-700 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;
