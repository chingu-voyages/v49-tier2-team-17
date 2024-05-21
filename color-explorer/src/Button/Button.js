import React from "react";

const Button = ({ buttonText }) => {
  return (
    <div className="mt-14">
      <button className="font-sometype text-2xl w-214 h-57 rounded-custom button-custom border-2 border-black">{buttonText}</button>
    </div>
  );
};

export default Button;
