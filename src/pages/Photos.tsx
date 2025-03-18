
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image as ImageIcon, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

type PhotoCategory = {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  photos: string[];
};

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState<PhotoCategory | null>(null);

  const photoCategories: PhotoCategory[] = [
    {
      id: 1,
      title: "Code Clube 2022",
      description: "Atuação em Cosmorama - Alunos da Escola Professora Ana Maria Segura",
      coverImage: "/lovable-uploads/30d0852a-661a-4b18-b034-a5844e592c64.png",
      photos: [
        "/lovable-uploads/30d0852a-661a-4b18-b034-a5844e592c64.png",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    },
    {
      id: 2,
      title: "Atuação em Riolândia",
      description: "Alunos da Escola Estadual Professora Maria Apareida dos Santos Franco",
      coverImage: "/lovable-uploads/a5550c9e-dd45-4c7c-bb3f-3c1f11384bc8.png",
      photos: [
        "/lovable-uploads/a5550c9e-dd45-4c7c-bb3f-3c1f11384bc8.png",
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ]
    },
    {
      id: 3,
      title: "Nulo",
      description: "Nulo",
      coverImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      photos: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ]
    },
    {
      id: 4,
      title: "Nulo",
      description: "Nulo",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      photos: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      ]
    },
    {
      id: 5,
      title: "Nulo",
      description: "Nulo",
      coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      photos: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1518770660439-4636190af475"
      ]
    },
    {
      id: 6,
      title: "Nulo",
      description: "Nulo",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      photos: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    }
  ];

  const handleCategoryClick = (category: PhotoCategory) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 mb-4">
              GALERIA
            </span>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="text-code-green h-8 w-8" />
              <h1 className="text-3xl md:text-5xl font-bold">Galeria de Fotos</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça nossos projetos e atividades através das imagens
            </p>
          </div>

          {selectedCategory ? (
            <div className="space-y-8">
              <div className="flex items-center gap-2 mb-8">
                <Button variant="ghost" onClick={handleBackClick} className="hover:bg-gray-100">
                  Voltar para categorias
                </Button>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="font-medium">{selectedCategory.title}</span>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedCategory.title}</h2>
                <p className="text-gray-600 mb-8">{selectedCategory.description}</p>
              </div>

              <Carousel className="max-w-5xl mx-auto">
                <CarouselContent>
                  {selectedCategory.photos.map((photo, index) => (
                    <CarouselItem key={index} className="md:basis-1/1">
                      <div className="p-1">
                        <Card className="overflow-hidden border-2 border-gray-100 rounded-xl">
                          <CardContent className="p-0">
                            <img 
                              src={photo} 
                              alt={`${selectedCategory.title} - Foto ${index + 1}`} 
                              className="w-full h-auto object-cover aspect-video"
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  <CarouselPrevious className="relative static" />
                  <CarouselNext className="relative static" />
                </div>
              </Carousel>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoCategories.map((category) => (
                <Card 
                  key={category.id} 
                  className="overflow-hidden border-2 border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleCategoryClick(category)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={category.coverImage} 
                        alt={category.title} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-1">{category.title}</h3>
                        <p className="text-white/80 text-sm mb-4">{category.description}</p>
                        <Button className="gap-2 w-full justify-center bg-white text-black hover:bg-white/90">
                          <ImageIcon className="h-4 w-4" />
                          Ver fotos
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Photos;
