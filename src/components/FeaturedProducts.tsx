
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

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
          <span className="text-lg font-bold text-italaco-primary">₹{product.price}</span>
          
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
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Anime Collection</h2>
            <p className="text-foreground/70 max-w-2xl">
              Premium anime-inspired t-shirts featuring your favorite characters with exceptional quality and design.
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
