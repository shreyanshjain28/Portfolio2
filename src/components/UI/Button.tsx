import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  outline,
  small,
  className,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-70 disabled:cursor-not-allowed";
  
  const sizeClasses = small 
    ? "px-3 py-1.5 text-sm rounded-lg" 
    : "px-5 py-2.5 text-base rounded-lg";
  
  let variantClasses = "";
  
  if (primary) {
    variantClasses = "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600";
  } else if (secondary) {
    variantClasses = "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200";
  } else if (outline) {
    variantClasses = "border border-gray-300 hover:bg-gray-100 text-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800";
  } else {
    // Default style
    variantClasses = "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600";
  }
  
  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className || ''}`;
  
  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;