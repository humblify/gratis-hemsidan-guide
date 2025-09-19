import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Hem
            </a>
            <a href="#product" className="text-foreground hover:text-primary transition-colors">
              Produkt
            </a>
            <a href="#eroi-lab" className="text-foreground hover:text-primary transition-colors">
              EROI-labbet
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Om Oss
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-hero">
              Boka en Demo
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
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Hem
              </a>
              <a
                href="#product"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Produkt
              </a>
              <a
                href="#eroi-lab"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                EROI-labbet
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Om Oss
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </a>
              <div className="pt-4">
                <Button className="btn-hero w-full" onClick={() => setIsOpen(false)}>
                  Boka en Demo
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