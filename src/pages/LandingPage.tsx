
import React, { useRef } from "react";
import { motion /* Removed useScroll, useTransform */ } from "framer-motion"; // Removed useScroll and useTransform
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
  // Removed splineRef
  // const splineRef = useRef<HTMLDivElement>(null); // Ref for the spline container

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Removed Scroll animation for the spline iframe
  // const { scrollYProgress } = useScroll({
  //   target: splineRef,
  //   // Change offset to [0, 1]
  //   offset: [0, 1], // Track scroll from target start entering to target end leaving viewport
  // });

  // Removed Use transform with the new scrollYProgress range
  // Adjust the parallax range if needed based on the new offset
  // const parallaxY = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]); // Simple vertical parallax

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
        <Hero onAboutTechClick={() => scrollToSection(aboutRef)} />

        {/* Removed Spline Iframe Section with Animation */}
        {/*
        <motion.div
          ref={splineRef} // Attach the ref
          style={{ y: parallaxY }} // Apply the parallax effect
          className="relative z-10 w-full h-[600px] my-20" // Adjust height as needed
        >
          <iframe
            src='https://my.spline.design/3dpathsfactoryletterscopy-YuxKBPyyOAibk5CV0uYDtj7N/'
            frameBorder='0'
            width='100%'
            height='100%'
            className="absolute inset-0" // Make iframe fill the container
          ></iframe>
        </motion.div>
        */}

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
