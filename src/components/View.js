import React from "react";
import PropTypes from "prop-types";

function View({
  children,
  style,
  id,
  className,
  onClick,
  tabIndex,
  ariaLabel,
}) {
  return (
    <div
      style={style}
      id={id}
      className={className}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

View.defaultProps = {
  style: {},
  id: "",
  className: "",
  onClick: () => {},
  tabIndex: 0,
  ariaLabel: "",
};

View.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  ariaLabel: PropTypes.string,
};

export default View;
