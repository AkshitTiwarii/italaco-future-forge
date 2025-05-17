
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Updated product data with real Italaco anime shirts
const products = [
  {
    id: 1,
    name: "Demon Slayer Anime T-Shirt",
    description: "Breathable cotton blend with iconic Demon Slayer design",
    price: 599,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-demon-slayer-breathable-cotton-blend-with-iconic-demon-slayer-design-men-anime-t-shirts-italaco-28599852531879_1024x1024@2x.jpg?v=1708692487",
  },
  {
    id: 2,
    name: "One Piece T-Shirt",
    description: "Premium quality graphic t-shirt featuring One Piece characters",
    price: 549,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-one-piece-mugiwara-boys-premium-quality-graphic-t-shirt-featuring-one-piece-characters-men-anime-t-shirts-italaco-28366596628647_1024x1024@2x.jpg?v=1708691765",
  },
  {
    id: 3,
    name: "Naruto Akatsuki T-Shirt",
    description: "100% cotton Naruto Akatsuki Cloud design for anime fans",
    price: 599,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-naruto-akatsuki-cloud-100-cotton-naruto-akatsuki-cloud-design-for-anime-fans-men-anime-t-shirts-italaco-28599977582759_1024x1024@2x.jpg?v=1708692988",
  },
  {
    id: 4,
    name: "Attack on Titan T-Shirt",
    description: "High-quality Survey Corps emblem graphic tee",
    price: 599,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-aot-survey-corps-high-quality-survey-corps-emblem-graphic-tee-men-anime-t-shirts-italaco-28599828332711_1024x1024@2x.jpg?v=1708692412",
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group h-full"
    >
      <Card 
        className="overflow-hidden h-full bg-gradient-to-br from-background/90 to-background border-0 transition-all duration-500 relative"
        style={{
          boxShadow: isHovered ? `0 20px 40px rgba(110, 89, 165, 0.3)` : `0 10px 30px rgba(0, 0, 0, 0.1)`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Ambient hover effect */}
        <div 
          className={`absolute inset-0 bg-italaco-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
          style={{
            background: isHovered 
              ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(110, 89, 165, 0.2) 0%, rgba(0, 0, 0, 0) 60%)`
              : 'none',
            zIndex: 1
          }}
        />
        
        {/* Product image with hover effect */}
        <div className="aspect-[4/5] overflow-hidden relative">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-700"/>
          
          <div className="absolute inset-x-0 bottom-0 p-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
            <Button 
              className="w-full bg-italaco-primary hover:bg-italaco-primary/90 text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        {/* Product details */}
        <CardContent className="p-6 relative z-10">
          <h3 className="text-xl font-bold mb-2 tracking-tight group-hover:text-italaco-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2 group-hover:text-foreground/90 transition-colors">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-italaco-primary">₹{product.price}</span>
            
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="p-0 h-auto text-foreground/60 hover:text-italaco-primary hover:bg-transparent"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent align="end" className="bg-card/95 backdrop-blur-sm border-italaco-primary/20 w-auto">
                View Details
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardContent>
        
        {/* Border glow effect */}
        <div 
          className={`absolute inset-0 rounded-lg transition-all duration-700 ${
            isHovered ? "border-2 border-italaco-primary/30" : "border-0"
          }`}
        />
      </Card>
    </motion.div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-32 relative">
      {/* Background elements */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-italaco-primary/10 rounded-full filter blur-[80px] opacity-70" />
      <div className="absolute top-20 right-10 w-60 h-60 bg-italaco-accent/5 rounded-full filter blur-[60px] opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.2em] text-italaco-primary mb-4">
              Limited Collection
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Anime Collection
            </h3>
            <p className="text-foreground/70 text-lg">
              Premium anime-inspired t-shirts featuring your favorite characters with exceptional quality and design.
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            className="group text-italaco-primary border border-italaco-primary/20 hover:bg-italaco-primary/5"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
