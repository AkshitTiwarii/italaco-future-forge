
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="glass-panel rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-full min-h-[300px] overflow-hidden bg-gradient-to-br from-italaco-primary/20 to-italaco-accent/20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(110,89,165,0.5),rgba(0,0,0,0))]"></div>
            <motion.div
              className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-italaco-primary/10 rounded-lg border border-italaco-primary/30"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                ></motion.div>
              ))}
            </motion.div>
            <div className="absolute bottom-8 right-8 w-28 h-28 rounded-full bg-italaco-primary/30 blur-3xl"></div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="p-10 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Building the <span className="text-italaco-primary">Future</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Italaco Future Forge is a pioneering tech innovation lab that's redefining 
              what's possible in digital transformation, AI integration, and sustainable 
              technology. Our team of visionary engineers and designers work at the 
              intersection of imagination and possibility.
            </p>
            
            <div className="space-y-4 mb-8">
              {["Advanced Research", "Ethical Innovation", "Global Impact"].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-2 w-2 rounded-full bg-italaco-primary mr-3"></div>
                  <span className="text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <Button 
              variant="default" 
              size="lg"
              className="bg-italaco-primary hover:bg-italaco-primary/90 text-white w-fit group"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
