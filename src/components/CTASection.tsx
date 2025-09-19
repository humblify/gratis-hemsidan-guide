import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container-custom">
        <div className="card-glow p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Redo att Transformera Era{" "}
              <span className="text-glow">Investeringsbeslut?</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Gå med i de ledande företag som redan använder EROI för att skapa hållbar lönsamhet. 
              Boka en personlig demonstration och se hur vi kan optimera er portfölj.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button className="btn-hero text-lg group">
                <Calendar className="mr-2 h-5 w-5" />
                Boka Personlig Demo (15 min)
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="btn-secondary-hero text-lg group">
                <Download className="mr-2 h-5 w-5" />
                Ladda ner EROI White Paper
              </Button>
            </div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2 text-primary">Fri Demonstration</h3>
                <p className="text-sm text-muted-foreground">
                  15-minuters personlig genomgång av er specifika use-case
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2 text-primary">Ingen Förpliktelse</h3>
                <p className="text-sm text-muted-foreground">
                  Utforska möjligheterna utan några bindande åtaganden
                </p>
              </div>
              <div className="card-glass p-6">
                <h3 className="font-semibold mb-2 text-primary">Omedelbar Insikt</h3>
                <p className="text-sm text-muted-foreground">
                  Få konkreta rekommendationer för er bransch och situation
                </p>
              </div>
            </div>

            {/* Trust indicator */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-medium">Säker och trygg:</span> All data hanteras enligt GDPR med banknivåsäkerhet
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-accent/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;