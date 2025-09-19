import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import solutionImage from "@/assets/eroi-cube.jpg";

const SolutionSection = () => {
  const { t } = useTranslation();
  
  const benefits = [
    t('solution.benefits.integration'),
    t('solution.benefits.riskReduction'),
    t('solution.benefits.transparency')
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-sm font-medium">
                Vår Lösning
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-primary">{t('solution.title')}</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('solution.subtitle')}
            </p>

            {/* AI Description */}
            <p className="text-lg text-muted-foreground/80 mb-8 leading-relaxed">
              {t('solution.description')}
            </p>

            {/* Four Principles */}
            <h3 className="text-lg font-semibold mb-6">{t('solution.fourPrinciples')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Radical Transparency", description: "Glass Box AI vs Black Box - Complete auditability through ExplanationTree methodology" },
                { title: "Integrated Decision-Making", description: "ESG and financial analysis unified into a single disciplined approach to strategic planning" },
                { title: "Predictive Risk Management", description: "Advanced modeling of regulatory, environmental, and transition risks before they impact operations" },
                { title: "Sustainable Profitability", description: "Long-term value creation through disciplined sustainability integration and risk-adjusted returns" }
              ].map((principle, index) => (
                <div key={index} className="p-4 bg-card/50 border border-border/50 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <h3 className="text-lg font-semibold mb-6">{t('solution.keyBenefits')}</h3>
            <div className="space-y-4 mb-10">
              {[
                t('solution.benefits.integration'),
                t('solution.benefits.riskReduction'),
                t('solution.benefits.transparency'),
                t('solution.benefits.aiSystem')
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button className="btn-hero group">
              Se Plattformen i Aktion
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card-glow p-8">
              <img 
                src={solutionImage} 
                alt="EROI Visualization - Environmental Return on Investment Analysis"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>

            {/* Floating metrics */}
            <div className="absolute -top-4 -right-4 card-glass p-4 min-w-[140px]">
              <div className="text-2xl font-bold text-success">+23.4%</div>
              <div className="text-sm text-muted-foreground">EROI Förbättring</div>
            </div>

            <div className="absolute -bottom-4 -left-4 card-glass p-4 min-w-[140px]">
              <div className="text-2xl font-bold text-primary">€2.4M</div>
              <div className="text-sm text-muted-foreground">Riskjusterat Värde</div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center mb-12">
            {t('solution.processTitle')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: t('solution.process.dataCollection') },
              { step: "02", title: t('solution.process.eroiCalculation') },
              { step: "03", title: t('solution.process.strategicIntegration') }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;