import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Eye, Microscope, Target, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  const teamRoles = [
    {
      role: t('about.team.ceo.role'),
      background: t('about.team.ceo.background'),
      icon: User
    },
    {
      role: t('about.team.cto.role'),
      background: t('about.team.cto.background'),
      icon: User
    },
    {
      role: t('about.team.strategy.role'),
      background: t('about.team.strategy.background'),
      icon: User
    },
    {
      role: t('about.team.science.role'),
      background: t('about.team.science.background'),
      icon: User
    },
    {
      role: t('about.team.sales.role'),
      background: t('about.team.sales.background'),
      icon: User
    },
    {
      role: t('about.team.product.role'),
      background: t('about.team.product.background'),
      icon: User
    }
  ];

  const values = [
    {
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
      icon: Eye
    },
    {
      title: t('about.values.rigor.title'),
      description: t('about.values.rigor.description'),
      icon: Microscope
    },
    {
      title: t('about.values.impact.title'), 
      description: t('about.values.impact.description'),
      icon: Target
    },
    {
      title: t('about.values.thinking.title'),
      description: t('about.values.thinking.description'),
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page="about" />
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
                  {t('about.title')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
                  {t('about.subtitle')}
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('about.description')}
                </p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Mission & Vision */}
        <AnimatedSection>
          <section className="section-padding bg-muted/20">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow h-full">
                    <CardHeader>
                      <CardTitle className="text-3xl text-primary mb-4">{t('about.missionTitle')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {t('about.mission')}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow h-full">
                    <CardHeader>
                      <CardTitle className="text-3xl text-primary mb-4">{t('about.visionTitle')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {t('about.vision')}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Team Section - Anonymized */}
        <AnimatedSection>
          <section className="section-padding">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
                {t('about.teamTitle')}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamRoles.map((member, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Card className="card-glass text-center h-full">
                      <CardHeader>
                        <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <member.icon className="w-12 h-12 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-foreground">{member.role}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{member.background}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection>
          <section className="section-padding bg-muted/20">
            <div className="container-custom">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
                {t('about.valuesTitle')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="card-glow h-full">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                            <value.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-2xl text-primary">{value.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                          {value.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default About;