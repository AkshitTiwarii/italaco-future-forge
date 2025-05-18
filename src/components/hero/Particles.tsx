
import React, { useState, useEffect } from "react";

// Particle configuration
const particlesConfig = {
  count: 50,
  size: { min: 1, max: 3 },
  color: "#6E59A5",
  speed: { min: 0.1, max: 0.5 }
};

// Animated particle element
const Particle = ({ size, position, speed }: { size: number, position: { x: number, y: number }, speed: number }) => {
  const [pos, setPos] = useState(position);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPos(prev => ({
        x: prev.x,
        y: prev.y >= 100 ? 0 : prev.y + speed
      }));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div 
      className="absolute bg-italaco-primary/80 rounded-full pointer-events-none"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        opacity: Math.random() * 0.5 + 0.2,
        filter: `blur(${Math.random() + 0.5}px)`
      }}
    />
  );
};

// Generate particles
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
  const [particles] = useState(generateParticles);
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
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

export default Particles;
