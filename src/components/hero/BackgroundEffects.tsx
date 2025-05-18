
import React from "react";
import { motion, MotionValue } from "framer-motion";

interface BackgroundEffectsProps {
  mousePosition: { x: number, y: number };
  parallaxY: MotionValue<string>;
  opacity: MotionValue<number>;
}

const BackgroundEffects = ({ mousePosition, parallaxY, opacity }: BackgroundEffectsProps) => {
  return (
    <>
      {/* Dark background with grid overlay */}
      <div className="absolute inset-0 bg-background/95 z-0">
        <motion.div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(110, 89, 165, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(110, 89, 165, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            y: parallaxY
          }}
        />
      </div>
      
      {/* Moving gradient effect */}
      <motion.div 
        className="absolute inset-0 opacity-50 z-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 50}% ${50 + mousePosition.y * 30}%, 
                     rgba(110, 89, 165, 0.25) 0%, 
                     rgba(0, 0, 0, 0) 70%)`,
          opacity: opacity
        }}
      />
      
      {/* Ambient orbs - enhanced */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-italaco-primary/10 filter blur-[120px]"
        style={{
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{ type: "spring", stiffness: 8, damping: 15 }}
      />
      <motion.div 
        className="absolute right-[10%] top-[30%] w-[500px] h-[500px] rounded-full bg-italaco-accent/10 filter blur-[100px]"
        style={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
        transition={{ type: "spring", stiffness: 6, damping: 12 }}
      />
      
      {/* Futuristic grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full relative">
          {Array(10).fill(0).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px bg-gradient-to-r from-transparent via-italaco-primary/50 to-transparent w-full" 
              style={{ top: `${i * 10}%` }}
            />
          ))}
          {Array(10).fill(0).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px bg-gradient-to-b from-transparent via-italaco-primary/50 to-transparent h-full" 
              style={{ left: `${i * 10}%` }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BackgroundEffects;
