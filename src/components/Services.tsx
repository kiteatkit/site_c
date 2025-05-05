
import React from 'react';

const ServiceCard = ({ title, icon, description }: { title: string, icon: string, description: string }) => {
  return (
    <div className="retro-card group">
      <div className="mb-4 text-6xl text-solarized-base01 group-hover:text-solarized-blue transition-colors">
        <div className="bg-solarized-base2 inline-block p-4 rounded-md border border-solarized-base1/30">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-mono font-semibold text-solarized-base01 mb-3">{title}</h3>
      <p className="text-solarized-base00">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: "</> ",
      description: "Custom websites and web applications built with modern technologies and best practices."
    },
    {
      title: "UI/UX Design",
      icon: "■ □",
      description: "User-centered design that creates seamless and intuitive experiences for your customers."
    },
    {
      title: "E-commerce",
      icon: "₿ $",
      description: "Full-featured online stores with payment processing, inventory management, and analytics."
    },
    {
      title: "Digital Marketing",
      icon: "⟹ ○",
      description: "Data-driven strategies to increase visibility, traffic, and conversions for your business."
    },
    {
      title: "Custom Software",
      icon: "⌘ ⌥",
      description: "Tailored software solutions that automate processes and solve complex business problems."
    },
    {
      title: "API Integration",
      icon: "↹ ↻",
      description: "Seamless integration of third-party services and platforms into your existing systems."
    }
  ];

  return (
    <section id="services" className="py-24 bg-solarized-base2/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-solarized-blue">OUR SERVICES</span>
          <h2 className="section-title">What We <span className="text-solarized-blue">Create</span></h2>
          <p className="section-subtitle">$ tech_solutions --for=modern_problems</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
