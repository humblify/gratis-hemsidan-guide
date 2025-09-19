import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import EroiLab from "./pages/EroiLab";
import Analytics from "./pages/Analytics";
import RiskManagement from "./pages/RiskManagement";
import EsgIntegration from "./pages/EsgIntegration";
import CaseStudies from "./pages/CaseStudies";
import Documentation from "./pages/Documentation";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import './lib/i18n';

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/platform/eroi-lab" element={<EroiLab />} />
            <Route path="/platform/analytics" element={<Analytics />} />
            <Route path="/platform/risk-management" element={<RiskManagement />} />
            <Route path="/solutions/esg-integration" element={<EsgIntegration />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/documentation" element={<Documentation />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
