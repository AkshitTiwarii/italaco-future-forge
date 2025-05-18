
import React, { useState, useEffect, useRef } from "react";

// Optimized particle configuration
const particlesConfig = {
  count: 40, // Reduced count for better performance
  size: { min: 1, max: 3 },
  color: "#6E59A5",
  speed: { min: 0.08, max: 0.4 } // Slightly slower for smoother movement
};

// Optimized animated particle element using requestAnimationFrame
const Particle = ({ size, position, speed }: { size: number, position: { x: number, y: number }, speed: number }) => {
  const [pos, setPos] = useState(position);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      setPos(prev => ({
        x: prev.x,
        y: prev.y >= 100 ? 0 : prev.y + speed * 0.5
      }));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [speed]); // Only recreate animation if speed changes

  return (
    <div 
      className="absolute bg-italaco-primary/80 rounded-full pointer-events-none will-change-transform"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        opacity: Math.random() * 0.5 + 0.2,
        filter: `blur(${Math.random() + 0.5}px)`,
        transform: 'translate3d(0,0,0)' // Hardware acceleration
      }}
    />
  );
};

// Generate particles with memoization
const generateParticles = () => {
  const particles = [];
  for (let i = 0; i < particlesConfig.count; i++) {
    particles.push({
      id: i,
      size: Math.random() * (particlesConfig.size.max - particlesConfig.size.min) + particlesConfig.size.min,
      position: { 
        x: Math.random() * 100, 
        y: Math.random() * 100 
      },
      speed: Math.random() * (particlesConfig.speed.max - particlesConfig.speed.min) + particlesConfig.speed.min
    });
  }
  return particles;
};

const Particles = () => {
  // Use useRef to memoize particles and prevent recreating them on each render
  const particlesRef = useRef(generateParticles());
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particlesRef.current.map((particle) => (
        <Particle
          key={particle.id}
          size={particle.size}
          position={particle.position}
          speed={particle.speed}
        />
      ))}
    </div>
  );
};

export default React.memo(Particles); // Memoize to prevent unnecessary re-renders
