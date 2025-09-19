import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showSidebar?: boolean;
}

const Layout = ({ children, showSidebar = false }: LayoutProps) => {
  if (!showSidebar) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Global Header */}
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <div className="flex items-center justify-between h-full px-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="ml-2" />
              <h1 className="text-xl font-bold text-primary">Humblify</h1>
            </div>
            
            {/* Top nav items */}
            <div className="flex items-center gap-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </header>

        <AppSidebar />
        
        <main className="flex-1 pt-16">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;