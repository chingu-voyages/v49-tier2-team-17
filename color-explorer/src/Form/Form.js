import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import LineDiv from "../LineDiv/LineDiv";
import ColorizeIcon from "@mui/icons-material/Colorize";

export const Form = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3">
        <div className="text-left">
          <h1 className="font-sometype text-4xl font-bold leading-114 mb-4">
            Welcome to your color picker
          </h1>
          <p className="font-sometype text-base text-xl font-normal mb-4">
            Choose a color or input your
            color code, give us some
            instructions, and see your
            custom recommended color
            palette!
          </p>
          <Input
            labelName="Give us some instructions:"
            placeholder="Ex: Suggest compatible colors based on the color given for a simple logo for a clothing brand."
          />
          <LineDiv lineClass="w-967 h-px bg-black mb-2" />
          <div>
            <Input
              labelName="Choose a color or input your color code:"
              placeholder="#000000"
            />
            <ColorizeIcon></ColorizeIcon>
          </div>
          <LineDiv lineClass="w-353 h-px bg-black mb-2" />
          <Button buttonText="Get Palette" />
        </div>
      </div>
    </div>
  );
};
