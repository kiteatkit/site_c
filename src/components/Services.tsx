import React from "react";
import CanvasWave from "./CanvasWave";
import CanvasCodeWave from "./CanvasCodeWave";
import CanvasPhone from "./CanvasPhone";
import CanvasMatrix from "./CanvasMatrix";
import { CanvasElementProps } from "./CanvasElementProps.type";

const CanvasMap: Record<string, React.ComponentType<CanvasElementProps>> = {
  wave: CanvasWave,
  codeWave: CanvasCodeWave,
  phone: CanvasPhone,
  matrix: CanvasMatrix,
};

type Service = {
  title: string;
  icon: string;
  description: string;
  canvas: keyof typeof CanvasMap;
};

const ServiceCard = ({ title, icon, description, canvas }: Service) => {
  const CanvasComponent = canvas ? CanvasMap[canvas] : null;

  return (
    <div className="retro-card group">
      <div className="mb-2 flex gap-2 items-center">
        {CanvasComponent && <CanvasComponent width={160} height={200} />}
      </div>
      <div className="mb-4 text-6xl text-solarized-base01 group-hover:text-solarized-blue transition-colors">
        <div className="bg-solarized-base2 inline-block p-4 rounded-md border border-solarized-base1/30">
          {icon}
        </div>
      </div>
      <h3 className="text-2xl font-mono font-semibold text-solarized-base01 mb-3">
        {title}
      </h3>
      <p className="text-solarized-base00">{description}</p>
    </div>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      title: "Web Development",
      icon: "</> ",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      canvas: "codeWave",
    },
    {
      title: "Mobile Development",
      icon: "🔄",
      description:
        "Full-featured mobile apps built with modern technologies and best practices.",
      canvas: "phone",
    },
    {
      title: "Custom Software",
      icon: "⌘ ⌥",
      description:
        "Tailored software solutions that automate processes and solve complex business problems.",
      canvas: "matrix",
    },
    {
      title: "API Integration",
      icon: "↹ ↻",
      description:
        "Seamless integration of third-party services and platforms into your existing systems.",
      canvas: "wave",
    },
  ];

  return (
    <section id="services" className="py-24 bg-solarized-base2/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-solarized-blue">OUR SERVICES</span>
          <h2 className="section-title">
            What We <span className="text-solarized-blue">Create</span>
          </h2>
          <p className="section-subtitle">
            $ tech_solutions --for=modern_problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              canvas={service.canvas}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
