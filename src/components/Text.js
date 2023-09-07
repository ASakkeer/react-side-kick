import React from "react";
import PropTypes from "prop-types";

function Text({ text, style, id, className, onClick, title }) {
  return (
    <p
      style={style}
      id={id}
      className={className}
      onClick={onClick}
      title={title}
    >
      {text}
    </p>
  );
}

Text.defaultProps = {
  text: "",
  style: {},
  id: "",
  className: "",
  onClick: () => {},
  title: "",
};

Text.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default Text;
