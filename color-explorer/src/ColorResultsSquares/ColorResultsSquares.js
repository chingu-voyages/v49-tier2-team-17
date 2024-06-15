import React from "react";


export const ColorResultsSquares = ({ colors }) => {
  return (
    <div className="color-grid flex items-center justify-center w-full">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-block"
          style={{ backgroundColor: color }}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

