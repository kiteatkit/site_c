
import React from 'react';

const ProcessStep = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      <div className="flex-shrink-0">
        <div className="bg-solarized-base3 border border-solarized-blue/30 w-16 h-16 rounded-full flex items-center justify-center font-mono text-2xl text-solarized-blue shadow-lg">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-mono font-semibold text-solarized-base01 mb-2">{title}</h3>
        <p className="text-solarized-base00">{description}</p>
      </div>
    </div>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Research & Discovery",
      description: "We start by understanding your business, goals, audience, and competitors to create a strategic foundation for your project."
    },
    {
      title: "Planning & Strategy",
      description: "Based on our research, we develop a comprehensive project plan with clear objectives, timelines, and deliverables."
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create wireframes and visual designs that bring your vision to life, with multiple rounds of feedback."
    },
    {
      title: "Development & Testing",
      description: "Our engineers build your solution using modern technologies, with rigorous testing at every stage."
    },
    {
      title: "Launch & Training",
      description: "Once approved, we deploy your project and provide training to ensure you can manage your new tools effectively."
    }
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/5">
            <span className="font-mono text-solarized-blue">OUR PROCESS</span>
            <h2 className="section-title">How We <span className="text-solarized-cyan">Work</span></h2>
            <p className="section-subtitle">$ execute process.sh --with=precision</p>
            
            <div className="mt-6 p-6 bg-solarized-base3/80 border border-solarized-base1/30 rounded-md">
              <pre className="font-mono text-solarized-base01 text-sm">
{`#!/bin/bash
# BYTECRAFT PROCESS
echo "Starting project workflow..."

for step in {1..5}; do
  echo "Executing step $step"
  ./craft_excellence.sh --stage=$step
done

echo "Project completed successfully ✓"`}
              </pre>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <div className="space-y-12 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-solarized-base1/30 hidden sm:block"></div>
              {steps.map((step, index) => (
                <ProcessStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
