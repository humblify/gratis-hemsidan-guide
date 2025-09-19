import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Zap, Shield, Target, Database, Brain, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Product = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page="product" />
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <AnimatedSection>
          <section className="section-padding">
            <div className="container-custom text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-glow">
                  {t('product.title')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
                  {t('product.subtitle')}
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  {t('product.description')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button className="btn-hero">
                  {t('product.bookDemo')}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  {t('product.techStack')}
                </p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Four Core Principles */}
        <AnimatedSection>
          <section className="section-padding bg-muted/20">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
                {t('product.coreTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <Database className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">1. {t('product.principles.transparency.title')}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-muted-foreground">
                        {t('product.principles.transparency.description')}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">2. {t('product.principles.integration.title')}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-muted-foreground">
                        {t('product.principles.integration.description')}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <BarChart className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">3. {t('product.principles.predictive.title')}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-muted-foreground">
                        {t('product.principles.predictive.description')}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                          <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">4. {t('product.principles.profitability.title')}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg text-muted-foreground">
                        {t('product.principles.profitability.description')}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Platform Features */}
        <AnimatedSection>
          <section className="section-padding">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
                {t('product.featuresTitle')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('product.features.analytics.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('product.features.analytics.description')}
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('product.features.modeling.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('product.features.modeling.description')}
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{t('product.features.compliance.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('product.features.compliance.description')}
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="section-padding bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t('cta.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  {t('cta.bookDemo')}
                </Button>
                <Button className="btn-secondary-hero">
                  {t('cta.downloadResource')}
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Product;