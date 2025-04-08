import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Gamepad, Image, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
const GameChallenge = () => {
  const eventPhotos = [{
    id: 1,
    image: "/placeholder.svg",
    description: "Apresentação dos projetos pelos alunos"
  }, {
    id: 2,
    image: "/placeholder.svg",
    description: "Alunos interagindo com os jogos"
  }, {
    id: 3,
    image: "/placeholder.svg",
    description: "Professores e alunos durante a votação"
  }, {
    id: 4,
    image: "/placeholder.svg",
    description: "Premiação dos melhores projetos"
  }, {
    id: 5,
    image: "/placeholder.svg",
    description: "Participantes do evento"
  }, {
    id: 6,
    image: "/placeholder.svg",
    description: "Vista geral do evento"
  }];
  const scratchGames = [{
    id: 1,
    title: "EcoQuest",
    author: "Dupla 1",
    image: "/placeholder.svg",
    link: "#"
  }, {
    id: 2,
    title: "Biodiversidade em Ação",
    author: "Dupla 2",
    image: "/placeholder.svg",
    link: "#"
  }, {
    id: 3,
    title: "Economia Sustentável",
    author: "Dupla 3",
    image: "/placeholder.svg",
    link: "#"
  }, {
    id: 4,
    title: "Recursos Naturais",
    author: "Dupla 4",
    image: "/placeholder.svg",
    link: "#"
  }];
  const sponsors = ["Impress Papelaria e Brinquedos", "Tairacor Auto Acessórios", "Vita Erva"];
  return <div className="min-h-screen">
      <Navbar />
      
      <main className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 mb-4">
              EVENTO
            </span>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="text-code-green h-8 w-8" />
              <h1 className="text-3xl md:text-5xl font-bold">Game Challenge - 2019</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma competição de criatividade e programação com Scratch
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">Sobre o Evento</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Os alunos envolvidos nos projetos do Code Clube foram convidados a apresentarem seus trabalhos durante a SNCT 2019 do IFSP Votuporanga, os trabalhos foram divididos entre jogos e cartazes, que deveriam apresentar temas relacionados com o tema da <strong>SNCT 2019 "Bioeconomia: Diversidade e Riqueza para o Desenvolvimento Sustentável"</strong>, desta forma os alunos se organizaram em duplas tanto para a criação dos jogos quanto para a criação dos cartazes.
                </p>
                <p className="mb-4">
                  No dia do evento os pais, professores, amigos e alunos das escolas envolvidas e do próprio IFSP participaram da visitação ao campus do IFSP, observaram e fizeram perguntas às crianças, interagiram com os jogos e depois votaram nos que mais gostaram por meio de um software de votação desenvolvido por alunos do curso de ADS. Ao final foram premiados os 3 melhores projetos em cada categoria, mediante a apuração da votação.
                </p>
                <p className="mb-4">
                  Nossos agradecimentos aos patrocinadores, organizadores, servidores da prefeitura de Votuporanga, alunos e servidores do IFSP e a toda comunidade que prestigiou o evento.
                </p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Empresas que forneceram os prêmios:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {sponsors.map((sponsor, index) => <li key={index} className="text-gray-700">{sponsor}</li>)}
                </ul>
              </div>
            </div>

            
            
            
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default GameChallenge;