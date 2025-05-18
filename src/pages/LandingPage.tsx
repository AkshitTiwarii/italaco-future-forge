
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/landing/FeatureCards";
import AboutSection from "@/components/landing/AboutSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  // Refs for scroll navigation
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Italaco Future Forge | Revolutionary Tech Solutions</title>
        <meta name="description" content="Italaco Future Forge - Pioneering the future of technology with innovative solutions and cutting-edge research." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" />
      </Helmet>

      {/* Custom cursor for desktop */}
      <CustomCursor />

      <main className="bg-background min-h-screen overflow-hidden">
        {/* Hero Section */}
        <Hero />
        
        {/* Feature Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 py-20 px-4 sm:px-6"
        >
          <FeatureCards />
        </motion.div>
        
        {/* About/Services Section */}
        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 py-20 px-4 sm:px-6"
        >
          <AboutSection />
        </motion.div>
        
        {/* Contact Form Section */}
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 py-20 px-4 sm:px-6 mb-10"
        >
          <ContactSection />
        </motion.div>
        
        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default LandingPage;
