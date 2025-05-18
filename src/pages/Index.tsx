
import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedTechnology from "@/components/FeaturedTechnology";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Remove featuredTechnologyRef as it's no longer needed for the button
  // const featuredTechnologyRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    // For SEO and accessibility
    document.title = "ITALACO | Future of Fashion";

    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Remove the scrollToFeaturedTechnology function
  // const scrollToFeaturedTechnology = () => {
  //   featuredTechnologyRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  // New function to navigate to the landing page
  const navigateToLandingAbout = () => {
    navigate('/landing');
  };

  return (
    <>
      <Helmet>
        <title>ITALACO | Future of Fashion Technology & Sustainable Apparel</title>
        <meta name="description" content="Discover ITALACO's cutting-edge fashion with innovative materials and futuristic designs. Premium anime-inspired apparel with sustainable technology." />
        <meta name="keywords" content="fashion technology, sustainable apparel, futuristic clothing, anime-inspired fashion, ITALACO, premium fashion, sustainable materials" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://italaco.com/" />
        <meta property="og:title" content="ITALACO | Future of Fashion Technology" />
        <meta property="og:description" content="Discover ITALACO's cutting-edge fashion with innovative materials and futuristic designs. Premium anime-inspired apparel with sustainable technology." />
        <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://italaco.com/" />
        <meta name="twitter:title" content="ITALACO | Future of Fashion Technology" />
        <meta name="twitter:description" content="Discover ITALACO's cutting-edge fashion with innovative materials and futuristic designs. Premium anime-inspired apparel with sustainable technology." />
        <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://italaco.com/" />

        {/* Additional SEO metadata */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ITALACO Design Team" />
      </Helmet>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-background z-50 flex items-center justify-center"
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="text-6xl font-bold text-italaco-primary"
                animate={{ 
                  textShadow: ["0 0 5px rgba(110, 89, 165, 0.3)", "0 0 20px rgba(110, 89, 165, 0.7)", "0 0 5px rgba(110, 89, 165, 0.3)"] 
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
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
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">
              {/* Pass the new navigation function to Hero */}
              <Hero onAboutTechClick={navigateToLandingAbout} />
              <FeaturedProducts />
              {/* Keep FeaturedTechnology, but the ref is no longer used by the button */}
              <FeaturedTechnology /* ref={featuredTechnologyRef} */ />
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
