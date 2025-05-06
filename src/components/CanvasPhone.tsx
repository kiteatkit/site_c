import React, { useRef, useEffect } from "react";
import { CanvasElementProps } from "./CanvasElementProps.type";

const CanvasPhone: React.FC<CanvasElementProps> = ({
  width = 60,
  height = 100,
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
      // Более плавная и медленная волна
      const wave = (
        x: number,
        phase: number,
        amp: number = 2.5,
        freq: number = 0.1
      ) => Math.sin((x + frame * 1.1) * freq + phase) * amp;

      // Корпус телефона с волной
      ctx.save();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#268bd2";
      ctx.fillStyle = "#fdf6e3";
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = 10 + (width - 20) * t;
        const y = 5 + wave(x, 0, 1.5, 0.09);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x =
          width -
          5 +
          wave(height - 5 - (height - 10) * t, Math.PI / 2, 1.5, 0.09);
        const y = 5 + (height - 10) * t + wave(x, Math.PI / 2, 1.5, 0.09);
        ctx.lineTo(x, y);
      }
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = width - 10 - (width - 20) * t;
        const y = height - 5 + wave(x, Math.PI, 1.5, 0.09);
        ctx.lineTo(x, y);
      }
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = 5 + wave(5 + (height - 10) * t, (3 * Math.PI) / 2, 1.5, 0.09);
        const y =
          height -
          5 -
          (height - 10) * t +
          wave(x, (3 * Math.PI) / 2, 1.5, 0.09);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Экран с волной
      ctx.save();
      ctx.fillStyle = "#e1e8e6";
      ctx.strokeStyle = "#93a1a1";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = 15 + (width - 30) * t;
        const y = 18 + wave(x, 0.5, 1, 0.13);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x =
          width - 11 + wave(height - 22 - (height - 40) * t, 1, 1, 0.13);
        const y = 22 + (height - 40) * t + wave(x, 1, 1, 0.13);
        ctx.lineTo(x, y);
      }
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = width - 15 - (width - 30) * t;
        const y = height - 14 + wave(x, 2, 1, 0.13);
        ctx.lineTo(x, y);
      }
      for (let i = 0; i <= 100; i++) {
        const t = i / 100;
        const x = 11 + wave(11 + (height - 40) * t, 2.5, 1, 0.13);
        const y = height - 22 - (height - 40) * t + wave(x, 2.5, 1, 0.13);
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Динамик
      ctx.save();
      ctx.fillStyle = "#93a1a1";
      ctx.beginPath();
      ctx.roundRect(width / 2 - 10, 10 + wave(frame, 0.7, 0.6, 0.07), 20, 4, 2);
      ctx.fill();
      ctx.restore();

      // Кнопка Home
      ctx.save();
      ctx.strokeStyle = "#93a1a1";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(
        width / 2,
        height - 12 + wave(frame, 1.2, 0.6, 0.07),
        4,
        0,
        2 * Math.PI
      );
      ctx.stroke();
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
        borderRadius: 12,
      }}
    />
  );
};

export default CanvasPhone;
