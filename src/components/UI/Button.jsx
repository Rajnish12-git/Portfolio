import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, outline, text
  className = '',
  href,
  target,
  rel,
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent-gold/40";
  
  const variants = {
    primary: "bg-warm-charcoal text-warm-light hover:bg-[#3e342c] shadow-sm hover:shadow-md",
    secondary: "bg-accent-gold text-warm-charcoal hover:bg-accent-goldDark shadow-sm hover:shadow-md",
    outline: "border border-warm-taupe/30 text-warm-charcoal hover:bg-warm-beige/40",
    text: "text-warm-charcoal hover:text-accent-gold px-2 py-1"
  };

  const combinedStyle = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={combinedStyle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedStyle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
