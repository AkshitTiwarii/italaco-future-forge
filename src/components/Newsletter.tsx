
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-20 relative">
      {/* Background with grid */}
      <div 
        className="absolute inset-0 bg-secondary/50"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(110, 89, 165, 0.05) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(110, 89, 165, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px' 
        }}
      ></div>
      
      {/* Glowing circle effect */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-italaco-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-italaco-primary/5 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated on <span className="text-italaco-primary">Future Releases</span>
          </h2>
          <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, 
            exclusive offers, and cutting-edge innovations in sustainable fashion.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background border-italaco-primary/30 focus:border-italaco-primary focus:ring-italaco-primary/20 h-12 pl-4 pr-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="bg-italaco-primary hover:bg-italaco-primary/90 text-white h-12 px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-foreground/60 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
