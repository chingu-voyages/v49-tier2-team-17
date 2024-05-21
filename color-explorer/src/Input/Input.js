import React from "react";

const Input = ({
  labelName,
  placeholder,
  className,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="mb-4 grid grid-cols-1">
      <div>
        <label className="text-xl font-sometype font-bold">
          {labelName}
        </label>
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className={className}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;
