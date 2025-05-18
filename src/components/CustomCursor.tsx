
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add custom-cursor class to html
    document.documentElement.classList.add('custom-cursor');
    
    // Show cursor after a small delay
    const timeout = setTimeout(() => setIsVisible(true), 1000);
    
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateCursorStyle = () => {
      // Check if hovering over clickable elements
      const target = document.elementFromPoint(position.x, position.y) as HTMLElement;
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        const isClickable = 
          computedStyle.cursor === 'pointer' || 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' ||
          target.getAttribute('role') === 'button';
        
        setIsPointer(isClickable);
      }
    };
    
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    
    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mouseover", updateCursorStyle);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // Mobile devices don't need custom cursor
    if ("ontouchstart" in window) {
      document.documentElement.classList.remove('custom-cursor');
      setIsVisible(false);
    }
    
    return () => {
      document.documentElement.classList.remove('custom-cursor');
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mouseover", updateCursorStyle);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearTimeout(timeout);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;
  
  return (
    <>
      <div 
        className="cursor-dot"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isActive ? 0.7 : 1})`,
          opacity: isVisible ? 1 : 0
        }}
      />
      <div 
        className="cursor-outline"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          width: isPointer ? '40px' : '30px',
          height: isPointer ? '40px' : '30px',
          opacity: isVisible ? (isActive ? 0.5 : 0.7) : 0,
          borderWidth: isActive ? '2px' : '1px'
        }}
      />
    </>
  );
};

export default CustomCursor;
