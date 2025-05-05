
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-solarized-base2/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-solarized-base3 border border-solarized-base1/30 p-8 rounded-md shadow-lg">
                <pre className="font-mono text-xs sm:text-sm text-solarized-base01 leading-relaxed">
{`
  ____        _        ____            __ _   
 | __ ) _   _| |_ ___ / ___|_ __ __ _ / _| |_ 
 |  _ \\| | | | __/ _ \\ |   | '__/ _\` | |_| __|
 | |_) | |_| | ||  __/ |___| | | (_| |  _| |_ 
 |____/ \\__, |\\__\\___|\\____|_|  \\__,_|_|  \\__|
        |___/                                 

/* Company Profile */
const company = {
  name: "ByteCraft",
  founded: 2018,
  team: [
    { role: "Design", expertise: 8.5 },
    { role: "Frontend", expertise: 9.2 },
    { role: "Backend", expertise: 9.0 },
    { role: "DevOps", expertise: 8.8 }
  ],
  mission: "Creating digital experiences that \
  transform businesses and delight users",
  values: ["Innovation", "Quality", "Transparency"]
};

// Our commitment to excellence
console.log("Building the future, one pixel at a time.");
`}
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-solarized-base01/10 rounded-md z-[-1] border border-solarized-base1/20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-solarized-base01/5 rounded-md z-[-1] border border-solarized-base1/20"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <span className="font-mono text-solarized-blue">ABOUT US</span>
            <h2 className="section-title">Who We <span className="text-solarized-magenta">Are</span></h2>
            
            <p className="text-lg text-solarized-base01 mb-6">
              ByteCraft is a team of passionate technologists and creatives who love building innovative web solutions.
            </p>
            
            <p className="text-lg text-solarized-base01 mb-6">
              Founded in 2018, we've helped dozens of businesses transform their digital presence and operations through custom web applications, stunning websites, and strategic digital solutions.
            </p>
            
            <p className="text-lg text-solarized-base01 mb-8">
              Our approach combines technical excellence with creative problem-solving to deliver results that exceed expectations and drive real business value.
            </p>
            
            <Button className="bg-solarized-magenta hover:bg-solarized-magenta/90 text-white font-mono">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
