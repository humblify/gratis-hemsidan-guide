import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const VideoHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        {/* Placeholder for video - using animated gradient */}
        <div className="w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/5 animate-pulse" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 z-10 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-8"
          >
            <div className="card-glass px-6 py-3">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                The Strategic Navigator
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="text-foreground">Beyond ROI.</span>
            <br />
            <span className="text-glow">Welcome to EROI.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Humblify är den AI-drivna plattformen som integrerar{' '}
            <span className="text-primary font-semibold">finansiell lönsamhet</span> med{' '}
            <span className="text-accent font-semibold">verklig hållbarhetspåverkan</span>.
            <br />
            Fatta smartare, snabbare och säkrare beslut.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button className="btn-hero group text-lg">
              Boka en Strategisk Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="btn-secondary-hero group text-lg">
              <Play className="mr-2 h-5 w-5" />
              Se Plattformen
            </Button>
          </motion.div>

          {/* Subtle Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12"
          >
            <a href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
              Läs vårt manifest →
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default VideoHero;
