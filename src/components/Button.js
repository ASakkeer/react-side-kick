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
  style: {},
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
