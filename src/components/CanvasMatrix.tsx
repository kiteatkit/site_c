import React, { useRef, useEffect } from "react";
import { CanvasElementProps } from "./CanvasElementProps.type";

const MATRIX_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]|@#$%&*";

const CanvasMatrix: React.FC<CanvasElementProps> = ({
  width = 120,
  height = 60,
  color = "#268bd2",
  // @ts-expect-error bgColor is not used
  bgColor = "#fdf6e3",
  // @ts-expect-error charColor is not used
  charColor = "#073642",
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

    const fontSize = 20;
    const density = 0.5; // чем меньше, тем плотнее!
    const columns = Math.floor(width / (fontSize * density));
    const drops: number[] = Array(columns)
      .fill(0)
      .map(() => Math.random() * (height / fontSize));

    let animationId: number;

    function draw() {
      // Полупрозрачный фон для эффекта затухания
      ctx.fillStyle = bgColor + "E6"; // чуть прозрачный
      ctx.fillRect(0, 0, width, height);
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.fillStyle = color;
      for (let i = 0; i < columns; i++) {
        const char =
          MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);
        // Случайно сбрасываем "каплю"
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i] += 0.1 + Math.random() * 0.1;
        }
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [width, height, color, bgColor, charColor]);

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

export default CanvasMatrix;
