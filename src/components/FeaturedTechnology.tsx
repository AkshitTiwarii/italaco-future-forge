
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedTechnology = () => {
  return (
    <section className="py-20 relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Revolutionary <span className="text-italaco-primary">Technology</span>
              </h2>
              
              <p className="text-foreground/80">
                Our garments combine cutting-edge materials science with intelligent 
                design principles. Each product is engineered to perform beyond 
                conventional limits while reducing environmental impact.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-italaco-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <span className="text-italaco-primary font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Adaptive Materials</h3>
                    <p className="text-foreground/70 text-sm">
                      Smart fabrics that adjust to body temperature and environmental conditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-italaco-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <span className="text-italaco-primary font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Integrated Tech</h3>
                    <p className="text-foreground/70 text-sm">
                      Seamlessly embedded sensors and connectivity features that enhance everyday life.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-italaco-primary/10 flex items-center justify-center shrink-0 mr-4">
                    <span className="text-italaco-primary font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Sustainable Production</h3>
                    <p className="text-foreground/70 text-sm">
                      Zero-waste manufacturing and biodegradable components for reduced ecological impact.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                className="bg-italaco-primary hover:bg-italaco-primary/90 text-white group"
              >
                Explore Technology
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 relative">
            {/* Main image */}
            <div className="rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced Technology Fabric" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-italaco-primary/30 to-transparent opacity-60"></div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-italaco-primary/20 backdrop-blur-sm rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex justify-end">
                  <div className="text-xs font-mono bg-background/30 backdrop-blur-sm text-white px-3 py-1 rounded">
                    SMART-FABRIC™
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stat card */}
            <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-lg shadow-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold">Performance</h4>
                <div className="w-4 h-4 rounded-full bg-italaco-primary"></div>
              </div>
              <div className="flex space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-1 flex-1 bg-italaco-primary rounded-full"></div>
                ))}
              </div>
              <p className="text-xs text-foreground/70">97% increase in durability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTechnology;
