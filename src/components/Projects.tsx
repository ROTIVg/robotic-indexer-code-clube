
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
  return <section id="projetos" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
            NOSSOS PROJETOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos em destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos desenvolvidos pelos alunos do Code Clube,
            combinando criatividade, tecnologia e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 text-xs text-white bg-code-green rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center text-white hover:text-code-green transition-colors">
                  <span className="mr-2">Ver detalhes</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>)}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/projetos" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-code-green text-white hover:bg-code-green/90 transition-colors"
          >
            Ver todos os projetos
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </section>;
};
export default Projects;
