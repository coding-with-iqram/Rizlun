import React from 'react';
import { cn } from '../utils/cn';

const ResponsiveWrapper = ({
  children,
  className,
  as: Component = 'div',
  container = false,
  maxWidth = '7xl',
  padding = true,
  responsive = true,
  ...props
}) => {
  const baseClasses = cn(
    // Base responsive classes
    responsive && 'w-full',
    
    // Container styles
    container && [
      'mx-auto',
      padding && 'px-4 sm:px-6 lg:px-8',
      maxWidth && `max-w-${maxWidth}`,
    ],
    
    // Responsive utilities
    responsive && [
      'transition-all duration-300',
      'animate-fade-in',
    ],
    
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Responsive Section Component
export const ResponsiveSection = ({
  children,
  className,
  as: Component = 'section',
  padding = 'responsive',
  background = 'transparent',
  ...props
}) => {
  const paddingClasses = {
    none: '',
    small: 'py-4 sm:py-6 lg:py-8',
    responsive: 'py-8 sm:py-12 lg:py-16 xl:py-20',
    large: 'py-12 sm:py-16 lg:py-20 xl:py-24',
  };

  const backgroundClasses = {
    transparent: '',
    surface: 'bg-surface',
    card: 'bg-card',
    primary: 'bg-primary text-primary-foreground',
    accent: 'bg-accent text-accent-foreground',
    gradient: 'bg-gradient-to-br from-background via-surface to-card',
  };

  const baseClasses = cn(
    'w-full',
    paddingClasses[padding],
    backgroundClasses[background],
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Responsive Grid Component
export const ResponsiveGrid = ({
  children,
  className,
  as: Component = 'div',
  cols = 'responsive',
  gap = 'responsive',
  ...props
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    responsive: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5',
  };

  const gapClasses = {
    small: 'gap-3 sm:gap-4 lg:gap-6',
    responsive: 'gap-4 sm:gap-6 lg:gap-8',
    large: 'gap-6 sm:gap-8 lg:gap-12',
  };

  const baseClasses = cn(
    'grid',
    colsClasses[cols],
    gapClasses[gap],
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Responsive Card Component
export const ResponsiveCard = ({
  children,
  className,
  as: Component = 'div',
  padding = 'responsive',
  shadow = 'luxury',
  rounded = 'responsive',
  hover = false,
  ...props
}) => {
  const paddingClasses = {
    small: 'p-3 sm:p-4 lg:p-6',
    responsive: 'p-4 sm:p-6 lg:p-8',
    large: 'p-6 sm:p-8 lg:p-12',
  };

  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    luxury: 'shadow-luxury',
    'luxury-lg': 'shadow-luxury-lg',
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-md sm:rounded-lg lg:rounded-xl',
    responsive: 'rounded-lg sm:rounded-xl lg:rounded-2xl',
    large: 'rounded-xl sm:rounded-2xl lg:rounded-3xl',
  };

  const hoverClasses = hover ? 'transition-all duration-300 hover:scale-105 hover:shadow-luxury-lg' : '';

  const baseClasses = cn(
    'bg-card',
    paddingClasses[padding],
    shadowClasses[shadow],
    roundedClasses[rounded],
    hoverClasses,
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Responsive Button Group Component
export const ResponsiveButtonGroup = ({
  children,
  className,
  as: Component = 'div',
  direction = 'responsive',
  alignment = 'center',
  gap = 'responsive',
  ...props
}) => {
  const directionClasses = {
    horizontal: 'flex flex-row',
    vertical: 'flex flex-col',
    responsive: 'flex flex-col sm:flex-row',
  };

  const alignmentClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const gapClasses = {
    small: 'gap-2 sm:gap-3',
    responsive: 'gap-3 sm:gap-4',
    large: 'gap-4 sm:gap-6',
  };

  const baseClasses = cn(
    directionClasses[direction],
    alignmentClasses[alignment],
    gapClasses[gap],
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Responsive Text Component
export const ResponsiveText = ({
  children,
  className,
  as: Component = 'p',
  size = 'responsive',
  weight = 'normal',
  color = 'primary',
  ...props
}) => {
  const sizeClasses = {
    xs: 'text-xs sm:text-sm',
    sm: 'text-sm sm:text-base',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl',
    '3xl': 'text-3xl sm:text-4xl',
    responsive: 'text-base sm:text-lg lg:text-xl',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    accent: 'text-accent',
    muted: 'text-muted-foreground',
  };

  const baseClasses = cn(
    'font-body leading-relaxed',
    sizeClasses[size],
    weightClasses[weight],
    colorClasses[color],
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

// Responsive Heading Component
export const ResponsiveHeading = ({
  children,
  className,
  as: Component = 'h2',
  level = 2,
  size = 'responsive',
  ...props
}) => {
  const headingSizes = {
    1: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
    2: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
    3: 'text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
    4: 'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
    5: 'text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl',
    6: 'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl',
    responsive: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl',
  };

  const baseClasses = cn(
    'font-display font-bold text-primary leading-tight',
    headingSizes[size],
    className
  );

  return (
    <Component className={baseClasses} {...props}>
      {children}
    </Component>
  );
};

export default ResponsiveWrapper; 