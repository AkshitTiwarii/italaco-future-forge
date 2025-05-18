
import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/use-toast";

export interface CartItem {
  id?: string;
  product_id: string;
  product_name: string;
  price: number;
  quantity: number;
  image_url?: string;
}

interface Cart {
  id: string;
  items: CartItem[];
  total: number;
}

interface CartContextType {
  cart: Cart | null;
  isLoading: boolean;
  addToCart: (item: CartItem) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  // Fetch or create cart when user changes
  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setCart(null);
        return;
      }

      setIsLoading(true);
      
      // Try to find existing cart
      const { data: existingCart } = await supabase
        .from("carts")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (existingCart) {
        // Get cart items
        const { data: cartItems } = await supabase
          .from("cart_items")
          .select("*")
          .eq("cart_id", existingCart.id);

        setCart({
          id: existingCart.id,
          items: cartItems || [],
          total: (cartItems || []).reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
      } else {
        // Create new cart if one doesn't exist
        const { data: newCart, error } = await supabase
          .from("carts")
          .insert({ user_id: user.id })
          .select()
          .single();

        if (error) {
          toast({
            title: "Error creating cart",
            description: error.message,
            variant: "destructive"
          });
        } else {
          setCart({
            id: newCart.id,
            items: [],
            total: 0
          });
        }
      }
      
      setIsLoading(false);
    };

    fetchCart();
  }, [user]);

  const addToCart = async (item: CartItem) => {
    if (!user || !cart) return;
    
    setIsLoading(true);
    
    try {
      // Check if item already exists in cart
      const existingItemIndex = cart.items.findIndex(i => i.product_id === item.product_id);
      
      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedQuantity = cart.items[existingItemIndex].quantity + item.quantity;
        await updateQuantity(item.product_id, updatedQuantity);
      } else {
        // Add new item
        const { error } = await supabase
          .from("cart_items")
          .insert({
            cart_id: cart.id,
            product_id: item.product_id,
            product_name: item.product_name,
            price: item.price,
            quantity: item.quantity,
            image_url: item.image_url
          });
          
        if (error) throw error;
        
        // Update local cart state
        const updatedItems = [...cart.items, item];
        setCart({
          ...cart,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        });
        
        toast({
          title: "Added to cart",
          description: `${item.product_name} has been added to your cart.`
        });
      }
    } catch (error: any) {
      toast({
        title: "Error adding to cart",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const updateQuantity = async (productId: string, quantity: number) => {
    if (!user || !cart) return;
    
    setIsLoading(true);
    
    try {
      // Find item in cart
      const itemIndex = cart.items.findIndex(item => item.product_id === productId);
      if (itemIndex === -1) return;
      
      const item = cart.items[itemIndex];
      
      // Update in database
      const { error } = await supabase
        .from("cart_items")
        .update({ quantity })
        .eq("cart_id", cart.id)
        .eq("product_id", productId);
        
      if (error) throw error;
      
      // Update local state
      const updatedItems = [...cart.items];
      updatedItems[itemIndex] = { ...item, quantity };
      
      setCart({
        ...cart,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      });
    } catch (error: any) {
      toast({
        title: "Error updating cart",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const removeFromCart = async (productId: string) => {
    if (!user || !cart) return;
    
    setIsLoading(true);
    
    try {
      // Delete from database
      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("cart_id", cart.id)
        .eq("product_id", productId);
        
      if (error) throw error;
      
      // Update local state
      const updatedItems = cart.items.filter(item => item.product_id !== productId);
      setCart({
        ...cart,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      });
      
      toast({
        title: "Removed from cart",
        description: "Item has been removed from your cart."
      });
    } catch (error: any) {
      toast({
        title: "Error removing item",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const clearCart = async () => {
    if (!user || !cart) return;
    
    setIsLoading(true);
    
    try {
      // Delete all items from database
      const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("cart_id", cart.id);
        
      if (error) throw error;
      
      // Update local state
      setCart({
        ...cart,
        items: [],
        total: 0
      });
      
      toast({
        title: "Cart cleared",
        description: "All items have been removed from your cart."
      });
    } catch (error: any) {
      toast({
        title: "Error clearing cart",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isLoading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
