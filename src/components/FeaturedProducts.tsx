
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight, Eye } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "One Piece T-Shirt",
    description: "Premium quality graphic t-shirt featuring One Piece characters",
    price: 549,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-one-piece-mugiwara-boys-premium-quality-graphic-t-shirt-featuring-one-piece-characters-men-anime-t-shirts-italaco-28366596628647_1024x1024@2x.jpg?v=1708691765",
    tag: "Popular"
  },
  {
    id: 3,
    name: "Naruto Akatsuki T-Shirt",
    description: "100% cotton Naruto Akatsuki Cloud design for anime fans",
    price: 599,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-naruto-akatsuki-cloud-100-cotton-naruto-akatsuki-cloud-design-for-anime-fans-men-anime-t-shirts-italaco-28599977582759_1024x1024@2x.jpg?v=1708692988",
    tag: "New Arrival"
  },
  {
    id: 4,
    name: "Attack on Titan T-Shirt",
    description: "High-quality Survey Corps emblem graphic tee",
    price: 599,
    image: "https://italaco.shop/cdn/shop/files/anime-merch-store-aot-survey-corps-high-quality-survey-corps-emblem-graphic-tee-men-anime-t-shirts-italaco-28599828332711_1024x1024@2x.jpg?v=1708692412",
    stock: 3
  },
];

// Quick View modal component
const QuickViewModal = ({ product, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 300 
            }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-card border border-italaco-primary/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square overflow-hidden relative">
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-italaco-primary/90 text-white text-xs py-1 px-2 rounded">
                      {product.tag}
                    </div>
                  )}
                  {product.stock && product.stock < 5 && (
                    <div className="absolute top-4 right-4 bg-red-500/90 text-white text-xs py-1 px-2 rounded">
                      Only {product.stock} left
                    </div>
                  )}
                </div>
                
                <div className="p-6 md:p-8 flex flex-col">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 rounded-full h-8 w-8 p-0"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                  
                  <div className="mb-auto">
                    <h2 className="text-2xl font-bold mb-2 tracking-tighter">{product.name}</h2>
                    <div className="text-italaco-primary text-2xl font-bold mb-4">₹{product.price}</div>
                    <p className="text-foreground/80 mb-6">{product.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider text-foreground/60 mb-2">Size</h4>
                        <div className="flex gap-2">
                          {["S", "M", "L", "XL"].map((size) => (
                            <Button
                              key={size}
                              variant="outline"
                              className="h-10 w-10 rounded p-0 text-sm"
                            >
                              {size}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-italaco-primary/5 border border-italaco-primary/20 p-3 rounded-lg mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-italaco-primary">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free shipping on orders above ₹999</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-4">
                    <Button
                      size="lg"
                      className="bg-italaco-primary hover:bg-italaco-primary/90 text-white col-span-4 relative overflow-hidden group"
                    >
                      <span className="relative z-10">Add to Cart</span>
                      <ShoppingCart className="relative z-10 ml-2 h-4 w-4" />
                      <span className="absolute inset-0 bg-gradient-to-r from-italaco-primary to-italaco-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-italaco-primary/30"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProductCard = ({ product, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showQuickView, setShowQuickView] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  
  return (
    <>
      <QuickViewModal 
        product={product} 
        isOpen={showQuickView} 
        onClose={() => setShowQuickView(false)} 
      />
      
      <motion.div 
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
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
          {/* Ambient hover effect - enhanced */}
          <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0`}
            style={{
              background: isHovered 
                ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(110, 89, 165, 0.3) 0%, rgba(0, 0, 0, 0) 70%)`
                : 'none',
            }}
          />
          
          {/* Product image with hover effect */}
          <div className="aspect-[4/5] overflow-hidden relative">
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-700"/>
            
            {/* Quick view button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="secondary"
                size="sm"
                className="bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white border border-white/20"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQuickView(true);
                }}
              >
                <Eye className="h-4 w-4 mr-1" />
                Quick View
              </Button>
            </div>
            
            {/* Product tag */}
            {product.tag && (
              <div className="absolute top-3 left-3 bg-italaco-primary/90 text-white text-xs py-1 px-2 rounded">
                {product.tag}
              </div>
            )}
            
            {/* Low stock indicator */}
            {product.stock && product.stock < 5 && (
              <div className="absolute top-3 right-3 bg-red-500/90 text-white text-xs py-1 px-2 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Only {product.stock} left
              </div>
            )}
            
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
          
          {/* Corner accent */}
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-italaco-primary/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>
        </Card>
      </motion.div>
    </>
  );
};

const FeaturedProducts = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, amount: 0.3 });
  
  return (
    <section className="py-32 relative">
      {/* Background elements */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-italaco-primary/10 rounded-full filter blur-[100px] opacity-70" />
      <div className="absolute top-20 right-10 w-60 h-60 bg-italaco-accent/5 rounded-full filter blur-[80px] opacity-60" />
      
      {/* Tech grid lines - subtle */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full relative">
          {Array(5).fill(0).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px bg-italaco-primary w-full" 
              style={{ top: `${i * 25}%` }}
            />
          ))}
          {Array(5).fill(0).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px bg-italaco-primary h-full" 
              style={{ left: `${i * 25}%` }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-px bg-italaco-primary"></div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-italaco-primary">
                Limited Collection
              </h2>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mb-6 font-mono tracking-tighter">
              Anime Collection
            </h3>
            <p className="text-foreground/70 text-lg">
              Premium anime-inspired t-shirts featuring your favorite characters with exceptional quality and design.
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            className="group text-italaco-primary border border-italaco-primary/20 hover:bg-italaco-primary/5 backdrop-blur-sm"
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
