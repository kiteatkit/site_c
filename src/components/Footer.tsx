
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-solarized-base01 text-solarized-base2 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="font-mono text-solarized-blue text-2xl font-semibold">BYTE</span>
              <span className="font-mono text-solarized-cyan ml-1 text-2xl">CRAFT</span>
            </div>
            <p className="max-w-xs text-solarized-base1">
              Building exceptional web solutions that help businesses thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-lg font-semibold mb-4 text-solarized-base2">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">Web Development</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">UI/UX Design</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">E-commerce</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">Custom Software</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-lg font-semibold mb-4 text-solarized-base2">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-solarized-base1 hover:text-solarized-blue">About Us</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">Our Team</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">Careers</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-lg font-semibold mb-4 text-solarized-base2">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#contact" className="text-solarized-base1 hover:text-solarized-blue">Contact</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">Twitter</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">LinkedIn</a></li>
                <li><a href="#" className="text-solarized-base1 hover:text-solarized-blue">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-solarized-base00/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-solarized-base1 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ByteCraft. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-solarized-base1 hover:text-solarized-blue">Terms</a>
            <a href="#" className="text-solarized-base1 hover:text-solarized-blue">Privacy</a>
            <a href="#" className="text-solarized-base1 hover:text-solarized-blue">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
