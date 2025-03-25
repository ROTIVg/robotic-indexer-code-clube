
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Book, Code } from "lucide-react";

const Materiais = () => {
  const materials = [
    {
      title: "Programação Básica",
      description: "Materiais introdutórios para iniciantes em programação",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      links: [
        { text: "Apostila de Algoritmos", url: "#" },
        { text: "Introdução à Lógica", url: "#" },
        { text: "Exercícios Práticos", url: "#" }
      ],
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Robótica Educacional",
      description: "Recursos para aprendizado de robótica e automação",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      links: [
        { text: "Manual Arduino", url: "#" },
        { text: "Projetos Práticos", url: "#" },
        { text: "Componentes Eletrônicos", url: "#" }
      ],
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Desenvolvimento Web",
      description: "Materiais para criação de sites e aplicações web",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      links: [
        { text: "HTML e CSS Básico", url: "#" },
        { text: "JavaScript Fundamental", url: "#" },
        { text: "Desenvolvimento Responsivo", url: "#" }
      ],
      icon: <Book className="h-5 w-5" />
    },
    {
      title: "Inteligência Artificial",
      description: "Recursos sobre Machine Learning e IA aplicada",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      links: [
        { text: "Fundamentos de IA", url: "#" },
        { text: "Python para Dados", url: "#" },
        { text: "Projetos Práticos de IA", url: "#" }
      ],
      icon: <Book className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <section className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
              BIBLIOTECA
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Materiais Educacionais</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acesse nossa coleção de recursos didáticos para aprendizado de programação, 
              robótica e tecnologias relacionadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img 
                    src={material.image} 
                    alt={material.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {material.icon}
                    <CardTitle>{material.title}</CardTitle>
                  </div>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {material.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto font-medium text-code-green hover:text-code-green/80 flex items-center gap-1"
                          asChild
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                            <span>{link.text}</span>
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver todos os materiais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Materiais;
