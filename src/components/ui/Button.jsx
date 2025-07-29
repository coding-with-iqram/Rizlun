import React from 'react';
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";
import Icon from '../AppIcon';

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground hover:bg-success/90",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90",
        danger: "bg-error text-error-foreground hover:bg-error/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        xs: "h-8 rounded-md px-2 text-xs",
        xl: "h-12 rounded-md px-10 text-lg",
        "mobile-sm": "h-10 px-3 py-2 text-sm sm:h-9 sm:px-3 sm:text-sm",
        "mobile-lg": "h-12 px-6 py-3 text-base sm:h-11 sm:px-8 sm:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  children,
  loading = false,
  iconName = null,
  iconPosition = 'left',
  iconSize = null,
  fullWidth = false,
  disabled = false,
  iconClassName = '',
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  
  const iconSizes = {
    xs: 14,
    sm: 16,
    default: 18,
    lg: 20,
    xl: 24,
    "mobile-sm": 16,
    "mobile-lg": 20,
  };

  const currentIconSize = iconSize || iconSizes[size] || iconSizes.default;

  const renderIcon = () => {
    if (!iconName) return null;
    
    return (
      <Icon 
        name={iconName} 
        size={currentIconSize} 
        className={cn("transition-transform duration-200", iconClassName)}
      />
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
          Loading...
        </>
      );
    }

    if (iconName && iconPosition === 'left') {
      return (
        <>
          {renderIcon()}
          <span className="ml-2">{children}</span>
        </>
      );
    }

    if (iconName && iconPosition === 'right') {
      return (
        <>
          <span className="mr-2">{children}</span>
          {renderIcon()}
        </>
      );
    }

    return children;
  };

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size }),
        fullWidth && "w-full",
        className
      )}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {renderContent()}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
export default Button;
