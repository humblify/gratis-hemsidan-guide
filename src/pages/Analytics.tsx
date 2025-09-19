import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Target, Zap, Database, Shield } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Analytics = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: BarChart3,
      title: "Real-time ESG Dashboards",
      description: "Monitor environmental, social, and governance metrics in real-time with customizable dashboards tailored to your industry.",
      benefits: ["Live data visualization", "Custom KPI tracking", "Automated reporting"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered forecasting models predict environmental risks and opportunities before they impact your bottom line.",
      benefits: ["Risk forecasting", "Scenario modeling", "Trend analysis"]
    },
    {
      icon: Target,
      title: "Performance Benchmarking",
      description: "Compare your ESG performance against industry peers and regulatory standards with comprehensive benchmarking tools.",
      benefits: ["Industry comparisons", "Regulatory compliance", "Best practice identification"]
    }
  ];

  const capabilities = [
    { icon: Database, title: "Data Integration", description: "Seamless integration with existing systems" },
    { icon: Shield, title: "Compliance Tracking", description: "Automated CSRD and EU Taxonomy monitoring" },
    { icon: Zap, title: "AI-Powered Insights", description: "Machine learning driven recommendations" }
  ];

  return (
    <Layout showSidebar={true}>
      <SEOHead page="analytics" customTitle="Analytics Dashboard - ESG Performance Monitoring | Humblify" />
      
      <div className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Analytics</span> Dashboard
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform your ESG data into actionable insights with our comprehensive analytics platform. 
                Monitor performance, predict risks, and optimize your sustainability strategy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="card-glow hover:scale-105 transition-all duration-300">
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
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-card/50 rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Platform Capabilities</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <capability.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center">
              <Button className="btn-hero">Book Analytics Demo</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;