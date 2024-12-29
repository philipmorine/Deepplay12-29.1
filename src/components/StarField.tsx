import React, { useEffect, useRef } from 'react';
import { createStar } from './sky/Star';
import { constellations } from './sky/Constellation';
import { createSkyGradient } from './sky/SkyGradient';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const stars = Array.from({ length: 400 }, () => createStar(canvas.width, canvas.height));
    
    const drawSky = () => {
      ctx.fillStyle = createSkyGradient(ctx, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const drawStars = (time: number) => {
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.phase);
        const alpha = star.brightness * (0.5 + 0.5 * twinkle);
        
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const drawConstellations = () => {
      constellations.forEach(points => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        points.forEach((point, i) => {
          if (i === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      });
    };

    const animate = (time: number) => {
      drawSky();
      drawConstellations();
      drawStars(time / 1000);
      requestAnimationFrame(animate);
    };

    animate(0);

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default StarField;