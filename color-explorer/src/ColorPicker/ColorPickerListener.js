import React, { useState, useEffect } from "react";
import PopUpColorWheel from "./PopUpColorWheel";

const ColorPickerListener = ({ onChangeColor }) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState("#FFFFFF")

  useEffect(() => {
    const handleIconClick = () => {
      setColorPickerVisible(true);
    };

    const icon = document.querySelector("[data-testid='ColorizeIcon']");
    if (icon) {
      icon.addEventListener("click", handleIconClick);
    }

    return () => {
      if (icon) {
        icon.removeEventListener("click", handleIconClick);
      }
    };
  }, []);

  const handleColorChange = (color) => {
    setCurrentColor(color);

    const input = document.querySelector(".input.w-353");
    const colorSquare = document.querySelector(".color-square");

    if (input) {
      input.value = color;
    }

    if (colorSquare) {
      colorSquare.style.backgroundColor = color;
    }

    onChangeColor(color);
  };

  return (
    <PopUpColorWheel
      isVisible={colorPickerVisible}
      onChangeColor={handleColorChange}
      onClose={() => setColorPickerVisible(false)}
      initialColor={currentColor}
    />
  );
};

export default ColorPickerListener;
