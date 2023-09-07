import React from "react";
import PropTypes from "prop-types";

function Select({
  value,
  options,
  onChange,
  style,
  id,
  className,
  name,
  disabled,
  autoFocus,
  multiple,
  size,
  onBlur,
  onFocus,
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={style}
      id={id}
      className={className}
      name={name}
      disabled={disabled}
      autoFocus={autoFocus}
      multiple={multiple}
      size={size}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.defaultProps = {
  value: "",
  options: [],
  onChange: () => {},
  style: {},
  id: "",
  className: "",
  name: "",
  disabled: false,
  autoFocus: false,
  multiple: false,
  size: 1,
  onBlur: () => {},
  onFocus: () => {},
};

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onChange: PropTypes.func,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  multiple: PropTypes.bool,
  size: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default Select;
