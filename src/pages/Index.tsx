import Navigation from "@/components/Navigation";
import SimplifiedHero from "@/components/SimplifiedHero";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead page="home" />
      <Navigation />
      <main>
        <SimplifiedHero />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
