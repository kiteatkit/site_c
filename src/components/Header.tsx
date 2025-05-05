
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-solarized-base3/80 backdrop-blur-md border-b border-solarized-base1/20 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-mono text-solarized-blue text-xl font-semibold">BYTE</span>
          <span className="font-mono text-solarized-cyan ml-1">CRAFT</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="font-mono text-solarized-base01 hover:text-solarized-blue transition-colors">
            Services
          </a>
          <a href="#process" className="font-mono text-solarized-base01 hover:text-solarized-blue transition-colors">
            Process
          </a>
          <a href="#about" className="font-mono text-solarized-base01 hover:text-solarized-blue transition-colors">
            About
          </a>
          <Button variant="outline" className="font-mono border-solarized-blue text-solarized-blue hover:bg-solarized-blue/10">
            <a href="#contact" className="flex items-center gap-2">
              Contact <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
