
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const FloatingActions = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  
  const cartItemCount = cart?.items.length || 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="bg-italaco-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-italaco-accent transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-white/10 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Search products"
      >
        <Search size={20} />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-italaco-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative"
        aria-label="View cart"
        onClick={() => navigate("/cart")}
      >
        <ShoppingCart size={20} />
        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingActions;
