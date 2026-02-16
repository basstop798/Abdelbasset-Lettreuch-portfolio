import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];
    
    // Mouse state
    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Optimization: Throttle resize events
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Random velocity
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        // Mix of white and primary color (cyan)
        this.color = Math.random() > 0.6 ? 'rgba(6, 182, 212, 0.8)' : 'rgba(255, 255, 255, 0.5)';
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen edges
        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;
        
        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;
        
        // Mouse interaction (Gentle Repel)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            // Push away from mouse
            const pushX = Math.cos(angle) * force * 2;
            const pushY = Math.sin(angle) * force * 2;
            
            this.x -= pushX;
            this.y -= pushY;
        }

        this.draw();
      }
    }

    const initParticles = () => {
        particles = [];
        // Adjust density: Higher divisor = fewer particles
        const particleCount = Math.floor((width * height) / 12000); 
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    const connectParticles = () => {
        const maxDistance = 140; // Range for drawing lines
        
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    // Opacity based on distance
                    const opacity = 1 - (distance / maxDistance);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity * 0.15})`; // Subtle cyan lines
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(particle => particle.update());
        connectParticles();
        requestAnimationFrame(animate);
    }

    initParticles();
    const animationFrameId = requestAnimationFrame(animate);

    return () => {
        window.removeEventListener('resize', onResize);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0" 
      style={{ opacity: 1, background: 'transparent' }} 
    />
  );
};

export default Background;