
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
          top: targetElement.offsetTop - 100, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Projects />
      <section id="contato" className="relative py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
              ENTRE EM CONTATO
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos conversar?</h2>
            <p className="text-gray-600">
              Estamos prontos para responder suas dúvidas e ajudar você a fazer parte do nosso grupo de robótica.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="bg-code-green p-12 text-white">
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
                <p className="mb-8">
                  Preencha o formulário e entraremos em contato o mais breve possível.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-code-green/20 p-2 mr-4">
                      <MapPin size={20} />
                    </div>
                    <span>Av. Exemplo, 1234 - Cidade, Estado</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-code-green/20 p-2 mr-4">
                      <Mail size={20} />
                    </div>
                    <span>contato@codeclube.com</span>
                  </div>
                  <div className="flex items-start">
                    <div className="rounded-full bg-code-green/20 p-2 mr-4">
                      <Phone size={20} />
                    </div>
                    <span>+55 (11) 98765-4321</span>
                  </div>
                </div>
              </div>
              
              <div className="p-12">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-code-green/50 focus:border-code-green"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-code-green/50 focus:border-code-green"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-code-green/50 focus:border-code-green"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-code-green hover:bg-code-green/90 text-white px-6 py-3 rounded-lg font-medium btn-transition"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
