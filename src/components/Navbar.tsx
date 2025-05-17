
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground flex items-center"
          >
            <span className="text-italaco-primary font-extrabold">ITALACO</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/collections"
              className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/products"
              className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-italaco-primary/20"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-italaco-primary/20"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-italaco-primary/20"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-italaco-primary rounded-full text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative hover:bg-italaco-primary/20"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 p-4 bg-card border-b border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/collections"
                className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/products"
                className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-foreground/80 hover:text-italaco-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-italaco-primary/20"
                >
                  <Search className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-italaco-primary/20"
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative hover:bg-italaco-primary/20"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-italaco-primary rounded-full text-xs flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
