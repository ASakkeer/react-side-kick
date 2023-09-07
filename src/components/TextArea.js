import React from "react";
import PropTypes from "prop-types";

function TextArea({
  value,
  onChange,
  placeholder,
  rows,
  cols,
  style,
  id,
  className,
  name,
  disabled,
  maxLength,
  minLength,
  autoFocus,
  onFocus,
  onBlur,
}) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      style={style}
      id={id}
      className={className}
      name={name}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      autoFocus={autoFocus}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

TextArea.defaultProps = {
  value: "",
  onChange: () => {},
  placeholder: "",
  rows: 3,
  cols: 20,
  style: {},
  id: "",
  className: "",
  name: "",
  disabled: false,
  maxLength: undefined,
  minLength: undefined,
  autoFocus: false,
  onFocus: () => {},
  onBlur: () => {},
};

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  autoFocus: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default TextArea;
