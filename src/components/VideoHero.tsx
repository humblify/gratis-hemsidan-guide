import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const VideoHero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder - From Data Chaos to Strategic Clarity */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-10" />
        {/* Animated gradient background as video placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--warning))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,230,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,230,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-10" />

      {/* Content */}
      <div className="container-custom relative z-20 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block card-glass px-6 py-3">
              <span className="text-sm font-bold tracking-wider text-primary uppercase">
                AI-Driven Environmental ROI Platform
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-foreground">Beyond ROI. </span>
            <br />
            <span className="text-glow">Welcome to EROI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Button className="btn-hero group text-lg px-10 py-7">
              <Calendar className="mr-2 h-5 w-5" />
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-secondary-hero group text-lg px-10 py-7">
              {t('hero.secondaryCta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Market Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16"
          >
            <div className="text-center p-6 card-glass">
              <div className="text-4xl md:text-5xl font-bold text-glow mb-2">+23%</div>
              <div className="text-sm text-muted-foreground">Genomsnittlig EROI-förbättring</div>
            </div>
            <div className="text-center p-6 card-glass">
              <div className="text-4xl md:text-5xl font-bold text-gold-glow mb-2">€2.4M</div>
              <div className="text-sm text-muted-foreground">Riskjusterat mervärde</div>
            </div>
            <div className="text-center p-6 card-glass">
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">-15%</div>
              <div className="text-sm text-muted-foreground">Riskreduktion</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-15" />
    </section>
  );
};

export default VideoHero;

