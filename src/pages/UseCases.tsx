import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Factory, Building2, ArrowRight } from 'lucide-react';

const UseCases = () => {
  const industries = [
    {
      icon: Zap,
      title: 'Energi & Kraft',
      description: 'Optimera portföljen av energikällor, hantera regulatorisk risk och maximera EROI för nya anläggningar.',
      benefits: [
        'Portföljoptimering över sol, vind, kärnkraft och fossila bränslen',
        'Regulatorisk riskhantering (CSRD, taxonomi, koldioxidprissättning)',
        'Livscykelanalys för nya kraftverk och energilagring',
        'Integrerad finansiell och miljömässig modellering'
      ],
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/40'
    },
    {
      icon: Factory,
      title: 'Tillverkning & Industri',
      description: 'Analysera leveranskedjor, minska avfall och fatta smartare beslut om fabriksinvesteringar.',
      benefits: [
        'Supply chain transparens från råvara till slutprodukt',
        'Cirkulär ekonomi och avfallsminimering',
        'Kapitalinvesteringsbeslut för nya produktionslinjer',
        'Compliance med kommande miljölagstiftning'
      ],
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/40'
    },
    {
      icon: Building2,
      title: 'Infrastruktur & Bygg',
      description: 'Bedöm den totala livscykelkostnaden och miljöpåverkan för storskaliga infrastrukturprojekt.',
      benefits: [
        'Total Cost of Ownership (TCO) över hela projektets livslängd',
        'Klimatanpassning och resiliens-modellering',
        'Intressentanalys och social påverkan (Social ROI)',
        'Scenario-analys för olika byggmaterial och metoder'
      ],
      color: 'from-success/20 to-success/5',
      borderColor: 'border-success/40'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="use-cases" 
        customTitle="Användningsfall | Humblify - Kapitalintensiva Industrier"
        customDescription="Upptäck hur Humblify transformerar beslutsfattande inom Energi, Tillverkning och Infrastruktur med AI-driven EROI-analys."
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-background via-card/10 to-background">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-20"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground">Designad för </span>
                <span className="text-glow">kapitalintensiva industrier</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Humblify är specialiserat för branscher där varje beslut har långtgående 
                konsekvenser för både ekonomi och miljö.
              </p>
            </motion.div>

            {/* Industries Grid */}
            <div className="space-y-16">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="card-glass p-10 hover:scale-[1.01] transition-all duration-500">
                    <div className="grid md:grid-cols-3 gap-8">
                      {/* Icon & Title */}
                      <div className="md:col-span-1">
                        <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center border ${industry.borderColor} mb-6`}>
                          <industry.icon className="w-10 h-10 text-foreground" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-foreground">
                          {industry.title}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                          {industry.description}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold mb-6 text-primary">
                          Nyckelfördelar
                        </h3>
                        <ul className="space-y-4">
                          {industry.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 text-center"
            >
              <Card className="card-glow p-12 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Är din bransch redo för EROI?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Boka en branschspecifik demo och se hur Humblify kan transformera 
                  ert strategiska beslutsfattande.
                </p>
                <Button className="btn-hero group text-lg">
                  Boka Bransch-Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;
