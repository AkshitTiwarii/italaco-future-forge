
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-foreground inline-block">
              <span className="text-italaco-primary font-extrabold">ITALACO</span>
            </Link>
            <p className="text-foreground/70 text-sm max-w-xs">
              Pushing the boundaries of fashion with innovative materials and
              future-forward designs since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-italaco-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-italaco-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-italaco-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-italaco-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collections/all" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/collections/jackets" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Jackets
                </Link>
              </li>
              <li>
                <Link to="/collections/shirts" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Shirts
                </Link>
              </li>
              <li>
                <Link to="/collections/footwear" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Footwear
                </Link>
              </li>
              <li>
                <Link to="/collections/accessories" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Our Technology
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/70 hover:text-italaco-primary transition-colors text-sm flex items-center group">
                  <ArrowRight className="h-3 w-0 opacity-0 group-hover:w-3 group-hover:opacity-100 transition-all" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} ITALACO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-foreground/60 hover:text-italaco-primary text-sm">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-foreground/60 hover:text-italaco-primary text-sm">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="text-foreground/60 hover:text-italaco-primary text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(110, 89, 165, 0.5) 1px, transparent 1px), 
                           linear-gradient(to bottom, rgba(110, 89, 165, 0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px' 
        }}
      ></div>
    </footer>
  );
};

export default Footer;
