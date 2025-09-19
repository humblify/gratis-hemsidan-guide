import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Users, Building, CheckCircle, ArrowRight, Target, Globe, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const EsgIntegration = () => {
  const { t } = useTranslation();

  const esgPillars = [
    {
      icon: Leaf,
      title: "Environmental",
      description: "Climate change mitigation, resource efficiency, and environmental impact management.",
      metrics: ["Carbon footprint", "Energy efficiency", "Water usage", "Waste management", "Biodiversity"],
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Social",
      description: "Human rights, employee welfare, community engagement, and social impact measurement.",
      metrics: ["Employee satisfaction", "Diversity & inclusion", "Community investment", "Health & safety", "Human rights"],
      color: "text-blue-500"
    },
    {
      icon: Building,
      title: "Governance",
      description: "Corporate governance, business ethics, transparency, and stakeholder engagement.",
      metrics: ["Board composition", "Executive compensation", "Anti-corruption", "Transparency", "Risk management"],
      color: "text-purple-500"
    }
  ];

  const integrationFeatures = [
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Align ESG initiatives with business strategy and financial performance",
      benefits: ["Goal setting", "KPI tracking", "Strategic planning"]
    },
    {
      icon: Globe,
      title: "Regulatory Compliance",
      description: "Stay compliant with CSRD, EU Taxonomy, and emerging regulations",
      benefits: ["Automated reporting", "Compliance monitoring", "Audit readiness"]
    },
    {
      icon: Zap,
      title: "Operational Excellence",
      description: "Integrate ESG into daily operations and decision-making processes",
      benefits: ["Process optimization", "Stakeholder engagement", "Performance monitoring"]
    }
  ];

  const complianceFrameworks = [
    "CSRD (Corporate Sustainability Reporting Directive)",
    "EU Taxonomy Regulation",
    "TCFD (Task Force on Climate-related Financial Disclosures)",
    "GRI Standards",
    "SASB Standards",
    "UN Global Compact"
  ];

  return (
    <Layout showSidebar={true}>
      <SEOHead page="esg-integration" customTitle="ESG Integration - Sustainable Business Solutions | Humblify" />
      
      <div className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">ESG</span> Integration
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform your business with comprehensive ESG integration. Align sustainability goals with financial performance 
                while ensuring regulatory compliance and stakeholder value creation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">ESG Pillars</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {esgPillars.map((pillar, index) => (
                  <Card key={index} className="card-glow hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center mb-4">
                        <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                      </div>
                      <CardTitle>{pillar.title}</CardTitle>
                      <CardDescription>{pillar.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">Key Metrics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {pillar.metrics.map((metric, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Integration Capabilities</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {integrationFeatures.map((feature, index) => (
                  <Card key={index} className="card-glass">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-card/50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">Compliance Frameworks</h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our platform supports all major ESG reporting standards and regulatory frameworks
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {complianceFrameworks.map((framework, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm font-medium">{framework}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Integrate ESG into Your Strategy?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover how our ESG integration platform can help you create sustainable value 
                while meeting regulatory requirements and stakeholder expectations.
              </p>
              <Button className="btn-hero group">
                Book ESG Integration Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default EsgIntegration;