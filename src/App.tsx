import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PatientOverview from "./pages/PatientOverview";
import ImageAnalysis from "./pages/ImageAnalysis";
import AIFindings from "./pages/AIFindings";
import DetailedAnalysis from "./pages/DetailedAnalysis";
import ReportGeneration from "./pages/ReportGeneration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patient/:id" element={<PatientOverview />} />
          <Route path="/analysis/:id" element={<ImageAnalysis />} />
          <Route path="/findings/:id" element={<AIFindings />} />
          <Route path="/detailed/:id" element={<DetailedAnalysis />} />
          <Route path="/report/:id" element={<ReportGeneration />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
