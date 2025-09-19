import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, TrendingDown, Activity, Eye, Brain } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const RiskManagement = () => {
  const { t } = useTranslation();

  const riskTypes = [
    {
      icon: AlertTriangle,
      title: "Regulatory Risk",
      description: "Monitor and predict regulatory changes across CSRD, EU Taxonomy, and emerging ESG legislation.",
      impact: "High",
      mitigation: "Automated compliance tracking with early warning systems"
    },
    {
      icon: TrendingDown,
      title: "Transition Risk",
      description: "Assess financial risks from the shift to a low-carbon economy and changing market dynamics.",
      impact: "Medium-High",
      mitigation: "Scenario analysis and strategic pathway modeling"
    },
    {
      icon: Activity,
      title: "Physical Risk",
      description: "Evaluate climate-related physical risks to operations, supply chains, and assets.",
      impact: "Variable",
      mitigation: "Geographic risk mapping and resilience planning"
    }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous surveillance of risk indicators across all business units and geographies.",
      features: ["24/7 risk scanning", "Automated alerts", "Multi-source data integration"]
    },
    {
      icon: Brain,
      title: "Predictive Modeling",
      description: "AI-powered models that forecast risk scenarios and their potential business impact.",
      features: ["Machine learning algorithms", "Monte Carlo simulations", "Stress testing"]
    },
    {
      icon: Shield,
      title: "Mitigation Planning",
      description: "Strategic risk response planning with actionable mitigation strategies and KPI tracking.",
      features: ["Action plan templates", "Progress monitoring", "ROI optimization"]
    }
  ];

  return (
    <Layout showSidebar={true}>
      <SEOHead page="risk-management" customTitle="Risk Management - ESG & Climate Risk Solutions | Humblify" />
      
      <div className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Risk</span> Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Proactively identify, assess, and mitigate ESG and climate-related risks before they impact your business. 
                Our comprehensive risk management platform provides the insights you need to stay ahead.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Risk Categories</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {riskTypes.map((risk, index) => (
                  <Card key={index} className="card-glow hover:scale-105 transition-all duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                        <risk.icon className="w-6 h-6 text-destructive" />
                      </div>
                      <CardTitle>{risk.title}</CardTitle>
                      <CardDescription>{risk.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Impact Level:</span>
                          <span className="text-sm font-semibold text-destructive">{risk.impact}</span>
                        </div>
                        <div>
                          <span className="text-sm text-muted-foreground">Mitigation:</span>
                          <p className="text-sm mt-1">{risk.mitigation}</p>
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
              <h2 className="text-3xl font-bold text-center mb-12">Platform Capabilities</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => (
                  <Card key={index} className="card-glass">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <capability.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{capability.title}</CardTitle>
                      <CardDescription>{capability.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
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
            <div className="bg-card/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Strengthen Your Risk Management?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Schedule a demo to see how our risk management platform can help you identify, 
                assess, and mitigate ESG and climate risks across your organization.
              </p>
              <Button className="btn-hero">Book Risk Assessment Demo</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default RiskManagement;