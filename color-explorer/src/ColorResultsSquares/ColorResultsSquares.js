import React from "react";


export const ColorResultsSquares = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8"]; // Add your color hex codes here

  return (
    <div className="flex items-center justify-center w-full">
      {colors.map((color, index) => (
        <div
          id="results-squares"
          key={index}
          className=""
          style={{ backgroundColor: color }}
        >
          <p className="text-center text-white">{color}</p>
        </div>
      ))}
    </div>
  );
};

