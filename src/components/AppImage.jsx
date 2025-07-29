// src/components/AppImage.jsx

import React from 'react';
import PropTypes from 'prop-types';

const AppImage = ({ src, alt, className, ...props }) => {
  return (
    <img
      src={src}
      alt={alt || 'image'}
      className={className || ''}
      loading="lazy"
      {...props}
    />
  );
};

AppImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default AppImage;
