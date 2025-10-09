import { useTranslation } from 'react-i18next';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, Download, FileText, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead page="contact" />
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
                  {t('contact.title')}
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-4">
                  {t('contact.subtitle')}
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('contact.description')}
                </p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Form & Info */}
        <AnimatedSection>
          <section className="section-padding bg-muted/20">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Enhanced Contact Form */}
                <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="card-glow">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary">{t('contact.demoTitle')}</CardTitle>
                      <CardDescription className="text-lg">
                        {t('contact.demoDescription')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{t('contact.form.firstName')}</Label>
                          <Input id="firstName" placeholder="John" className="bg-background/50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{t('contact.form.lastName')}</Label>
                          <Input id="lastName" placeholder="Doe" className="bg-background/50" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact.form.email')}</Label>
                        <Input id="email" type="email" placeholder="john.doe@company.com" className="bg-background/50" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">{t('contact.form.company')}</Label>
                        <Input id="company" placeholder="Acme Corp" className="bg-background/50" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">{t('contact.form.role')}</Label>
                        <Select>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cfo">{t('contact.form.roles.cfo')}</SelectItem>
                            <SelectItem value="cso">{t('contact.form.roles.cso')}</SelectItem>
                            <SelectItem value="strategy">{t('contact.form.roles.strategy')}</SelectItem>
                            <SelectItem value="sustainability">{t('contact.form.roles.sustainability')}</SelectItem>
                            <SelectItem value="investment">{t('contact.form.roles.investment')}</SelectItem>
                            <SelectItem value="operations">{t('contact.form.roles.operations')}</SelectItem>
                            <SelectItem value="other">{t('contact.form.roles.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry">{t('contact.form.industry')}</Label>
                        <Select>
                          <SelectTrigger className="bg-background/50">
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="energy">{t('contact.form.industries.energy')}</SelectItem>
                            <SelectItem value="manufacturing">{t('contact.form.industries.manufacturing')}</SelectItem>
                            <SelectItem value="infrastructure">{t('contact.form.industries.infrastructure')}</SelectItem>
                            <SelectItem value="finance">{t('contact.form.industries.finance')}</SelectItem>
                            <SelectItem value="mining">{t('contact.form.industries.mining')}</SelectItem>
                            <SelectItem value="chemicals">{t('contact.form.industries.chemicals')}</SelectItem>
                            <SelectItem value="other">{t('contact.form.industries.other')}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact.form.message')}</Label>
                        <Textarea 
                          id="message" 
                          placeholder={t('contact.form.messagePlaceholder')}
                          className="min-h-[120px] bg-background/50"
                        />
                      </div>

                      <Button className="btn-hero w-full">
                        {t('contact.form.submit')}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Enhanced Contact Information */}
                <div className="space-y-8">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="card-glass">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground flex items-center gap-3">
                          <Mail className="w-6 h-6 text-primary" />
                          {t('contact.infoTitle')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">Email</p>
                            <p className="text-muted-foreground">{t('contact.info.email')}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">Phone</p>
                            <p className="text-muted-foreground">{t('contact.info.phone')}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-primary" />
                          <div>
                            <p className="font-medium text-foreground">Address</p>
                            <p className="text-muted-foreground">{t('contact.info.address')}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="card-glass">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground flex items-center gap-3">
                          <Clock className="w-6 h-6 text-primary" />
                          {t('contact.hoursTitle')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{t('contact.hours.weekdays')}</span>
                          <span className="text-foreground font-medium">{t('contact.hours.time')}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">{t('contact.hours.response')}</span>
                          <span className="text-foreground font-medium">{t('contact.hours.responseTime')}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card className="card-glass">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{t('contact.resourcesTitle')}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button variant="outline" className="w-full justify-start hover:bg-primary/10">
                          <FileText className="w-4 h-4 mr-2" />
                          {t('contact.resources.whitepaper')}
                        </Button>
                        <Button variant="outline" className="w-full justify-start hover:bg-primary/10">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {t('contact.resources.casestudies')}
                        </Button>
                        <Button variant="outline" className="w-full justify-start hover:bg-primary/10">
                          <Download className="w-4 h-4 mr-2" />
                          {t('contact.resources.documentation')}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;