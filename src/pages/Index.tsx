
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import FeaturedTechnology from "@/components/FeaturedTechnology";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // For SEO and accessibility
    document.title = "ITALACO | Future of Fashion";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <FeaturedTechnology />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
