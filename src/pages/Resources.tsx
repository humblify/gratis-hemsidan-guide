import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Newspaper, Download, ArrowRight } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      type: 'White Paper',
      icon: FileText,
      title: 'Manifestet för Hållbar Lönsamhet: Bortom ESG-rapportering',
      description: 'En djupdykning i varför traditionell ESG-rapportering inte räcker, och hur EROI fundamentalt förändrar spelplanen för strategiskt beslutsfattande.',
      readTime: '25 min',
      category: 'Strategic Insight',
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/40'
    },
    {
      type: 'Guide',
      icon: BookOpen,
      title: 'EROI Explained: En guide för Finanschefer',
      description: 'Praktisk guide för CFO:er som vill förstå hur Environmental Return on Investment integreras i finansiell planering och riskhantering.',
      readTime: '15 min',
      category: 'Financial Planning',
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/40'
    },
    {
      type: 'Artikel',
      icon: Newspaper,
      title: 'Hur AI och Kunskapsgrafer omdefinierar Riskhantering',
      description: 'Teknisk genomgång av hur Neo4j-baserade kunskapsgrafer och AI-agenter möjliggör prediktiv, holistisk riskhantering i realtid.',
      readTime: '12 min',
      category: 'Technology Deep Dive',
      color: 'from-success/20 to-success/5',
      borderColor: 'border-success/40'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        page="resources" 
        customTitle="Resurser | Humblify - Insikter för Framtidens Ledare"
        customDescription="White papers, guider och artiklar om EROI, AI-driven riskhantering och hållbar lönsamhet för strategiska beslutsfattare."
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
              <div className="inline-block card-glass px-6 py-3 mb-6">
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Knowledge Hub
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-foreground">Insikter för </span>
                <span className="text-glow">framtidens ledare</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Djupdykningar, strategiska guider och tekniska analyser för att 
                navigera framtidens komplexitet.
              </p>
            </motion.div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {resources.map((resource, index) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="card-glass p-8 h-full flex flex-col hover:scale-[1.02] transition-all duration-500 group glass-hover">
                    {/* Type Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center border ${resource.borderColor}`}>
                        <resource.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {resource.type}
                        </span>
                        <div className="text-xs text-muted-foreground">
                          {resource.readTime} läsning
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
                        {resource.category}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {resource.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button variant="outline" className="w-full group/btn">
                      <Download className="mr-2 h-4 w-4" />
                      Ladda ner
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="card-glow p-12 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  Få de senaste insikterna direkt i din inbox
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Prenumerera på vårt månadsbrev för strategiska analyser, 
                  case studies och tekniska djupdykningar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="din.email@foretag.se"
                    className="flex-1 px-6 py-4 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="btn-hero">
                    Prenumerera
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Vi respekterar din integritet. Avsluta när som helst.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
