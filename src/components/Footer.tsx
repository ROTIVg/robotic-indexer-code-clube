import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-code-green font-display font-semibold text-2xl">code</span>
              <span className="text-code-red font-display font-semibold text-2xl">clube</span>
            </div>
            <p className="text-gray-400 mb-6">O Code Clube é um projeto fundado pela Profa. Dra.Luciene Cavalcanti Rodrigues e vários voluntários, parceiros e amigos, visando trazer um mundo de criatividade e tecnologia! Iniciou-se em 2014 com a participação de diversas escolas do município de São José do Rio Preto.</p>
            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="http://luciene.pro.br/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  Profa. Dra. Luciene Cavalcanti 
                  <ExternalLink size={16} className="ml-2" />
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
