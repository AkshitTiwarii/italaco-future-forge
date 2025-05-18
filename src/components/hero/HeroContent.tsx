
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { itemVariants } from "./animationVariants";

interface HeroContentProps {
  scrollYProgress: MotionValue<number>;
}

const HeroContent = ({ scrollYProgress }: HeroContentProps) => {
  // Improved content animation with standard easing
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleScrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      className="container mx-auto px-4 pt-20 z-20 relative"
      style={{
        y: contentY,
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
      
      {/* Scroll indicator with improved animation */}
      <motion.div 
        variants={itemVariants}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-foreground/50 hover:text-italaco-primary hover:bg-transparent flex flex-col gap-2 group"
          onClick={handleScrollToNextSection}
        >
          <span className="text-xs uppercase tracking-widest group-hover:text-italaco-primary transition-colors">Discover</span>
          <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-italaco-primary transition-colors" />
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
