
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

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

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) - 0.5,
      y: (e.clientY / window.innerHeight) - 0.5
    });
  };
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16"
      onMouseMove={handleMouseMove}
    >
      {/* Dark background with grid overlay */}
      <div className="absolute inset-0 bg-background z-0">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(110, 89, 165, 0.1) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(110, 89, 165, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }}
        />
      </div>
      
      {/* Moving gradient effect */}
      <div 
        className="absolute inset-0 opacity-40 z-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 20}%, 
                     rgba(110, 89, 165, 0.15) 0%, 
                     rgba(0, 0, 0, 0) 60%)`,
        }}
      />
      
      {/* Ambient orbs */}
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-italaco-primary/10 filter blur-[100px]"
        style={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        transition={{ type: "spring", stiffness: 10, damping: 20 }}
      />
      <motion.div 
        className="absolute right-[10%] top-[30%] w-[300px] h-[300px] rounded-full bg-italaco-accent/5 filter blur-[80px]"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        transition={{ type: "spring", stiffness: 8, damping: 15 }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-italaco-primary/10 text-italaco-primary text-xs font-medium tracking-wider uppercase">
              The Future of Fashion
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tight leading-[1.1]"
          >
            <span className="inline-block">
              <span className="text-italaco-primary text-glow">ITALACO</span>
            </span>
            <span className="inline-block"> ANIME</span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-foreground/80 mb-10">
              Premium anime-inspired apparel designed with future-focused technology and sustainable materials. 
              Our collections redefine what's possible in modern fashion.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-italaco-primary hover:bg-italaco-primary/90 text-white px-8 py-7 rounded-md text-lg group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-italaco-primary/30 text-foreground hover:bg-italaco-primary/10 rounded-md py-7 text-lg"
            >
              About Technology
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-foreground/50 hover:text-italaco-primary hover:bg-transparent flex flex-col gap-2"
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
