
import React, { useEffect, useRef, useState } from 'react';

interface AsciiAnimationProps {
  speed?: number;
}

const AsciiAnimation: React.FC<AsciiAnimationProps> = ({ speed = 150 }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [opacity, setOpacity] = useState(1);
  
  // Screen dimensions for the ASCII canvas - increased width for full screen
  const width = 120; // Increased from 40 to 120
  const height = 30; // Increased from 20 to 30
  
  useEffect(() => {
    // Handle scroll to fade out the animation when scrolling
    const handleScroll = () => {
      // Start fading out after 100px of scroll
      const scrollThreshold = 100;
      const scrollPosition = window.scrollY;
      
      if (scrollPosition > scrollThreshold) {
        // Calculate opacity based on scroll position (0 to 1)
        const newOpacity = Math.max(0, 1 - (scrollPosition - scrollThreshold) / 200);
        setOpacity(newOpacity);
      } else {
        setOpacity(1);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create empty canvas
    let canvas: string[][] = Array(height).fill(0).map(() => Array(width).fill(' '));
    let frame = 0;
    
    // Animation parameters
    const lines: {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      char: string;
      progress: number;
      speed: number;
      completed: boolean;
    }[] = [];
    
    // Create initial set of lines - increased to 16 for fuller screen coverage
    for (let i = 0; i < 16; i++) {
      addNewLine();
    }
    
    function addNewLine() {
      // Characters for drawing lines - expanded for more variety and detail
      const chars = ['/', '\\', '|', '-', '=', '+', '*', '·', '░', '▒', '▓', '█', '▄', '▀', '▐', '▌', ':', '.', '•', '◦', '○', '◎', '◊', '♦', '♢'];
      
      // Random start and end positions
      const startX = Math.floor(Math.random() * width);
      const startY = Math.floor(Math.random() * height);
      let endX, endY;
      
      // Determine pattern type
      const patternType = Math.floor(Math.random() * 5);
      
      switch(patternType) {
        case 0: // Horizontal line
          endX = Math.floor(Math.random() * width);
          endY = startY;
          break;
        case 1: // Vertical line
          endX = startX;
          endY = Math.floor(Math.random() * height);
          break;
        case 2: // Diagonal down
          const diag1 = Math.min(width - startX - 1, height - startY - 1, 20); // Increased max diagonal length
          endX = startX + diag1;
          endY = startY + diag1;
          break;
        case 3: // Diagonal up
          const diag2 = Math.min(width - startX - 1, startY, 20); // Increased max diagonal length
          endX = startX + diag2;
          endY = startY - diag2;
          break;
        default: // Random point (will create interesting connections)
          endX = Math.floor(Math.random() * width);
          endY = Math.floor(Math.random() * height);
      }
      
      // Add the line with random character and speed
      lines.push({
        startX,
        startY,
        endX,
        endY,
        char: chars[Math.floor(Math.random() * chars.length)],
        progress: 0,
        speed: 0.02 + Math.random() * 0.08, // Random speed
        completed: false
      });
    }
    
    // Bresenham's line algorithm to draw a line
    function drawLine(x0: number, y0: number, x1: number, y1: number, progress: number, char: string) {
      const dx = Math.abs(x1 - x0);
      const dy = Math.abs(y1 - y0);
      const sx = (x0 < x1) ? 1 : -1;
      const sy = (y0 < y1) ? 1 : -1;
      let err = dx - dy;
      
      const points = [];
      let currentX = x0;
      let currentY = y0;
      
      // Calculate all points in the line
      while (true) {
        points.push({ x: currentX, y: currentY });
        
        if (currentX === x1 && currentY === y1) break;
        
        const e2 = 2 * err;
        if (e2 > -dy) { err -= dy; currentX += sx; }
        if (e2 < dx) { err += dx; currentY += sy; }
      }
      
      // Only draw up to the current progress
      const pointsToDraw = Math.ceil(points.length * progress);
      for (let i = 0; i < pointsToDraw && i < points.length; i++) {
        const point = points[i];
        if (point.x >= 0 && point.x < width && point.y >= 0 && point.y < height) {
          canvas[point.y][point.x] = char;
        }
      }
    }
    
    function updateCanvas() {
      // Clear the canvas
      canvas = Array(height).fill(0).map(() => Array(width).fill(' '));
      
      // Draw all active lines
      lines.forEach(line => {
        drawLine(
          line.startX, 
          line.startY, 
          line.endX, 
          line.endY, 
          line.progress,
          line.char
        );
        
        // Update progress
        if (!line.completed) {
          line.progress += line.speed;
          if (line.progress >= 1) {
            line.completed = true;
          }
        }
      });
      
      // Occasionally add new lines and remove completed ones
      if (frame % 30 === 0) {
        // Remove some completed lines
        const completedLines = lines.filter(l => l.completed);
        if (completedLines.length > 7) { // Increased from 5 to 7
          const indexToRemove = lines.findIndex(l => l.completed);
          if (indexToRemove !== -1) {
            lines.splice(indexToRemove, 1);
          }
        }
        
        // Add new line occasionally
        if (lines.length < 30 && Math.random() > 0.3) { // Increased max lines from 20 to 30
          addNewLine();
        }
      }
      
      // Render the canvas
      if (canvasRef.current) {
        canvasRef.current.innerHTML = '<pre class="font-mono text-xs" style="width: 100%">' + 
          canvas.map(row => row.join('')).join('\n') + 
          '</pre>';
      }
      
      frame++;
      animationRef.current = requestAnimationFrame(updateCanvas);
    }
    
    updateCanvas();
    
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed]);

  return (
    <div 
      className="ascii-line-animation fixed left-0 right-0 pointer-events-none z-10" 
      ref={canvasRef} 
      style={{
        top: '64px', // Fixed below the header (header height)
        opacity: opacity,
        transition: 'opacity 0.3s ease'
      }}
    ></div>
  );
};

export default AsciiAnimation;
