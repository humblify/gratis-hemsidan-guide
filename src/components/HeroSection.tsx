import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
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

          {/* Market Stats */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-xs font-medium backdrop-blur-sm">
              {t('hero.marketStats')}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-glow">{t('hero.title')}</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* Description */}  
          <p className="text-lg text-muted-foreground/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-hero text-lg group">
              {t('hero.primaryCta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button className="btn-secondary-hero text-lg group">
              <Play className="mr-2 h-5 w-5" />
              {t('hero.secondaryCta')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm">
              <span className="text-muted-foreground">{t('hero.trustIndicator')}</span>
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