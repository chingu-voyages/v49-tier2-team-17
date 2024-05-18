import React from "react";

const Input = ({ labelName, placeholder }) => {
  return (
    <div className="mb-4 grid grid-cols-1">
      <div>
        <label className="text-xl font-sometype font-bold">{labelName}</label>
      </div>
      <div className="relative">
        <input type="text" placeholder={placeholder} className="input w-full font-sometype text-base" />
      </div>
    </div>
  );
};

export default Input;
