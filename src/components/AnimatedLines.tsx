import React from 'react';

const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Fixed horizontal animated line under heading */}
      <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-solarized-cyan/30 to-transparent animate-pulse-slow" style={{ top: 'calc(50% + 4rem)' }}>
        <div className="absolute left-0 top-0 w-[100%] h-full bg-gradient-to-r from-transparent to-solarized-cyan animate-slide-right" />
      </div>

      {/* Vertical animated line */}
      <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gradient-to-b from-transparent via-solarized-cyan/30 to-transparent animate-pulse-slow">
        <div className="absolute top-0 left-0 w-full h-[100%] bg-gradient-to-b from-transparent to-solarized-cyan animate-slide-down" />
      </div>

      {/* Diagonal lines */}
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="absolute left-[15%] top-0 w-[3px] h-full bg-solarized-cyan/10 transform -rotate-45" />
        <div className="absolute right-[15%] top-0 w-[3px] h-full bg-solarized-cyan/10 transform rotate-45" />
      </div>

      {/* Corner dots */}
      <div className="absolute left-[15%] top-[15%] w-2 h-2 rounded-full bg-solarized-cyan/50 animate-glow" />
      <div className="absolute right-[15%] top-[15%] w-2 h-2 rounded-full bg-solarized-cyan/50 animate-glow" />
    </div>
  );
};

export default AnimatedLines; 