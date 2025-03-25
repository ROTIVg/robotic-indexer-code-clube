import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Github } from "lucide-react";
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-code-green font-display font-semibold text-2xl">code</span>
              <span className="text-code-red font-display font-semibold text-2xl">clube</span>
            </div>
            <p className="text-gray-400 mb-6">O Code Clube Votuporanga é um projeto fundado pela Profa. Dra.Luciene Cavalcanti Rodrigues e vários voluntários, parceiros e amigos, visando trazer um mundo de criatividade e tecnologia! Iniciou-se em 2014 com a participação de diversas escolas do município de Votuporanga.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#projetos" className="text-gray-400 hover:text-white transition-colors">Projetos</a></li>
              <li><a href="#competicoes" className="text-gray-400 hover:text-white transition-colors">Competições</a></li>
              <li><a href="#materiais" className="text-gray-400 hover:text-white transition-colors">Materiais</a></li>
              <li><a href="#noticias" className="text-gray-400 hover:text-white transition-colors">Notícias</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-gray-400" />
                <span className="text-gray-400">Av. Exemplo, 1234 - Cidade, Estado</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-gray-400" />
                <a href="mailto:contato@codeclube.com" className="text-gray-400 hover:text-white transition-colors">
                  contato@codeclube.com
                </a>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-gray-400" />
                <a href="tel:+5511987654321" className="text-gray-400 hover:text-white transition-colors">
                  +55 (11) 98765-4321
                </a>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Code Clube. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;