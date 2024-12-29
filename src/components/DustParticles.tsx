import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

const DustParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle(particles, canvas);
    }

    function createParticle(particles: Particle[], canvas: HTMLCanvasElement) {
      const size = Math.random() * 3 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + size,
        size,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: -Math.random() * 1 - 0.5, // Negative for upward movement
        opacity: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    function drawParticle(ctx: CanvasRenderingContext2D, particle: Particle) {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      // Create a gradient for each particle
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
      gradient.addColorStop(0, `rgba(255, 140, 50, ${particle.opacity})`);
      gradient.addColorStop(1, `rgba(255, 80, 20, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Add slight horizontal drift based on height
        particle.x += Math.sin(particle.y * 0.01) * 0.1;
        
        // Gradually fade out as particles rise
        particle.opacity -= 0.001;
        
        // Remove particles that are out of bounds or fully transparent
        if (particle.y < -particle.size || particle.opacity <= 0) {
          particles.splice(index, 1);
          createParticle(particles, canvas);
        }
        
        drawParticle(ctx, particle);
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
};

export default DustParticles;