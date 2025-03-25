
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Table,
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const campusProjects = [
    {
      name: "Robótica e Games na prática: formação docente in loco para desenvolvimento do pensamento computacional utilizando aprendizagem baseada em projetos",
      description: "Iniciado no ano de 2020, o projeto tem por objetivo realizar a formação de professores do ensino fundamental quanto ao desenvolvimento e uso de tecnologia em sala de aula (in loco), apresentando e aplicando a aprendizagem baseada em projetos voltada ao desenvolvimento de jogos digitais, uso de tecnologia como a lousa digital e ferramentas computacionais gratuitos e robótica, favorecendo que os professores possam incentivar o desenvolvimento de raciocínio lógico, aprendizagem baseada em projetos e a criatividade de seus alunos."
    },
    {
      name: "Code Clube Votuporanga",
      description: "Iniciado no ano de 2020, o projeto tem por objetivo realizar a iniciação de crianças do ensino fundamental e médio ao desenvolvimento de jogos digitais e robótica, favorecendo assim o desenvolvimento de raciocínio lógico, aprendizagem baseada em projetos e a criatividade."
    },
    {
      name: "A Era dos Ambientes Informacionais Complexos: criação de canal de comunicação para o despertar de uma nova sociedade",
      description: "Iniciado no ano de 2020, o projeto possui como objetivos a divulgação de notícias, entrevistas, lives temáticas, atividades educacionais de divulgação científica, cursos gratuitos disponíveis no ambiente Web, por meio de um canal no ambiente digital, assim como a conscientização de pessoas para que possam estar preparadas para as mudanças que se aproximam nas relações entre empregado- empregador."
    }
  ];

  const parceriaProjects = [
    {
      name: "Meninas na T.I.: um novo despertar (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto Meninas na T.I. visa debater sobre a participação feminina na área da computação além de, oferecer informações e inovações para as meninas do ensino fundamental I e II e, do ensino médio (alunas de escolas públicas da Baixada Santista) além de cursos, dentre eles, Introdução a Programação com Scratch e HTML."
    },
    {
      name: "Meninas na Ciência: ampliando espaços e abrindo caminhos para as mulheres (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o objetivo principal do projeto é trazer empoderamento e estimular a participação de jovens mulheres na ciência, incentivando o sentimento de pertencimento aos espaços científicos nas áreas de ciência e tecnologia, e mostrar que toda e qualquer menina pode ser o que quiser."
    },
    {
      name: "Meninas & Exatas (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto tem como objetivo principal criar um espaço de incentivo e integração das meninas e mulheres nas Ciências Exatas e Computação, objetivando despertar e potencializar o interesse feminino nestas áreas."
    },
    {
      name: "Integração nas Exatas (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto tem por objetivo realizar a integração dos indivíduos envolvidos, na área das Ciências Exatas, por meio do contato e estudos dos assuntos referentes a essa área."
    },
    {
      name: "Meninas>@{CodeClube Votuporanga}==> Computação, Games, Programação e Robótica para meninas // e meninos (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto tem por objetivo fazer a iniciação, principalmente de meninas em áreas relacionadas à computação, games, programação e robótica, por meio do uso de ferramentas que auxiliem no ensino desses tópicos."
    },
    {
      name: "Meninas nas Exatas (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto possui como principal objetivo incentivar e valorizar a participação feminina na área das Exatas em consonância com os Objetivos do Desenvolvimento Sustentável da Agenda 2030 da ONU, pois a equidade de gênero é um caminho para a justiça social."
    },
    {
      name: "Mulheres na Ciência (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto possui como objetivo incentivar a participação das mulheres na ciência."
    },
    {
      name: "IF(meninas){nas exatas} (Meninas nas Exatas)",
      description: "Iniciado no ano de 2021, o projeto IF(Meninas){nas exatas} visa promover a participação de mulheres na área da exatas, motivando estudantes do ensino fundamental e médio a ingressar na área e colaborando para permanência de estudantes de graduação e pós-graduação já inseridas neste contexto."
    },
    {
      name: "Semana Nacional de Ciência e Tecnologia (Fluxo contínuo Eventos)",
      description: "A SNCT tem o objetivo de aproximar a Ciência e Tecnologia da população, promovendo eventos que congregam centenas de instituições a fim de realizarem atividades de divulgação científica em todo o País. A ideia é criar uma linguagem acessível à população, por meios inovadores que estimulem a curiosidade e motivem a população a discutir as implicações sociais da Ciência, além de aprofundarem seus conhecimentos sobre o tema."
    },
    {
      name: "Aprender, Empreender e Criar: novas perspectivas para meninas no contexto de programação e eletrônica",
      description: "Iniciado no ano de 2022, o projeto tem por objetivo mostrar para as meninas as possibilidades existentes, atualmente, nos contextos que se referem a programação e a eletrônica, promovendo, dessa forma, o incentivo para a atuação nessas áreas. Além disso, o projeto promove a aprendizagem e a criatividade através de atividades relacionadas ao tema."
    },
    {
      name: "Mulheres Empreendedoras, Tecnologia e Inovação: novos olhares, formação por competência e inserção no mercado de trabalho",
      description: "Iniciado no ano de 2022, o projeto tem por objetivo apresentar para as mulheres o mercado de trabalho existente no ramo da tecnologia, assim como as oportunidades ofertadas. Por meio deste projeto, as mulheres terão a possibilidade de conhecer melhor essa área tão promissora, atualmente."
    },
    {
      name: "Introdução à programação para Crianças - 2014",
      description: "Iniciado no ano de 2014, o projeto tinha como objetivo introduzir jovens no mundo da programação por meio da utilização da ferramenta Scratch, proporcionando, dessa forma, o desenvolvimento do raciocínio lógico."
    },
    {
      name: "Teens>@{Code Clube} ==> Computação, Games, Programação e Robótica para Adolescentes: o primeiro passo para a nova era digital",
      description: "Iniciado no ano de 2021, o projeto tem por objetivo realizar a iniciação de crianças do ensino fundamental (das oitavas e nonas séries) ao desenvolvimento de jogos digitais e robótica, através das aulas fornecidas pelos membros do projeto e com o uso de ferramentas como o Scratch."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-24">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
            PROJETOS
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projetos IFSP Câmpus Votuporanga</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça os projetos desenvolvidos no campus e em parceria com outras instituições.
          </p>
        </div>

        <Card className="mb-10">
          <CardHeader className="bg-green-800 text-white">
            <CardTitle className="text-xl text-center">PROJETOS - IFSP CÂMPUS VOTUPORANGA</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px] bg-green-600 text-white">Nome</TableHead>
                  <TableHead className="bg-green-600 text-white">Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campusProjects.map((project, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <TableCell className="font-medium align-top p-4">{project.name}</TableCell>
                    <TableCell className="p-4">{project.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-10">
          <CardHeader className="bg-green-800 text-white">
            <CardTitle className="text-xl text-center">PROJETOS COM PARCERIA COM OUTROS CÂMPUS</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px] bg-green-600 text-white">Nome</TableHead>
                  <TableHead className="bg-green-600 text-white">Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {parceriaProjects.map((project, index) => (
                  <TableRow key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                    <TableCell className="font-medium align-top p-4">{project.name}</TableCell>
                    <TableCell className="p-4">{project.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
