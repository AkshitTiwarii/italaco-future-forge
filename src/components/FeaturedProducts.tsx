
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

// Sample product data - would come from API/CMS in real implementation
const products = [
  {
    id: 1,
    name: "Quantum Jacket",
    description: "Weather-adaptive smart fabric with thermoregulation",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Nebula Shirt",
    description: "Ultra-breathable with electromagnetic shielding",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Gravity Boots",
    description: "Impact-absorbing soles with kinetic energy recovery",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Pulse Backpack",
    description: "Solar-powered with inductive charging compartments",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image with hover effect */}
      <div className="aspect-square overflow-hidden relative">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Product details */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{product.name}</h3>
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-italaco-primary">${product.price}</span>
          
          <Button size="sm" className="bg-italaco-primary hover:bg-italaco-primary/90 text-white">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Glowing border effect on hover */}
      <div 
        className={`absolute inset-0 border-2 border-italaco-primary/0 rounded-lg transition-all duration-500 ${
          isHovered ? "border-italaco-primary/60 shadow-[0_0_15px_rgba(110,89,165,0.5)]" : ""
        }`}
      ></div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Products</h2>
            <p className="text-foreground/70 max-w-2xl">
              Cutting-edge designs engineered for performance and styled for the future.
            </p>
          </div>
          <Button variant="link" className="text-italaco-primary flex items-center group mt-4 md:mt-0">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
