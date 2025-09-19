import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Humblify</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Vi omvandlar komplexitet till hållbar lönsamhet genom Environmental Return on Investment (EROI). 
              Hjälper CFO:er och hållbarhetschefer att fatta optimerade investeringsbeslut.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>kontakt@humblify.se</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+46 8 123 456 78</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Stockholm, Sverige</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Snabblänkar</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Hem
              </a>
              <a href="#product" className="block text-muted-foreground hover:text-primary transition-colors">
                Produkt
              </a>
              <a href="#eroi-lab" className="block text-muted-foreground hover:text-primary transition-colors">
                EROI-labbet
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                Om Oss
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resurser</h4>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                White Papers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Fallstudier
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API-dokumentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Support
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Säkerhet
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border/50">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Håll dig uppdaterad</h4>
            <p className="text-muted-foreground mb-4">
              Få de senaste insikterna om EROI och hållbar lönsamhet
            </p>
            <div className="flex gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-hero">
                Prenumerera
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Humblify AB. Alla rättigheter förbehållna.
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;