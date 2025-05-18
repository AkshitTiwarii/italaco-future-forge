import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } }
};

// Particle configuration
const particlesConfig = {
  count: 50,
  size: { min: 1, max: 3 },
  color: "#6E59A5",
  speed: { min: 0.1, max: 0.5 }
};

// Animated particle element
const Particle = ({ size, position, speed }) => {
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

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles] = useState(generateParticles);
  const heroRef = useRef(null);
  
  // Parallax scroll effects - updated to use correct options
  const { scrollYProgress } = useScroll({
    target: heroRef,
    // Remove the offset property which is causing the type error
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const handleMouseMove = (e: React.MouseEvent) => {
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
      
      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 pt-20 z-20 relative"
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-italaco-primary/15 text-italaco-primary text-xs sm:text-sm font-medium tracking-wider uppercase backdrop-blur-md border border-italaco-primary/20">
              The Future of Fashion
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl xl:text-9xl font-extrabold mb-6 tracking-tighter leading-[0.9] font-mono"
          >
            <span className="inline-block">
              <span className="text-italaco-primary text-glow">ITALACO</span>
            </span>
            <span className="inline-block"> SHOP</span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-foreground/80 mb-10 font-light tracking-wide">
              Premium anime-inspired apparel designed with future-focused technology and sustainable materials. 
              Our collections redefine what's possible in modern fashion.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-italaco-primary hover:bg-italaco-primary/90 text-white px-8 py-7 rounded-md text-lg group relative overflow-hidden border border-italaco-primary/20"
            >
              <span className="relative z-10">Explore Collection</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-italaco-primary to-italaco-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-italaco-primary/30 text-foreground hover:bg-italaco-primary/10 rounded-md py-7 text-lg backdrop-blur-sm"
            >
              About Technology
            </Button>
          </motion.div>
        </div>
        
        {/* Tech specs grid */}
        <motion.div
          variants={itemVariants} 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-20 text-center"
        >
          {[
            { label: "Countries", value: "25+" },
            { label: "Materials", value: "Future-proof" },
            { label: "Designs", value: "100+" },
            { label: "Innovation", value: "∞" }
          ].map((stat, i) => (
            <div key={i} className="backdrop-blur-md border border-italaco-primary/10 bg-italaco-primary/5 p-4 rounded-lg">
              <div className="text-3xl font-bold text-italaco-primary mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-foreground/50 hover:text-italaco-primary hover:bg-transparent flex flex-col gap-2 group"
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
          >
            <span className="text-xs uppercase tracking-widest group-hover:text-italaco-primary transition-colors">Discover</span>
            <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-italaco-primary transition-colors" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
