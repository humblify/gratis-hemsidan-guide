import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, FileText, Video, Users, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Documentation = () => {
  const { t } = useTranslation();

  const documentCategories = [
    {
      title: "Implementation Guides",
      description: "Step-by-step guides for implementing ESG and EROI solutions",
      icon: BookOpen,
      documents: [
        { title: "EROI Methodology Whitepaper", type: "PDF", pages: "24 pages", description: "Complete guide to Environmental Return on Investment calculations" },
        { title: "CSRD Compliance Handbook", type: "PDF", pages: "48 pages", description: "Comprehensive guide to Corporate Sustainability Reporting Directive" },
        { title: "Shadow Pricing Implementation", type: "PDF", pages: "16 pages", description: "Practical guide to implementing shadow pricing for environmental costs" }
      ]
    },
    {
      title: "Technical Documentation",
      description: "API documentation, integration guides, and technical specifications",
      icon: FileText,
      documents: [
        { title: "API Reference Guide", type: "Online", pages: "Live", description: "Complete API documentation with examples and code samples" },
        { title: "Data Integration Specifications", type: "PDF", pages: "32 pages", description: "Technical requirements for data integration and system connectivity" },
        { title: "Security & Compliance Framework", type: "PDF", pages: "20 pages", description: "Information security and regulatory compliance guidelines" }
      ]
    },
    {
      title: "Training Materials",
      description: "Video tutorials, webinars, and training resources",
      icon: Video,
      documents: [
        { title: "Platform Overview Webinar", type: "Video", pages: "45 min", description: "Introduction to Humblify platform capabilities and features" },
        { title: "EROI Calculator Training", type: "Video", pages: "30 min", description: "How to use the interactive EROI calculator effectively" },
        { title: "Best Practices Workshop", type: "Video", pages: "60 min", description: "Industry best practices for ESG integration and reporting" }
      ]
    }
  ];

  const quickLinks = [
    { title: "Getting Started Guide", description: "New to Humblify? Start here", icon: BookOpen, link: "#" },
    { title: "FAQ", description: "Frequently asked questions", icon: Users, link: "#" },
    { title: "Support Center", description: "Technical support and help", icon: ExternalLink, link: "#" },
    { title: "Community Forum", description: "Connect with other users", icon: Users, link: "#" }
  ];

  return (
    <Layout showSidebar={true}>
      <SEOHead page="documentation" customTitle="Documentation - Resources & Guides | Humblify" />
      
      <div className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-primary">Documentation</span> & Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Access comprehensive guides, technical documentation, and training materials to maximize 
                your success with Humblify's ESG and EROI solutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {quickLinks.map((link, index) => (
                <Card key={index} className="card-glass hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <link.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </AnimatedSection>

          <div className="space-y-12">
            {documentCategories.map((category, index) => (
              <AnimatedSection key={index}>
                <Card className="card-glow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                        <CardDescription className="text-lg">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.documents.map((doc, idx) => (
                        <div key={idx} className="p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="font-semibold text-lg leading-tight">{doc.title}</h3>
                            <Badge variant="outline" className="text-xs ml-2">
                              {doc.type}
                            </Badge>
                          </div>
                          
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {doc.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{doc.pages}</span>
                            <Button size="sm" variant="outline" className="group">
                              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                              {doc.type === "Video" ? "Watch" : doc.type === "Online" ? "View" : "Download"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-16">
              <div className="bg-card/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Need Additional Support?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Can't find what you're looking for? Our support team is here to help with personalized 
                  assistance and custom training programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">Contact Support</Button>
                  <Button variant="outline">Request Custom Training</Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;