import React from "react";
import PropTypes from "prop-types";

function Button({
  children,
  type,
  onClick,
  style,
  id,
  className,
  disabled,
  autoFocus,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      id={id}
      className={className}
      disabled={disabled}
      autoFocus={autoFocus}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  onClick: () => {},
  style: {
    width: "100%",
    outline: "none",
    padding: "20px 15px",
    boxShadow: "0 4px 10px rgba(0,0,0,.03)",
    border: "none",
    borderRadius: "5px",
  },
  id: "",
  className: "",
  disabled: false,
  autoFocus: false,
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default Button;
