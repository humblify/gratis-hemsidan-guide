import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The Strategic Navigator
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Our comprehensive EROI platform that transforms how enterprises integrate sustainability into strategic decision-making.
            </p>
            <Button className="btn-hero">
              {t('nav.bookDemo')}
            </Button>
          </div>
        </section>

        {/* Four Core Principles */}
        <section className="py-20 px-4">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
              Four Core Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">1. Radical Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    Complete visibility into environmental impact across all business operations, 
                    quantified in financial terms for strategic clarity.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">2. Integrated Decision-Making</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    Seamless integration of ESG factors into traditional financial models, 
                    enabling holistic investment and operational decisions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">3. Predictive Risk Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    Advanced modeling of regulatory, environmental, and market risks 
                    to prevent stranded assets and optimize portfolio resilience.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">4. Sustainable Profitability</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-muted-foreground">
                    Framework for achieving superior financial performance through 
                    disciplined sustainability practices and long-term value creation.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
              Platform Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Real-time Analytics</h3>
                <p className="text-muted-foreground">
                  Live data processing and EROI calculations across multiple data sources and scenarios.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Scenario Modeling</h3>
                <p className="text-muted-foreground">
                  Advanced what-if analysis for strategic planning and risk assessment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Compliance Tracking</h3>
                <p className="text-muted-foreground">
                  Automated monitoring of regulatory requirements including CSRD and EU taxonomy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;