import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import PropTypes from 'prop-types';

/**
 * Dynamic Lucide Icon Component
 *
 * Props:
 * - name: Name of the Lucide icon to render (string)
 * - size: Size of the icon (default 24)
 * - color: Color of the icon (default "currentColor")
 * - className: Extra Tailwind or CSS classes (optional)
 * - strokeWidth: Stroke width of the icon lines (default 2)
 */
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  className = '',
  strokeWidth = 2,
  ...props
}) {
  const IconComponent = LucideIcons[name];

  // If icon not found, show fallback icon
  if (!IconComponent) {
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}

// Props validation
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default Icon;
