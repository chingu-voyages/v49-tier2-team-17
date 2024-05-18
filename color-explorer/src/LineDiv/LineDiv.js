import React from "react";

const LineDiv = ({ lineClass = "w-full h-px bg-black mb-2 mt-0" }) => {
  return (
    <div>
      <div className={lineClass}></div>
    </div>
  );
};

export default LineDiv;
