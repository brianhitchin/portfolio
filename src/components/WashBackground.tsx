"use client";

import { useEffect, useRef } from "react";

type Blob = {
  color: string;
  radius: number;
  alpha: number;
  speedX: number;
  speedY: number;
  posX: number;
  posY: number;
  phase: number;
  drift: number;
};

const BLOBS: Blob[] = [
  { color: "179,57,26", radius: 0.6, alpha: 0.62, speedX: 0.34, speedY: 0.23, posX: 0.22, posY: 0.3, phase: 0, drift: 0.3 },
  { color: "196,120,40", radius: 0.52, alpha: 0.55, speedX: 0.26, speedY: 0.38, posX: 0.74, posY: 0.24, phase: 1.9, drift: 0.26 },
  { color: "124,74,44", radius: 0.68, alpha: 0.44, speedX: 0.19, speedY: 0.29, posX: 0.5, posY: 0.78, phase: 3.4, drift: 0.34 },
  { color: "206,164,104", radius: 0.78, alpha: 0.66, speedX: 0.41, speedY: 0.16, posX: 0.18, posY: 0.82, phase: 5.1, drift: 0.22 },
  { color: "160,72,44", radius: 0.46, alpha: 0.4, speedX: 0.29, speedY: 0.44, posX: 0.88, posY: 0.66, phase: 2.6, drift: 0.38 },
];

// Internal buffer is deliberately tiny — the heavy CSS blur smooths it into a
// soft wash, so a low-res canvas costs far less to redraw every frame.
const BUFFER_W = 320;
const BUFFER_H = 200;

export function WashBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    canvas.width = BUFFER_W;
    canvas.height = BUFFER_H;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let rafId = 0;
    let startTime: number | null = null;

    function draw(now: number) {
      if (startTime === null) startTime = now;
      const time = reduceMotion ? 0 : (now - startTime) / 1000;

      ctx!.globalCompositeOperation = "source-over";
      ctx!.fillStyle = "#f6f2e9";
      ctx!.fillRect(0, 0, BUFFER_W, BUFFER_H);
      ctx!.globalCompositeOperation = "multiply";

      for (const b of BLOBS) {
        const x = (b.posX + b.drift * Math.sin(time * b.speedX + b.phase)) * BUFFER_W;
        const y = (b.posY + b.drift * 0.8 * Math.cos(time * b.speedY + b.phase * 1.3)) * BUFFER_H;
        const radius = b.radius * BUFFER_H * (1 + 0.26 * Math.sin(time * 0.22 + b.phase));

        const gradient = ctx!.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${b.color},${b.alpha})`);
        gradient.addColorStop(0.55, `rgba(${b.color},${b.alpha * 0.32})`);
        gradient.addColorStop(1, `rgba(${b.color},0)`);

        ctx!.fillStyle = gradient;
        ctx!.beginPath();
        ctx!.arc(x, y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!reduceMotion) rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{ filter: "blur(38px) saturate(1.15) contrast(1.06)" }}
    />
  );
}

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-35 mix-blend-multiply"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMyIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIiBmaWx0ZXI9InVybCgjbikiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')",
      }}
    />
  );
}
