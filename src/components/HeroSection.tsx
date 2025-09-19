import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Subtitle */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
              Environmental Return on Investment (EROI)
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Omvandla Komplexitet till{" "}
            <span className="text-glow">Hållbar Lönsamhet</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Genom att kvantifiera miljöpåverkan som konkreta finansiella nyckeltal hjälper vi CFO:er och hållbarhetschefer att fatta optimerade investeringsbeslut.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero text-lg group">
              Utforska Plattformen
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button className="btn-secondary-hero text-lg group">
              <Play className="mr-2 h-5 w-5" />
              Boka en Demo (15 min)
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm">
              <span className="text-muted-foreground">Använt av ledande företag inom</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <span>Energi</span>
              <span>•</span>
              <span>Tillverkning</span>
              <span>•</span>
              <span>Infrastruktur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default HeroSection;