import React, { useState, useEffect } from "react";
import ColorWheel from "@uiw/react-color-wheel";

const PopUpColorWheel = ({ onChangeColor, isVisible, onClose }) => {
  const [color, setColor] = useState({ hex: "#000000" });

  useEffect(() => {
    const colorizeIcon = document.querySelector("[data-testid='ColorizeIcon']");
    if (colorizeIcon) {
      colorizeIcon.addEventListener("click", handleIconClick);
    }
    return () => {
      if (colorizeIcon) {
        colorizeIcon.removeEventListener("click", handleIconClick);
      }
    };
  }, []);

  const handleIconClick = () => {
    if (onClose) onClose();
  };

  const handleColorChange = (color) => {
    setColor({ hex: color.hex });
    onChangeColor(color.hex);

    const input = document.querySelector(".input.w-353");
    if (input) input.value = color.hex;

    const colorSquare = document.querySelector(".color-square");
    if (colorSquare) colorSquare.style.backgroundColor = color.hex;
  };

  return (
    isVisible && (
      <div
        className="absolute z-50 mt-6 ml-2 w-[394.7px] h-[335px] rounded-tl-[22.11px] border-t-[1.11px] border-black"
        style={{
          position: "absolute",
          zIndex: 9999,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          ✕
        </button>
        <ColorWheel color={color.hex} onChange={handleColorChange} />
      </div>
    )
  );
};

export default PopUpColorWheel;
