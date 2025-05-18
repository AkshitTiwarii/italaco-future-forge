
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { loadStripe } from "@stripe/stripe-js";
import { supabase } from "@/integrations/supabase/client";

const Cart = () => {
  const { user, isLoading: authLoading } = useAuth();
  const { cart, isLoading: cartLoading, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);
  
  const handleCheckout = async () => {
    if (!user || !cart || cart.items.length === 0) return;
    
    try {
      // In a real application, this would redirect to a Stripe checkout
      toast({
        title: "Processing checkout",
        description: "Redirecting to payment gateway...",
      });
      
      // Simulate checkout process
      setTimeout(() => {
        toast({
          title: "Checkout completed",
          description: "Your order has been placed successfully!",
        });
      }, 2000);
      
      // In reality, you would create a payment intent with Stripe here
      // And redirect to the Stripe checkout page
      
    } catch (error: any) {
      toast({
        title: "Checkout failed",
        description: error.message || "An error occurred during checkout",
        variant: "destructive",
      });
    }
  };

  if (authLoading || cartLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-italaco-primary"></div>
      </div>
    );
  }
  
  return (
    <div className="container max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
      
      {!cart || cart.items.length === 0 ? (
        <Card className="text-center p-8">
          <CardContent className="pt-6 flex flex-col items-center">
            <ShoppingBag size={64} className="text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold">Your cart is empty</h2>
            <p className="text-muted-foreground mt-2">Start shopping to add items to your cart.</p>
          </CardContent>
          <CardFooter className="flex justify-center pt-4">
            <Button onClick={() => navigate("/products")}>Browse Products</Button>
          </CardFooter>
        </Card>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {cart.items.map((item) => (
              <Card key={item.product_id} className="overflow-hidden">
                <div className="flex items-center p-4">
                  {item.image_url && (
                    <div className="w-20 h-20 rounded overflow-hidden mr-4">
                      <img 
                        src={item.image_url} 
                        alt={item.product_name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.product_name}</h3>
                    <p className="text-muted-foreground text-sm">
                      ${(item.price / 100).toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => {
                          if (item.quantity > 1) {
                            updateQuantity(item.product_id, item.quantity - 1);
                          }
                        }}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => removeFromCart(item.product_id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash size={18} />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${(cart.total / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span>${(cart.total / 100).toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleCheckout} className="w-full">
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
};

export default Cart;
