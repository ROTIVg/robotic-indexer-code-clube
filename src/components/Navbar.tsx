
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center animate-fade-in">
            <span className="text-code-green font-display font-semibold text-2xl">code</span>
            <span className="text-code-red font-display font-semibold text-2xl">clube</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/atuacao" className="nav-link text-sm font-medium">Atuação</Link>
          <Link to="/games" className="nav-link text-sm font-medium">Games</Link>
          <Link to="/fotos" className="nav-link text-sm font-medium">Fotos</Link>
          <Link to="/game-challenge" className="nav-link text-sm font-medium">Game Challenge</Link>
          <a href="#materiais" className="nav-link text-sm font-medium">Materiais</a>
          <a href="#projetos" className="nav-link text-sm font-medium">Projetos</a>
          <a href="#competicoes" className="nav-link text-sm font-medium">Competições</a>
          <a href="#biblioteca" className="nav-link text-sm font-medium">Biblioteca</a>
          <a href="#noticias" className="nav-link text-sm font-medium">Notícias</a>
          <a href="#contato" className="contact-btn text-sm font-medium">Contato</a>
        </nav>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
