import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const About = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: "Erik Johansson",
      role: "CEO & Co-Founder",
      bio: "Former McKinsey partner specializing in energy strategy and sustainability transformations.",
      initials: "EJ"
    },
    {
      name: "Maria Chen",
      role: "CTO & Co-Founder", 
      bio: "Ex-Palantir engineer with 10+ years experience in data integration and analytics platforms.",
      initials: "MC"
    },
    {
      name: "Anders Lindqvist",
      role: "Head of Strategy",
      bio: "Former investment director at Northzone with expertise in climate tech and ESG integration.",
      initials: "AL"
    },
    {
      name: "Sarah Schmidt",
      role: "Lead Data Scientist",
      bio: "PhD in Environmental Economics, former researcher at Stockholm Environment Institute.",
      initials: "SS"
    },
    {
      name: "Thomas Bergström",
      role: "Head of Sales",
      bio: "20+ years enterprise software sales, former VP at Epicor focusing on manufacturing solutions.",
      initials: "TB"
    },
    {
      name: "Lisa Wang",
      role: "Head of Product",
      bio: "Former product manager at Spotify, specialized in B2B analytics and user experience design.",
      initials: "LW"
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "We believe in radical openness - both in our technology and our business practices."
    },
    {
      title: "Scientific Rigor",
      description: "All our methodologies are grounded in peer-reviewed research and empirical validation."
    },
    {
      title: "Practical Impact", 
      description: "We focus on solutions that drive measurable business outcomes and environmental progress."
    },
    {
      title: "Long-term Thinking",
      description: "We optimize for sustainable value creation over short-term gains."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 px-4">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('nav.about')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a team of strategists, engineers, and sustainability experts united by the belief 
              that transparency drives transformation.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary mb-4">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    To revolutionize strategic decision-making by integrating environmental impact 
                    as a core financial metric, enabling companies to achieve superior returns 
                    through sustainable practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glass">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary mb-4">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">
                    A world where every business decision is informed by its true environmental 
                    and financial impact, creating a sustainable economy that thrives within 
                    planetary boundaries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
              Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="card-glass text-center">
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} />
                      <AvatarFallback className="text-lg font-semibold bg-primary/20">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl text-foreground">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container-custom">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-glass">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg text-muted-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;