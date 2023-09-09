import React from "react";
import PropTypes from "prop-types";

function TextInput({
  value,
  type,
  onChange,
  placeholder,
  style,
  containerStyle,
  id,
  disabled,
  className,
  name,
  onClick,
}) {
  return (
    <div style={containerStyle}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
        disabled={disabled}
        className={className}
        name={name}
        onClick={onClick}
      />
    </div>
  );
}

TextInput.defaultProps = {
  value: "",
  type: "text",
  onChange: () => {},
  placeholder: "",
  style: {
    width: "100%",
    outline: "none",
    padding: "20px 15px",
    boxShadow: "0 4px 10px rgba(0,0,0,.03)",
    border: "none",
    marginBottom: "15px",
    borderRadius: "5px",
  },
  containerStyle: {},
  id: "",
  disabled: false,
  className: "",
  name: "",
  onClick: () => {},
};

TextInput.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextInput;
