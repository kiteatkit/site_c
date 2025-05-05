import React, { useEffect, useRef } from 'react';

interface CircuitBackgroundProps {
  className?: string;
}

const CircuitBackground: React.FC<CircuitBackgroundProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    
    // Staggered animation for circuit elements
    const paths = svg.querySelectorAll('path.circuit-line');
    const circles = svg.querySelectorAll('circle.circuit-node');
    
    paths.forEach((path, index) => {
      const delay = index * 0.2;
      (path as SVGElement).style.animation = `circuit-flow 8s infinite linear ${delay}s`;
    });
    
    circles.forEach((circle, index) => {
      const delay = index * 0.3;
      (circle as SVGElement).style.animation = `pulse-slow 4s infinite ease-in-out ${delay}s`;
    });
  }, []);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        ref={svgRef} 
        className="w-full h-full"
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal lines */}
        <path className="circuit-line" d="M100,100 H900" />
        <path className="circuit-line" d="M200,200 H800" />
        <path className="circuit-line" d="M150,300 H850" />
        <path className="circuit-line" d="M300,400 H700" />
        <path className="circuit-line" d="M200,500 H800" />
        <path className="circuit-line" d="M100,600 H900" />
        <path className="circuit-line" d="M300,700 H700" />
        <path className="circuit-line" d="M200,800 H800" />
        <path className="circuit-line" d="M150,900 H850" />
        
        {/* Vertical lines */}
        <path className="circuit-line" d="M100,100 V900" />
        <path className="circuit-line" d="M300,200 V800" />
        <path className="circuit-line" d="M500,100 V900" />
        <path className="circuit-line" d="M700,200 V800" />
        <path className="circuit-line" d="M900,100 V900" />
        
        {/* Diagonal connections */}
        <path className="circuit-line" d="M100,100 L300,200" />
        <path className="circuit-line" d="M900,100 L700,200" />
        <path className="circuit-line" d="M100,900 L300,800" />
        <path className="circuit-line" d="M900,900 L700,800" />
        
        {/* Curved connections */}
        <path className="circuit-line" d="M500,100 Q600,300 700,200" />
        <path className="circuit-line" d="M500,900 Q400,700 300,800" />
        <path className="circuit-line" d="M300,400 Q400,450 500,400 Q600,350 700,400" />
        
        {/* Circuit nodes */}
        <circle className="circuit-node" cx="100" cy="100" r="5" />
        <circle className="circuit-node" cx="300" cy="200" r="5" />
        <circle className="circuit-node" cx="500" cy="100" r="5" />
        <circle className="circuit-node" cx="700" cy="200" r="5" />
        <circle className="circuit-node" cx="900" cy="100" r="5" />
        <circle className="circuit-node" cx="300" cy="400" r="5" />
        <circle className="circuit-node" cx="500" cy="400" r="5" />
        <circle className="circuit-node" cx="700" cy="400" r="5" />
        <circle className="circuit-node" cx="200" cy="500" r="5" />
        <circle className="circuit-node" cx="800" cy="500" r="5" />
        <circle className="circuit-node" cx="300" cy="800" r="5" />
        <circle className="circuit-node" cx="500" cy="900" r="5" />
        <circle className="circuit-node" cx="700" cy="800" r="5" />
        <circle className="circuit-node" cx="100" cy="900" r="5" />
        <circle className="circuit-node" cx="900" cy="900" r="5" />
      </svg>
    </div>
  );
};

export default CircuitBackground; 