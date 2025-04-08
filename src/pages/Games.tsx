import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Gamepad, Play, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Games = () => {
  const games = [{
    id: 1,
    title: "Espaço - Gabi",
    description: "Estamos no espaço! Desvie corretamente dos meteoros e faça pontos!",
    image: "/lovable-uploads/471602cb-e6f5-4e02-9b5b-8d6bd2eac972.png",
    backgroundImage: "/lovable-uploads/7c700854-7426-4bdd-a57a-78a5744fcc64.png",
    link: "https://scratch.mit.edu/projects/700302565/embed"
  }, {
    id: 2,
    title: "Atravessando a rua - Gabi",
    description: "Ajude a pessoa a atravessar a rua com cuidado. Preste atenção com os carros!",
    image: "/lovable-uploads/bf512f30-9467-4136-8de1-981634ad8b39.png",
    link: "#"
  }, {
    id: 3,
    title: "Quiz Matemático - Gabriel",
    description: "Após pressionar a bandeira verde para começar, responda corretamente as perguntas do Nano para prosseguir, caso você erre, começará o jogo do começo!",
    image: "/lovable-uploads/11904835-d895-4109-9ddd-a65a90b70a36.png",
    link: "#"
  }];

  const handlePlayGame = (link) => {
    if (link !== "#") {
      window.open(link, "_blank");
    }
  };

  return <div className="min-h-screen">
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
              DIVIRTA-SE
            </span>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gamepad className="text-code-green h-8 w-8" />
              <h1 className="text-3xl md:text-5xl font-bold">Nossos Games!</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aperte o play e divirta-se!
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-20">
            {games.map((game, index) => <div key={game.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/2">
                  <Card className="overflow-hidden border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img src={game.image} alt={game.title} className="w-full h-auto object-cover" />
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                          style={{
                            backgroundImage: game.backgroundImage ? `url(${game.backgroundImage})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        >
                          <Button 
                            className="bg-code-green hover:bg-code-green/90 gap-2"
                            onClick={() => handlePlayGame(game.link)}
                          >
                            <Play className="h-5 w-5" />
                            Jogar Agora
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold">{game.title}</h2>
                  <p className="text-gray-600">{game.description}</p>
                  <Button 
                    className="bg-code-green hover:bg-code-green/90 gap-2"
                    onClick={() => handlePlayGame(game.link)}
                  >
                    <Play className="h-5 w-5" />
                    Jogar Agora
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Games;
