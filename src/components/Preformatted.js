import React from "react";
import PropTypes from "prop-types";

function Preformatted({ content, style, id, className, onClick }) {
  return (
    <pre style={style} id={id} className={className} onClick={onClick}>
      {content}
    </pre>
  );
}

Preformatted.defaultProps = {
  content: "",
  style: {},
  id: "",
  className: "",
  onClick: () => {},
};

Preformatted.propTypes = {
  content: PropTypes.string,
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Preformatted;
