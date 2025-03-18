import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Gamepad, Bot, Trophy, UserCheck, HandHelping, Users, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Atuacao = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
              NOSSAS ATIVIDADES
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Áreas de Atuação</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conheça as diversas iniciativas e atividades desenvolvidas pelo Code Clube
              para promover o aprendizado tecnológico e o desenvolvimento de habilidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Aprendendo Scratch */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <Code className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Aprendendo Scratch</h2>
                <p className="text-gray-600">
                  Mostramos em nosso curso de 40h como as crianças podem criar e 
                  testar seus jogos utilizando a ferramenta Scratch em aulas super 
                  divertidas.
                </p>
              </CardContent>
            </Card>

            {/* Criando jogos 2D com Construct */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <Gamepad className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Criando jogos 2D com Construct</h2>
                <p className="text-gray-600">
                  Na segunda fase do curso mostramos como criar jogos super legais 
                  com a plataforma Construct, melhorando ainda mais a mecânica dos 
                  nossos jogos.
                </p>
              </CardContent>
            </Card>

            {/* Robótica Criativa */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <Bot className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Robótica Criativa</h2>
                <p className="text-gray-600">
                  Ainda estamos procurando patrocínio para a aquisição de 
                  equipamentos para as atividades de robótica, se você gosta da ideia 
                  entre em contato e nos ajude a conseguir.
                </p>
              </CardContent>
            </Card>

            {/* Game Challenge */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <Trophy className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Game Challenge</h2>
                <p className="text-gray-600">
                  O maior evento de projetos tecnológicos, momento de apresentação de 
                  trabalhos, criatividade e responsabilidade.
                </p>
              </CardContent>
            </Card>

            {/* Imagem central */}
            <Card className="border-0 shadow-lg overflow-hidden md:col-span-1">
              <CardContent className="p-0">
                <img src="/lovable-uploads/5bb61c06-80ae-4971-99c7-8e9a95445fef.png" alt="Crianças aprendendo juntas" className="w-full h-full object-cover" />
              </CardContent>
            </Card>

            {/* Atendimento de alunos especiais */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <UserCheck className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Atendimento de alunos especiais</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem 
                  doloremque fugit sint minus quisquam molestias, dolore ipsa commodi 
                  nulla temporibus facere quod? Impedit culpa natus blanditiis minus 
                  ducimus laudantium repudiandae.
                </p>
              </CardContent>
            </Card>

            {/* Voluntários */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <HandHelping className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Voluntários</h2>
                <p className="text-gray-600">
                  Você quer ajudar? Entre em contato e vamos colocar a mão na massa, 
                  qualquer pessoa pode participar de alguma forma.
                </p>
              </CardContent>
            </Card>

            {/* Encontros Tecnológicos */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <Users className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Encontros Tecnológicos</h2>
                <p className="text-gray-600">
                  Palestras e encontros para troca de experiências, geralmente quem 
                  sabe mais ensina quem quer aprender, todos são convidados para a 
                  roda de conversa.
                </p>
              </CardContent>
            </Card>

            {/* Nossos alunos */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gray-50 p-3 rounded-lg inline-block mb-4">
                  <GraduationCap className="w-10 h-10 text-code-green" />
                </div>
                <h2 className="text-2xl font-bold mb-3">Nossos alunos</h2>
                <p className="text-gray-600">
                  Conheça um pouco mais dos alunos, seus projetos, escolas 
                  participantes e depoimentos no menu!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Atuacao;