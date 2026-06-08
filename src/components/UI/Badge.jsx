import React from 'react';

const Badge = ({
  children,
  variant = 'default', // default, accent, secondary, success
  className = '',
  ...props
}) => {
  const baseStyle = "inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium border transition-colors duration-200";
  
  const variants = {
    default: "bg-warm-beige/50 text-warm-charcoal border-warm-beige/80",
    accent: "bg-accent-blue/40 text-warm-charcoal border-accent-blue/60",
    secondary: "bg-accent-gold/15 text-warm-charcoal border-accent-gold/25",
    success: "bg-[#e8f5e9] text-[#2e7d32] border-[#c8e6c9]"
  };

  const combinedStyle = `${baseStyle} ${variants[variant]} ${className}`;

  return (
    <span className={combinedStyle} {...props}>
      {children}
    </span>
  );
};

export default Badge;
