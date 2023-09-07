import React from "react";
import PropTypes from "prop-types";

function Header({ level, text, style, id, className, onClick }) {
  const HeaderTag = `h${level}`;

  return (
    <HeaderTag style={style} id={id} className={className} onClick={onClick}>
      {text}
    </HeaderTag>
  );
}

Header.defaultProps = {
  level: 1, // Default to h1
  text: "",
  style: {},
  id: "",
  className: "",
  onClick: () => {},
};

Header.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]), // Heading level (1 to 6)
  text: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Header;
