import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Humblify förändrade fundamentalt hur vi ser på finansiell risk. EROI-metoden avslöjade dolda miljökostnader som skulle ha kostat oss €3.2M.",
      author: "Anna Svensson",
      role: "CFO",
      company: "Nordens Energi AB",
      focus: "Finansiell Risk & Compliance",
      metric: "+23% EROI",
      industry: "Energi"
    },
    {
      quote: "Det enda verktyget som faktiskt kopplar hållbarhetsdata direkt till P&L. Vi kunde kvantifiera vår miljöpåverkan i finansiella termer för första gången.",
      author: "Lars Andersson",
      role: "Hållbarhetschef",
      company: "Baltic Infrastructure Group",
      focus: "ESG Integration",
      metric: "15% riskreduktion",
      industry: "Infrastruktur"
    },
    {
      quote: "Humblifys AI-modeller gav oss den klarhet vi behövde för att fatta ett strategiskt beslut på €50M. Transparensen i ExplanationTree var avgörande.",
      author: "Maria Bergström",
      role: "Investeringsdirektör",
      company: "Nordic Capital Ventures",
      focus: "Kapitalallokering",
      metric: "€2.4M mervärde",
      industry: "Finans"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background via-card/5 to-background">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block card-glass px-6 py-3 mb-6">
            <span className="text-sm font-bold tracking-wider text-primary uppercase">
              Verifierade Resultat
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Betrodd av </span>
            <span className="text-glow">strategiska ledare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Konkreta resultat från ledande organisationer inom energi, infrastruktur och finans.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-glow h-full hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/40" />
                  
                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="pt-6 border-t border-border/50">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="font-bold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-glow">{testimonial.metric}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.industry}</div>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                      <span className="text-xs font-semibold text-primary">{testimonial.focus}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 card-glass">
            <div className="text-3xl font-bold text-glow mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Projekt Analyserade</div>
          </div>
          <div className="text-center p-6 card-glass">
            <div className="text-3xl font-bold text-gold-glow mb-2">€1.2B</div>
            <div className="text-sm text-muted-foreground">Total Projektvolym</div>
          </div>
          <div className="text-center p-6 card-glass">
            <div className="text-3xl font-bold text-success mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Kundnöjdhet</div>
          </div>
          <div className="text-center p-6 card-glass">
            <div className="text-3xl font-bold text-primary mb-2">45</div>
            <div className="text-sm text-muted-foreground">Enterprise Kunder</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
