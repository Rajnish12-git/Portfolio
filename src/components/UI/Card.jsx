import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'default', // default, secondary, glass
  ...props
}) => {
  const baseStyle = "p-6 rounded-3xl border transition-all duration-300";
  
  const variants = {
    default: "bg-warm-light border-warm-beige/60 warm-shadow",
    secondary: "bg-warm-beige/30 border-warm-beige/70",
    glass: "glass-card border-warm-light/25 warm-shadow"
  };

  const combinedStyle = `${baseStyle} ${variants[variant]} ${className}`;

  if (hoverEffect) {
    return (
      <motion.div
        className={combinedStyle}
        whileHover={{ y: -6, boxShadow: "0 12px 30px -4px rgba(140, 122, 107, 0.15)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedStyle} {...props}>
      {children}
    </div>
  );
};

export default Card;
