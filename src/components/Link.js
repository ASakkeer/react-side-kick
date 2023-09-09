import React from "react";
import PropTypes from "prop-types";

function Link({ href, text, target, rel, style, id, className, onClick }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={style}
      id={id}
      className={className}
      onClick={onClick}
    >
      {text}
    </a>
  );
}

Link.defaultProps = {
  href: "#",
  text: "",
  target: "_self",
  rel: "",
  style: {
    color: "#7C3E66",
  },
  id: "",
  className: "",
  onClick: () => {},
};

Link.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  rel: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Link;
