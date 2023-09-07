import React from "react";
import PropTypes from "prop-types";

function Image({
  src,
  alt,
  width,
  height,
  style,
  id,
  className,
  onClick,
  borderRadius,
}) {
  const imageStyle = {
    ...style, // Preserve existing styles
    borderRadius: borderRadius ? `${borderRadius}px` : "0", // Apply border radius if provided
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={imageStyle}
      id={id}
      className={className}
      onClick={onClick}
    />
  );
}

Image.defaultProps = {
  src: "",
  alt: "",
  width: "",
  height: "",
  style: {},
  id: "",
  className: "",
  onClick: () => {},
  borderRadius: 0, // Default border radius is 0 (no rounded corners)
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  borderRadius: PropTypes.number, // Prop for specifying border radius
};

export default Image;
