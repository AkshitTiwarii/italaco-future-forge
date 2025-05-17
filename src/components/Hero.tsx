
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-italaco-dark via-background to-italaco-dark z-0"></div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(110, 89, 165, 0.1) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(110, 89, 165, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col items-center text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-italaco-primary text-glow">Future</span> of Fashion
            </h1>
          </div>
          
          <div
            className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Discover the next generation of innovative design and sustainable technology. 
              Our collections redefine what's possible in modern apparel.
            </p>
          </div>
          
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="bg-italaco-primary hover:bg-italaco-primary/90 text-white px-8 rounded-md group"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-italaco-primary/30 text-foreground hover:bg-italaco-primary/20 rounded-md"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated circle decoration */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-italaco-primary/20 filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full bg-italaco-accent/10 filter blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

export default Hero;
