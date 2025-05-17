
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedTechnology from "@/components/FeaturedTechnology";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // For SEO and accessibility
    document.title = "ITALACO | Future of Fashion";
    
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="text-6xl font-bold text-italaco-primary"
                animate={{ 
                  textShadow: ["0 0 5px rgba(110, 89, 165, 0.3)", "0 0 20px rgba(110, 89, 165, 0.7)", "0 0 5px rgba(110, 89, 165, 0.3)"] 
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                ITALACO
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">
              <Hero />
              <FeaturedProducts />
              <FeaturedTechnology />
              <Newsletter />
            </main>
            <Footer />
            <FloatingActions />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
