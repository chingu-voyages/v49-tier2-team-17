import React from "react";
import Button from "./Button";
import Input from "./Input";

export const Form = () => {
  return (
    <div>
      <h1>Welcome to your color picker</h1>
      <p>Choose a color or input your color code, give us some instructions, and see your custome recommended color palette!</p>
      <Input labelName="Choose a color or input your color code:" placeholder="#000000" />
      <Input labelName="Give us some instructions:" placeholder="Ex: Suggest compatible colors based on the color given for a simple logo for a clothing brand." />
      <Button buttonText="Get Palette" />
    </div>
  );
};
