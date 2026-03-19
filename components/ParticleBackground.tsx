"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const TOTAL = 15;
    const dots: Dot[] = [];
    let mouseX = 0;
    let animationId: number;

    function touchHandler(e: MouseEvent | TouchEvent) {
      const clientX =
        "clientX" in e ? e.clientX : e.touches[0]?.clientX ?? 0;
      mouseX = clientX / window.innerWidth;
    }

    function handleResize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener("mousemove", touchHandler);
    window.addEventListener("touchmove", touchHandler);
    window.addEventListener("resize", handleResize);

    class Dot {
      x = 0;
      y = 0;
      radius = 0;
      opacity = 0;
      xSpeed = 0;
      ySpeed = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 2 - canvas.height;
        this.radius = 2 + Math.random() * 2;
        this.opacity = 0.08 + Math.random() * 0.07;
        this.xSpeed = 0.6 + Math.random() * 1;
        this.ySpeed = 0.4 + Math.random() * 0.6;
      }

      draw() {
        if (!canvas || !ctx) return;
        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset();
        }
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#4A7C9B";
        ctx.fill();
      }

      animate() {
        this.x += this.xSpeed + mouseX * 2;
        this.y += this.ySpeed + mouseX * 1;
        this.draw();
      }
    }

    for (let i = 0; i < TOTAL; i++) {
      dots.push(new Dot());
    }

    function render() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => dot.animate());
      animationId = requestAnimationFrame(render);
    }
    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", touchHandler);
      window.removeEventListener("touchmove", touchHandler);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"
    />
  );
}
