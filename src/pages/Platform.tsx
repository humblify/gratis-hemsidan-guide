import { useTranslation } from 'react-i18next';
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calculator, BarChart3, Shield, TrendingUp, Zap, Target } from "lucide-react";
import solutionImage from "@/assets/eroi-cube.jpg";

const Platform = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Calculator,
      title: "EROI Calculator",
      description: "Advanced Environmental Return on Investment calculations with real-time data integration",
      path: "/platform/eroi-lab"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive ESG and financial analytics with predictive modeling",
      path: "/platform/analytics"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Predictive risk assessment for regulatory, environmental, and transition risks",
      path: "/solutions/risk-management"
    },
    {
      icon: TrendingUp,
      title: "ESG Integration",
      description: "Unified ESG and financial analysis for strategic decision-making",
      path: "/solutions/esg-integration"
    }
  ];

  const principles = [
    {
      icon: Target,
      title: "Radical Transparency",
      description: "Glass Box AI vs Black Box - Complete auditability through ExplanationTree methodology"
    },
    {
      icon: Zap,
      title: "Integrated Decision-Making", 
      description: "ESG and financial analysis unified into a single disciplined approach to strategic planning"
    },
    {
      icon: Shield,
      title: "Predictive Risk Management",
      description: "Advanced modeling of regulatory, environmental, and transition risks before they impact operations"
    },
    {
      icon: TrendingUp,
      title: "Sustainable Profitability",
      description: "Long-term value creation through disciplined sustainability integration and risk-adjusted returns"
    }
  ];

  return (
    <Layout showSidebar={true}>
      <SEOHead 
        page="product"
        customTitle="Platform Overview - Humblify EROI Platform"
        customDescription="Complete platform overview of Humblify's EROI solution. Unified ESG and financial analysis for strategic decision-making."
      />

      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  Platform Overview
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Complete <span className="text-primary">EROI Platform</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Unified ESG and financial analysis platform that transforms sustainability data 
                into actionable business intelligence through advanced AI and transparent methodologies.
              </p>
            </div>
          </AnimatedSection>

          {/* Platform Features Grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid lg:grid-cols-2 gap-8 mb-24">
              {features.map((feature, index) => (
                <Card key={index} className="card-glow hover:scale-[1.02] transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="group" asChild>
                      <a href={feature.path}>
                        Explore Feature
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          {/* Four Principles Section */}
          <AnimatedSection delay={0.4}>
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Four <span className="text-primary">Core Principles</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The foundational principles that guide our platform development and methodology
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {principles.map((principle, index) => (
                  <div key={index} className="card-glass p-8 group hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary">{principle.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Visual + CTA Section */}
          <AnimatedSection delay={0.6}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  See the Platform <span className="text-primary">in Action</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Experience how our AI-powered platform transforms complex ESG data into clear, 
                  actionable insights that drive better business decisions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-hero group">
                    Try EROI Calculator
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="group">
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="card-glow p-8">
                  <img 
                    src={solutionImage} 
                    alt="EROI Platform Visualization"
                    className="w-full h-auto rounded-lg shadow-elegant"
                  />
                </div>

                {/* Floating metrics */}
                <div className="absolute -top-4 -right-4 card-glass p-4 min-w-[140px]">
                  <div className="text-2xl font-bold text-success">+23.4%</div>
                  <div className="text-sm text-muted-foreground">EROI Improvement</div>
                </div>

                <div className="absolute -bottom-4 -left-4 card-glass p-4 min-w-[140px]">
                  <div className="text-2xl font-bold text-primary">€2.4M</div>
                  <div className="text-sm text-muted-foreground">Risk-Adjusted Value</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Platform;