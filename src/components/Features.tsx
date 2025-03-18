
import React from "react";
import { Cpu, Code, Users, Trophy, Robot, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Robot className="w-10 h-10 text-code-green" />,
      title: "Robótica Educacional",
      description: "Aprendizado prático de construção e programação de robôs."
    },
    {
      icon: <Code className="w-10 h-10 text-code-green" />,
      title: "Programação",
      description: "Desenvolvimento de habilidades de codificação e lógica de programação."
    },
    {
      icon: <Users className="w-10 h-10 text-code-green" />,
      title: "Trabalho em Equipe",
      description: "Projetos colaborativos que desenvolvem habilidades sociais e comunicação."
    },
    {
      icon: <Trophy className="w-10 h-10 text-code-green" />,
      title: "Competições",
      description: "Participação em torneios nacionais e internacionais de robótica."
    },
    {
      icon: <Cpu className="w-10 h-10 text-code-green" />,
      title: "Tecnologia",
      description: "Acesso a equipamentos e tecnologias de ponta para criação de projetos."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-code-green" />,
      title: "Conhecimento",
      description: "Biblioteca de recursos e materiais didáticos para aprendizado contínuo."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
            O QUE OFERECEMOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Descubra nossos diferenciais</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No Code Clube, oferecemos uma experiência completa para desenvolvimento
            de habilidades tecnológicas e pensamento criativo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
