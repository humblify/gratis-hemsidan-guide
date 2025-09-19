import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Clock, ArrowRight, Building, Zap, Leaf } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const CaseStudies = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      id: 1,
      title: "Nordic Energy Transformation",
      industry: "Energy & Utilities",
      company: "Leading Nordic Energy Company",
      size: "€15B+ Revenue",
      challenge: "Complex energy transition investments with uncertain regulatory landscape and multiple stakeholder requirements",
      solution: "Integrated shadow pricing with CSRD compliance modeling and predictive risk assessment",
      results: [
        { metric: "EROI Improvement", value: "+23%", icon: TrendingUp },
        { metric: "Risk-Adjusted Value", value: "€2.4M", icon: Shield },
        { metric: "Implementation Time", value: "6 months", icon: Clock }
      ],
      details: "Humblify's AI-powered platform enabled comprehensive analysis of energy infrastructure investments, incorporating environmental costs through shadow pricing methodology. The system provided real-time CSRD compliance tracking and predictive modeling for regulatory changes.",
      testimonial: "Humblify transformed our investment decision-making by making environmental costs visible in real financial terms. The radical transparency gave us confidence in our long-term strategy.",
      tags: ["CSRD Compliance", "Shadow Pricing", "Energy Transition", "Risk Assessment"],
      icon: Zap,
      color: "text-yellow-500"
    },
    {
      id: 2,
      title: "Manufacturing ESG Integration",
      industry: "Industrial Manufacturing",
      company: "Global Manufacturing Group",
      size: "€8B+ Revenue",
      challenge: "Fragmented ESG data across multiple facilities, supply chains, and inconsistent sustainability reporting",
      solution: "Unified data orchestration with predictive risk modeling and automated compliance reporting",
      results: [
        { metric: "Risk Reduction", value: "15%", icon: Shield },
        { metric: "Reporting Time", value: "18→6 months", icon: Clock },
        { metric: "Data Integration", value: "100%", icon: TrendingUp }
      ],
      details: "Implementation of Humblify's Multi-Agent AI system eliminated data silos across manufacturing facilities. Real-time ESG monitoring and automated reporting capabilities reduced compliance costs while improving decision-making accuracy.",
      testimonial: "The AI Multi-Agent system eliminated our data silos. We now see the complete picture of how sustainability impacts profitability across all our operations.",
      tags: ["Data Integration", "Supply Chain", "Manufacturing", "Automation"],
      icon: Building,
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "Smart City Infrastructure",
      industry: "Infrastructure & Construction",
      company: "Smart City Infrastructure Developer",
      size: "€12B+ Projects",
      challenge: "CSRD and EU Taxonomy compliance for complex infrastructure projects with multiple regulatory requirements",
      solution: "Automated compliance tracking with strategic ESG integration and regulatory change monitoring",
      results: [
        { metric: "CSRD Readiness", value: "100%", icon: Shield },
        { metric: "Compliance Time", value: "3 months", icon: Clock },
        { metric: "Regulatory Coverage", value: "Full", icon: TrendingUp }
      ],
      details: "Comprehensive ESG integration for large-scale infrastructure projects, including automated EU Taxonomy alignment verification and CSRD reporting preparation. The platform provided strategic insights for sustainable urban development.",
      testimonial: "From regulatory confusion to strategic clarity. Humblify turned compliance from a cost center into a competitive advantage through transparent ESG integration.",
      tags: ["CSRD", "EU Taxonomy", "Infrastructure", "Smart Cities"],
      icon: Leaf,
      color: "text-green-500"
    }
  ];

  return (
    <Layout showSidebar={true}>
      <SEOHead page="case-studies" customTitle="Case Studies - ESG Success Stories | Humblify" />
      
      <div className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Case</span> Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how industry leaders are transforming their businesses with Humblify's ESG and EROI solutions. 
                Real results from real companies across diverse sectors.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id}>
                <Card className="card-glow overflow-hidden">
                  <CardHeader className="bg-card/50">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center">
                          <study.icon className={`w-6 h-6 ${study.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                          <CardDescription className="text-lg">
                            {study.company} • {study.size}
                          </CardDescription>
                          <Badge variant="outline" className="mt-2">
                            {study.industry}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-destructive mb-3">Challenge</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-3">Solution</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.solution}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">Implementation</h3>
                          <p className="text-muted-foreground leading-relaxed">{study.details}</p>
                        </div>
                      </div>

                      {/* Results & Testimonial */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Key Results</h3>
                          <div className="grid gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-center gap-4 p-4 bg-card/50 rounded-lg">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                  <result.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <div className="font-bold text-lg text-success">{result.value}</div>
                                  <div className="text-sm text-muted-foreground">{result.metric}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
                          <h3 className="text-lg font-semibold mb-3">Client Testimonial</h3>
                          <blockquote className="text-muted-foreground italic leading-relaxed">
                            "{study.testimonial}"
                          </blockquote>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-16">
              <div className="bg-card/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join leading companies who are transforming their businesses with our ESG and EROI solutions. 
                  Schedule a demo to see how we can help achieve your sustainability goals.
                </p>
                <Button className="btn-hero group">
                  Book Your Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default CaseStudies;