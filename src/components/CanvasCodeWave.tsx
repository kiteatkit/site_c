import React, { useRef, useEffect } from "react";
import { CanvasElementProps } from "./CanvasElementProps.type";
const codeSymbols = ["<", "/", ">", "{", "}", "=", ";", ":", "(", ")"];

const CanvasCodeWave: React.FC<CanvasElementProps> = ({
  width = 120,
  height = 40,
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
    const symbolCount = 7;
    const symbolSpacing = width / (symbolCount - 1);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // Волна
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#268bd2";
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        const y =
          height / 2 +
          Math.sin((x / width) * 3 * Math.PI + frame * 0.06) * 8 +
          Math.cos((x / width) * 6 * Math.PI + frame * 0.03) * 4;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Символы кода на волне
      ctx.save();
      ctx.font = `bold ${18}px monospace`;
      ctx.fillStyle = "#073642";
      for (let i = 0; i < symbolCount; i++) {
        const x = i * symbolSpacing;
        const y =
          height / 2 +
          Math.sin((x / width) * 3 * Math.PI + frame * 0.06) * 8 +
          Math.cos((x / width) * 6 * Math.PI + frame * 0.03) * 4;
        const symbol =
          codeSymbols[(i + Math.floor(frame / 10)) % codeSymbols.length];
        ctx.fillText(symbol, x - 6, y + 6);
      }
      ctx.restore();

      frame++;
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [width, height]);

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

export default CanvasCodeWave;
