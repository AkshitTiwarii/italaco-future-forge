
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

// For demonstration purposes, not using Stripe in this example
// In a real implementation, you would use Stripe or another payment processor

serve(async (req) => {
  try {
    const { cartItems, userId, amount } = await req.json();
    
    // Create Supabase client with the auth context of the function
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );
    
    // Get user
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
    
    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Create order in database
    const { data: order, error: orderError } = await supabaseClient
      .from('orders')
      .insert({
        user_id: userId,
        amount,
        status: 'completed',
        payment_intent_id: `demo-${Date.now()}` // In real app, use actual payment ID
      })
      .select()
      .single();
    
    if (orderError) {
      throw orderError;
    }
    
    // Create order items
    const orderItems = cartItems.map((item: any) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.product_name,
      price: item.price,
      quantity: item.quantity,
      image_url: item.image_url
    }));
    
    const { error: itemsError } = await supabaseClient
      .from('order_items')
      .insert(orderItems);
    
    if (itemsError) {
      throw itemsError;
    }
    
    // Clear cart items
    const { error: clearCartError } = await supabaseClient
      .from('cart_items')
      .delete()
      .eq('cart_id', cartItems[0].cart_id);
    
    if (clearCartError) {
      console.error('Failed to clear cart:', clearCartError);
    }
    
    return new Response(
      JSON.stringify({ 
        success: true,
        order_id: order.id
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
});
