import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import PatientOverview from "./pages/PatientOverview";
import ImageAnalysis from "./pages/ImageAnalysis";
import AIFindings from "./pages/AIFindings";
import DetailedAnalysis from "./pages/DetailedAnalysis";
import ReportGeneration from "./pages/ReportGeneration";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/patient/:id" element={
              <ProtectedRoute>
                <PatientOverview />
              </ProtectedRoute>
            } />
            <Route path="/analysis/:id" element={
              <ProtectedRoute>
                <ImageAnalysis />
              </ProtectedRoute>
            } />
            <Route path="/findings/:id" element={
              <ProtectedRoute>
                <AIFindings />
              </ProtectedRoute>
            } />
            <Route path="/detailed/:id" element={
              <ProtectedRoute>
                <DetailedAnalysis />
              </ProtectedRoute>
            } />
            <Route path="/report/:id" element={
              <ProtectedRoute>
                <ReportGeneration />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
