
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [{
    title: "Robô Seguidor de Linha",
    category: "Automação",
    description: "Um robô autônomo que detecta e segue linhas para navegação.",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Braço Robótico",
    category: "Engenharia",
    description: "Braço mecânico programável para simular movimentos de precisão.",
    imageUrl: "https://images.unsplash.com/photo-1581092921461-7031e4bfb83a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }, {
    title: "Drone Programável",
    category: "Aeronáutica",
    description: "Drone customizado com capacidade de voo autônomo e reconhecimento de objetos.",
    imageUrl: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }];
  
  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Nossos Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os projetos desenvolvidos pelos alunos do Code Clube Votuporanga, combinando programação, robótica e inovação.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-medium text-green-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  to="/projetos" 
                  className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
                >
                  Ver detalhes <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projetos" 
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Ver todos os projetos <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
