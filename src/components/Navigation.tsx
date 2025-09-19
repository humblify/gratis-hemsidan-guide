import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Humblify</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              {t('nav.home')}
            </a>
    <a href="/platform" className="text-foreground hover:text-primary transition-colors">
      Platform
    </a>
            <a href="/#eroi-lab" className="text-foreground hover:text-primary transition-colors">
              {t('nav.eroiLab')}
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              {t('nav.about')}
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              {t('nav.contact')}
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button className="btn-hero">
              {t('nav.bookDemo')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/50 backdrop-blur-lg rounded-lg mt-2">
              <a
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a
                href="/platform"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Platform
              </a>
              <a
                href="/#eroi-lab"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.eroiLab')}
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </a>
              <div className="pt-4 space-y-2">
                <div className="flex justify-center">
                  <LanguageSelector />
                </div>
                <Button className="btn-hero w-full" onClick={() => setIsOpen(false)}>
                  {t('nav.bookDemo')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;