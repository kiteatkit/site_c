import React, { useRef, useEffect } from "react";
import { CanvasElementProps } from "./CanvasElementProps.type";

const CanvasWave: React.FC<CanvasElementProps> = ({
  width = 120,
  height = 60,
  color = "#268bd2",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Retina support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    let frame = 0;
    let animationId: number;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const y =
          height / 2 +
          Math.sin((x / width) * 4 * Math.PI + frame * 0.05) * 10 +
          Math.sin((x / width) * 8 * Math.PI + frame * 0.03) * 5;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
      frame++;
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [width, height, color]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{
        display: "block",
        borderRadius: 8,
      }}
    />
  );
};

export default CanvasWave;
