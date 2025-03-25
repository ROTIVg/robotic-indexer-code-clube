
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Atuacao from "./pages/Atuacao";
import Games from "./pages/Games";
import Photos from "./pages/Photos";
import GameChallenge from "./pages/GameChallenge";
import Materiais from "./pages/Materiais";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/atuacao" element={<Atuacao />} />
          <Route path="/games" element={<Games />} />
          <Route path="/fotos" element={<Photos />} />
          <Route path="/game-challenge" element={<GameChallenge />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/projetos" element={<Projects />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
