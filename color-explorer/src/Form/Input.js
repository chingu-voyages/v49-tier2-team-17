import React from "react";

const Input = ({ labelName, placeholder }) => {
  return (
    <div>
      <label>{labelName}</label>
      <input type="text" placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
