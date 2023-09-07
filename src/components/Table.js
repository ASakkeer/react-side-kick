import React from "react";
import PropTypes from "prop-types";

function Table({
  data,
  columns,
  style,
  id,
  className,
  onClick,
  border,
  cellSpacing,
  cellPadding,
}) {
  return (
    <table
      style={style}
      id={id}
      className={className}
      onClick={onClick}
      border={border}
      cellSpacing={cellSpacing}
      cellPadding={cellPadding}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  data: [],
  columns: [],
  style: {},
  id: "",
  className: "",
  onClick: () => {},
  border: 1, // Default border thickness
  cellSpacing: 0, // Default cell spacing
  cellPadding: 0, // Default cell padding
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)),
  columns: PropTypes.arrayOf(PropTypes.node),
  style: PropTypes.object,
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  border: PropTypes.number,
  cellSpacing: PropTypes.number,
  cellPadding: PropTypes.number,
};

export default Table;
