
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CheckoutSuccess = () => {
  const navigate = useNavigate();
  
  // This page would typically receive order information from URL parameters
  // or from a state management system after a successful checkout
  
  return (
    <div className="container max-w-md mx-auto px-4 py-24 flex items-center justify-center min-h-screen">
      <Card className="w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <CardTitle className="text-2xl">Order Successful!</CardTitle>
          <CardDescription>
            Thank you for your purchase
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Your order has been placed and is being processed. You will receive an email
            confirmation shortly.
          </p>
          <p className="text-sm text-muted-foreground">
            Order reference: #ITALACO-{Date.now().toString().slice(-6)}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button onClick={() => navigate("/orders")} className="w-full">
            View Your Orders
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate("/products")} 
            className="w-full"
          >
            Continue Shopping
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CheckoutSuccess;
