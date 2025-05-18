
import React from "react";
import { motion } from "framer-motion";
import { Shield, Code, Layers } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-10 h-10 text-italaco-primary" />,
    title: "Secure Infrastructure",
    description: "Enterprise-grade security with advanced encryption and compliance protocols to protect your data."
  },
  {
    icon: <Code className="w-10 h-10 text-italaco-primary" />,
    title: "Intelligent Algorithms",
    description: "Cutting-edge AI models and machine learning algorithms that evolve with your business needs."
  },
  {
    icon: <Layers className="w-10 h-10 text-italaco-primary" />,
    title: "Scalable Architecture",
    description: "Future-proof infrastructure that grows with your company from startup to enterprise."
  }
];

const FeatureCards = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Revolutionary <span className="text-italaco-primary">Technology</span> Solutions
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-panel p-8 rounded-xl relative group overflow-hidden"
          >
            {/* Feature content */}
            <div className="relative z-10">
              {/* Icon container */}
              <div className="mb-5 p-3 bg-secondary/30 inline-block rounded-lg">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
            
            {/* Background glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-italaco-primary/20 to-italaco-accent/20 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
