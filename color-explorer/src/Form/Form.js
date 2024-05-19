import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ColorizeIcon from "@mui/icons-material/Colorize";
import ColorSquare from "../ColorSquare/ColorSquare";

export const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3">
        <div className="text-left">
          <h1 className="font-sometype text-4xl font-bold leading-114 mb-4">Welcome to your color picker</h1>
          <p className="font-sometype text-base text-xl font-normal mb-14">Choose a color or input your color code, give us some instructions, and see your custom recommended color palette!</p>
          <Input
            labelName="Give us some instructions:"
            placeholder="Ex: Suggest compatible colors based on the color given for a simple logo for a clothing brand."
            className="input w-967 font-sometype text-base border-b-4 border-black focus:border-b-4 focus:outline-none"
          />
          <div className="flex items-center">
            <Input labelName="Choose a color or input your color code:" placeholder="#000000" className="input w-353 font-sometype text-base border-b-4 border-black focus:border-b-4 focus:outline-none." />
            <ColorizeIcon className="-ml-24 mt-6 cursor-pointer" />
            <ColorSquare />
          </div>
          <Button buttonText="Get Palette" />
        </div>
      </div>
    </div>
  );
};
