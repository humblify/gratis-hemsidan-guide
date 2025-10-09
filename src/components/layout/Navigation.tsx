import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/platform', label: t('nav.platform') },
    { to: '/use-cases', label: t('nav.useCases') },
    { to: '/resources', label: t('nav.resources') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const languageOptions = [
    { value: 'sv', label: '🇸🇪 Svenska', flag: '🇸🇪' },
    { value: 'en', label: '🇬🇧 English', flag: '🇬🇧' },
    { value: 'de', label: '🇩🇪 Deutsch', flag: '🇩🇪' },
    { value: 'fr', label: '🇫🇷 Français', flag: '🇫🇷' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-card font-bold text-xl">H</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Humblify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <Select value={i18n.language} onValueChange={changeLanguage}>
              <SelectTrigger className="w-[140px] bg-card/50 border-border/50">
                <SelectValue>
                  {languageOptions.find((lang) => lang.value === i18n.language)?.label}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* CTA Button */}
            <Button className="btn-hero">
              {t('nav.bookDemo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card border-border">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Nav Links */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors hover:text-primary ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* Mobile Language Selector */}
                <div className="pt-6 border-t border-border">
                  <Select value={i18n.language} onValueChange={changeLanguage}>
                    <SelectTrigger className="w-full bg-background/50">
                      <SelectValue>
                        {languageOptions.find((lang) => lang.value === i18n.language)?.label}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {languageOptions.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Mobile CTA */}
                <Button className="btn-hero w-full mt-4">
                  {t('nav.bookDemo')}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
