
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Sample products data
const sampleProducts = [
  {
    id: "product-1",
    name: "Futuristic Jacket",
    price: 19999, // Price in cents
    description: "Cutting-edge design with smart temperature control",
    image: "https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: "product-2",
    name: "Reactive Shoes",
    price: 14999,
    description: "Self-adjusting footwear for optimal comfort",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    id: "product-3",
    name: "Smart Sunglasses",
    price: 9999,
    description: "Augmented reality display with UV protection",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
  },
  {
    id: "product-4",
    name: "Digital Backpack",
    price: 12999,
    description: "Solar-powered with integrated device charging",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
  },
  {
    id: "product-5",
    name: "Eco-Friendly T-Shirt",
    price: 3999,
    description: "Made from recycled ocean plastic",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
  },
  {
    id: "product-6",
    name: "Adaptive Pants",
    price: 8999,
    description: "Shape-shifting fabric adapts to your movements",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

const Products = () => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleAddToCart = (product: any) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    
    addToCart({
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      quantity: 1,
      image_url: product.image
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-2">Our Products</h1>
      <p className="text-muted-foreground mb-8">Explore our innovative fashion collection</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden flex flex-col h-full">
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="pt-6 flex-grow">
              <CardTitle className="mb-2">{product.name}</CardTitle>
              <p className="text-muted-foreground mb-2">{product.description}</p>
              <p className="text-lg font-bold">${(product.price / 100).toFixed(2)}</p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button 
                onClick={() => handleAddToCart(product)}
                className="w-full"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
