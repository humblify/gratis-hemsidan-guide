import Navigation from "@/components/layout/Navigation";
import VideoHero from "@/components/VideoHero";
import FogOfComplexity from "@/components/FogOfComplexity";
import EroiCube from "@/components/EroiCube";
import InteractiveEroiLab from "@/components/InteractiveEroiLab";
import CorePrinciples from "@/components/CorePrinciples";
import TrustedBy from "@/components/TrustedBy";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="home" 
        customTitle="Humblify | AI-driven EROI Platform for Sustainable Profitability"
        customDescription="Humblify transformerar strategiskt beslutsfattande. Integrera finansiell och miljömässig data med vår AI-plattform för att maximera din Environmental Return on Investment (EROI)."
      />
      <Navigation />
      <main>
        {/* Akt 1: Problemet - "The Fog of Complexity" */}
        <VideoHero />
        <FogOfComplexity />
        
        {/* Akt 2: Lösningen - EROI som den Enande Kraften */}
        <EroiCube />
        <InteractiveEroiLab />
        <CorePrinciples />
        
        {/* Akt 3: Värdet - Bevis och Förtroende */}
        <TrustedBy />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
