
// Define standardized easing curve to use throughout animations
export const standardEasing = [0.22, 1, 0.36, 1];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: "easeInOut", // Use named easing instead of array
      duration: 0.8
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeInOut" // Use named easing instead of array
    } 
  }
};
