import React from "react";
import PropTypes from "prop-types";

function List({ items, style, id, className, onClick, listType }) {
  const ListTag = listType === "ol" ? "ol" : "ul";

  return (
    <ListTag style={style} id={id} className={className} onClick={onClick}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ListTag>
  );
}

List.defaultProps = {
  items: [],
  style: {},
  id: "",
  className: "",
  onClick: () => {},
  listType: "ul", // Default to unordered list (ul)
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  listType: PropTypes.oneOf(["ul", "ol"]), // ul (unordered list) or ol (ordered list)
};

export default List;
