
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "./hero/Particles";
import BackgroundEffects from "./hero/BackgroundEffects";
import HeroContent from "./hero/HeroContent";
import { containerVariants } from "./hero/animationVariants";

interface HeroProps {
  onAboutTechClick: () => void; // Define the prop type
}

const Hero = ({ onAboutTechClick }: HeroProps) => { // Accept the prop
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  // Improved parallax scroll effects with correct easing
  const { scrollYProgress } = useScroll({
    target: heroRef,
    // Remove the container property and offset since they're causing TypeScript issues
  });
  
  // Use transform without custom easing (framer-motion will handle smoothing)
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  // Use debounced or throttled mouse move handler for better performance
  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate normalized position more efficiently
    setMousePosition({
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5
    });
  };
  
  return (
    <motion.div 
      ref={heroRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic particle background */}
      <Particles />

      {/* Background effects including grid, gradients and orbs */}
      <BackgroundEffects 
        mousePosition={mousePosition} 
        parallaxY={parallaxY} 
        opacity={opacity} 
      />
      
      {/* Content */}
      <HeroContent scrollYProgress={scrollYProgress} onAboutTechClick={onAboutTechClick} /> {/* Pass the prop */}
    </motion.div>
  );
};

export default Hero;
