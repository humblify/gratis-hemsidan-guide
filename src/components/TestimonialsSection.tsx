import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Shield, Clock, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  // Enhanced testimonials with anonymized case studies
  const testimonials = [
    {
      industry: "Energy Infrastructure",
      company: "Leading Nordic Energy Company",
      size: "€15B+ Revenue",
      result: "+23% EROI Improvement",
      metric: "€2.4M Risk-Adjusted Value",
      timeline: "6 months",
      quote: "Humblify transformed our investment decision-making by making environmental costs visible in real financial terms. The radical transparency gave us confidence in our long-term strategy.",
      challenge: "Complex energy transition investments with uncertain regulatory landscape",
      solution: "Integrated shadow pricing with CSRD compliance modeling",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      industry: "Manufacturing",
      company: "Industrial Manufacturing Group", 
      size: "€8B+ Revenue",
      result: "15% Risk Reduction",
      metric: "18 months to 6 months",
      timeline: "4 months",
      quote: "The AI Multi-Agent system eliminated our data silos. We now see the complete picture of how sustainability impacts profitability across all our operations.",
      challenge: "Fragmented ESG data across multiple facilities and supply chains",
      solution: "Unified data orchestration with predictive risk modeling",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      industry: "Infrastructure",
      company: "Smart City Infrastructure",
      size: "€12B+ Projects",
      result: "CSRD-Ready",
      metric: "Full Regulatory Compliance",
      timeline: "3 months",
      quote: "From regulatory confusion to strategic clarity. Humblify turned compliance from a cost center into a competitive advantage through transparent ESG integration.",
      challenge: "CSRD and EU Taxonomy compliance for complex infrastructure projects",
      solution: "Automated compliance tracking with strategic integration",
      icon: Clock,
      color: "text-purple-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-sm font-medium">
              {t('testimonials.title')}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Proven Impact</span> Across Industries
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Industry Results Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-glow hover:scale-105 transition-all duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-background" />
                </div>
              </div>

              <CardHeader className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <testimonial.icon className={`w-8 h-8 ${testimonial.color}`} />
                  <Badge variant="outline" className="text-xs">
                    {testimonial.timeline}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg mb-2">{testimonial.industry}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  {testimonial.company} • {testimonial.size}
                </CardDescription>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-primary/5 rounded-lg">
                    <div className="font-bold text-primary text-lg">{testimonial.result}</div>
                    <div className="text-xs text-muted-foreground">Improvement</div>
                  </div>
                  <div className="text-center p-3 bg-success/5 rounded-lg">
                    <div className="font-bold text-success text-sm">{testimonial.metric}</div>
                    <div className="text-xs text-muted-foreground">Value</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-destructive mb-2">Challenge:</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Solution:</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.solution}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-primary/20 pl-4 text-sm italic text-muted-foreground">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">€27B+</div>
              <div className="text-sm text-muted-foreground">Investment Decisions Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">94%</div>
              <div className="text-sm text-muted-foreground">CSRD Readiness Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">18 months</div>
              <div className="text-sm text-muted-foreground">Average ROI Realization</div>
            </div>
          </div>

          {/* Industry Focus */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Energy & Utilities', 'Manufacturing', 'Infrastructure', 'Real Estate', 'Transportation'].map((industry, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;